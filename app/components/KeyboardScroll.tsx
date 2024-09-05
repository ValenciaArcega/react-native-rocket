/**
 * La gran mayoria de esta lógica fue desarrollada por el autor @iway1
 * Dado que su libreria no tiene soporte para React^18
 * complica tener la dependencia en un proyecto a gran escala,
 * por lo que las funcionalidades requeridas para este proyecto
 * fueron reutilizadas en este archivo.
 * Todo merito de esa lógica le pertenece al autor y su repositorio es
 * https://github.com/iway1/react-native-keyboard-avoider 🚀.
 */
import React, { createContext, useContext, useMemo, useRef, useEffect, ReactNode, useState, memo } from "react";
import { KeyboardEventListener, NativeScrollEvent, NativeSyntheticEvent, Platform, ScrollViewProps, View, ScrollView, Keyboard, Dimensions, StyleSheet } from "react-native";
import Animated, { scrollTo, useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { TextInput } from 'react-native';

export type CommonProps = {
	/**
	 * Duration of the keyboard avoiding animation.
	 */
	animationTime?: number,
	/**
	 * Extra space between the keyboard avoiding element and the keyboard.
	 */
	extraSpace?: number,
	/**
	 * Easing function to use. Can be any `react-native-reanimated` easing function. Defaults to Easing.quad.
	 * Open animation will use Easing.out(animationEasing), close animation will use Easing.in(animationEasing).
	 */
	animationEasing?: Animated.EasingFunction
}

export const defaultCommonProps = {
	animationTime: 150,
	animationEasing: Easing.quad,
	extraSpace: 20,
}

export function useKeyboardHandlers({
	showHandler,
	hideHandler,
	enabled = true,
}: {
	showHandler: KeyboardEventListener,
	hideHandler: KeyboardEventListener,
	enabled?: boolean,
}, deps?: any[]) {
	useEffect(() => {
		if (!enabled) return;
		const subscribe = Keyboard.addListener(
			Platform.OS == 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
			showHandler,
		)
		const subscribe2 = Keyboard.addListener(
			Platform.OS == 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
			hideHandler,
		)
		return () => {
			subscribe.remove()
			subscribe2.remove()
		}
	}, deps ? [enabled].concat(deps) : [enabled])
}

export async function measureFocusedInputBottomYAsync() {
	return new Promise<number>(resolve => {
		const input = TextInput.State.currentlyFocusedInput();
		if (!input) return;
		input.measure((x, y, width, height, pageX, pageY) => {
			resolve(pageY + height);
		});
	});
}

export function measureFocusedInputBottomY(
	callback: (bottomY: number) => void,
) {
	const input = TextInput.State.currentlyFocusedInput();
	if (!input) return;
	input.measure((x, y, width, height, pageX, pageY) => {
		callback(pageY + height);
	});
}

export function measureInputBottomYAsync() {
	return new Promise<number>(resolve => {
		measureFocusedInputBottomY(resolve);
	});
}

export function calcAndroidSystemPan({
	keyboardEndY,
	inputBottomY,
}: {
	keyboardEndY: number;
	inputBottomY: number;
}) {
	const delta = inputBottomY - keyboardEndY;
	return Math.max(0, delta);
}

export function closeAnimation(
	duration: number,
	easing: Animated.EasingFunction,
) {
	return {
		duration: duration + 50,
		easing: Easing.out(easing),
	};
}

export function openAnimation(
	duration: number,
	easing: Animated.EasingFunction,
) {
	return {
		duration,
		easing: Easing.out(easing),
	};
}

const ScrollContext = createContext<{
	registerView: ({ view, id, }: { view: View, id: string }) => void,
	unregisterView: (id: string) => void,
} | null>(null);

type Props = ScrollViewProps & CommonProps & {
	/**
	 * What to do when the keyboard hides on iOS.
	 * @option 'stay' - *Default* scroll view will not move when the keyboard hides (it will stay where it is.)
	 * @option 'revert' - Scroll view will return to its original position when the keyboard hides. 
	 */
	iosHideBehavior?: 'stay' | 'revert',
}

async function measureView(view: View) {
	return new Promise<{ top: number, bottom: number }>(resolve => {
		view.measure((x, y, width, height, px, py) => {
			resolve({ bottom: py + height, top: py });
		})
	})
}

export default function KeyboardAvoiderScrollView({
	animationEasing = defaultCommonProps.animationEasing,
	animationTime = defaultCommonProps.animationTime,
	extraSpace = defaultCommonProps.extraSpace,
	iosHideBehavior = 'stay',
	...props
}: Props) {
	const scrollviewRef = useAnimatedRef<ScrollView>();
	const registeredSectionViews = useRef<{ [id: string]: View }>({});
	const keyboardTopRef = useRef<number>(0);
	const currentScroll = useRef<number>(0);
	const scrollMax = useRef<number>(0);
	const androidPannedBy = useRef<number>(0);
	const androidFocusScrolledBy = useRef<number>(0);
	const scrollViewHeight = useRef<number>(0);
	const spacerHasLayout = useRef<boolean>(false);
	const scroll = useSharedValue(0);
	const yTranslate = useSharedValue(0);

	const yTranslateStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: yTranslate.value }]
	}))

	useDerivedValue(() => {
		scrollTo(scrollviewRef, 0, scroll.value, false)
	})

	function scrollBy(y: number) {
		yTranslate.value = withTiming(-y, { duration: animationTime })
	}

	async function scrollToKeyboard(y: number, keyboardY: number, inputBottomY: number) {
		spacerHasLayout.current = false;

		if (Platform.OS == 'android') {
			androidPannedBy.current = Math.max(0, inputBottomY - keyboardY);
			console.log("Panned by: ", androidPannedBy.current)
			const s = Math.max(y - keyboardY + extraSpace - androidPannedBy.current, 0);
			scrollBy(s)
			return;
		} else if (Platform.OS == 'ios') {

			const scrollByY = y + extraSpace - keyboardY;
			if (scrollByY <= 0) return;
			scrollBy(scrollByY)
		}
	}

	const handleKeyboardWillShow: KeyboardEventListener = (e) => {
		keyboardTopRef.current = e.endCoordinates.screenY;
		const promises = Object.values(registeredSectionViews.current).map(e => measureView(e));
		(async function () {
			const inputMeasurePromise = measureFocusedInputBottomYAsync();
			const sectionViewMeasures = await Promise.all(promises);
			const inputMeasure = await inputMeasurePromise;

			for (var sectionMeasure of sectionViewMeasures) {
				if (inputMeasure <= sectionMeasure.bottom && inputMeasure >= sectionMeasure.top) {
					scrollToKeyboard(sectionMeasure.bottom, e.endCoordinates.screenY, inputMeasure)
					return;
				}
			}
			scrollToKeyboard(inputMeasure, e.endCoordinates.screenY, inputMeasure)
		})()
	}

	function handleKeyboardWillHide() {
		if (Platform.OS == 'android' || iosHideBehavior == 'revert') {
			yTranslate.value = withTiming(0, closeAnimation(animationTime, animationEasing))
			return;
		}
		const scrollsToAdjustedForTranslate = currentScroll.current - yTranslate.value;
		const scrollY = Math.min(scrollsToAdjustedForTranslate, scrollMax.current)

		if (scrollsToAdjustedForTranslate >= scrollMax.current) {
			// In cases where there is no room to actually scroll the scroll view we just animate back to the
			// start position.
			yTranslate.value = withTiming(0, closeAnimation(animationTime, animationEasing))
			return;
		}

		scrollviewRef.current?.scrollTo({ y: scrollY, animated: false },)
		yTranslate.value = 0;
	}

	useKeyboardHandlers({
		showHandler: handleKeyboardWillShow,
		hideHandler: handleKeyboardWillHide
	})
	return (
		<ScrollContext.Provider
			value={
				useMemo(() => {
					return {
						registerView: ({ id, view }) => {
							registeredSectionViews.current[id] = view
						},
						unregisterView: (id) => {
							delete registeredSectionViews.current[id];//
						}
					}
				}, [])
			}
		>
			<ScrollView
				ref={scrollviewRef}
				scrollEventThrottle={1}
				{...props}
				onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
					if (props.onScroll) props.onScroll(e);
					currentScroll.current = e.nativeEvent.contentOffset.y
					scrollMax.current = e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height
					scrollViewHeight.current = e.nativeEvent.layoutMeasurement.height;
				}}
			>
				<Animated.View
					style={[yTranslateStyle, { flex: 1, }]}
				>
					{props.children}
				</Animated.View>
			</ScrollView>
		</ScrollContext.Provider>
	)
}

export function useScrollViewContext() {
	return useContext(ScrollContext);
}

/**
 * Provider for the App
 */
const KeyboardAvoidingContext = createContext<{ appHeight: number }>({ appHeight: 0 })

export function KeyboardAvoiderProvider({
	children,
}: { children: ReactNode }) {
	const [appHeight, setAppHeight] = useState<number>(Dimensions.get('window').height);

	return (
		<KeyboardAvoidingContext.Provider value={{ appHeight, }}>
			<View
				style={{ flex: 1 }}
				onLayout={(e) => setAppHeight(e.nativeEvent.layout.height)}
			>
				{children}
			</View>
		</KeyboardAvoidingContext.Provider>
	)
}

export function useAppHeight() {
	return useContext(KeyboardAvoidingContext);
}

/**
 * @author ValenciaArcega
 * Utiliza lo más relevante del scroll como
 * deslizar para bajar el teclado y permitir
 * presionar la pantalla mientras el teclado esta activo.
 * Permite evadir la superposición del "large header" de react 
 * navigation al contenido.
 */
export const KeyboardScroll = memo(function KeyboardScroll({ children }: { children: ReactNode }) {
	return <KeyboardAvoiderScrollView
		contentInsetAdjustmentBehavior="automatic"
		showsVerticalScrollIndicator={false}
		keyboardShouldPersistTaps="always"
		keyboardDismissMode="on-drag"
		contentContainerStyle={sK.keyboard}>
		{children}
	</KeyboardAvoiderScrollView>
})
/**
 * @description
 * Usar `StyleSheet.create()` en lugar de estilos en línea es recomendable por las siguientes razones:
 * @equality
 * `{}` es diferente de `{}` en React, ya que cada vez que se crea un nuevo objeto en línea, su referencia es distinta, lo que puede causar renderizados innecesarios. Usar `StyleSheet.create` evita este problema al mantener referencias constantes.
*
 * @performance
 * `StyleSheet.create` optimiza los estilos, asegurando que solo se procesen una vez, a diferencia de los estilos en línea que se recrean en cada renderizado, impactando negativamente el rendimiento.
 *
 * @scalability
 * Centraliza y reutiliza los estilos, facilitando la gestión y mantenimiento del código en aplicaciones grandes.
 *
 */
const sK = StyleSheet.create({
	keyboard: { flexGrow: 1 }
})

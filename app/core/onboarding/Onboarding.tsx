import { LoaderBtn } from "@/app/components/Loaders";
import { useAppearance } from "@/app/hooks/useAppearance";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import { btnBase, wrView } from "@/app/utils/tw-ui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export function Onboarding() {
	const [isTakingOff, setIsTakingOff] = useState(false)
	const { isDarkMode } = useAppearance()
	const { navigation } = useNavigateApp()

	const buttonWidth = useSharedValue('90%');
	const buttonScale = useSharedValue(1);
	const imageScale = useSharedValue(1);

	useEffect(() => {
		if (isTakingOff) {
			buttonWidth.value = withSpring('40%', { duration: 2000 });
			imageScale.value = withSpring(1.4, { duration: 2500 });

			setTimeout(() => {
				navigation.goBack();
				setIsTakingOff(false);
				buttonWidth.value = '100%';
				imageScale.value = 1;
			}, 2200);
		}
	}, [isTakingOff]);

	const animatedButtonStyle = useAnimatedStyle(() => ({
		width: buttonWidth.value,
		transform: [{ scale: buttonScale.value }],
	}));

	const animatedImageStyle = useAnimatedStyle(() => ({
		transform: [{ scale: imageScale.value }],
	}));

	return <View className={wrView + " pt-[20%] items-center"}>
		<Animated.Image
			source={require("@/assets/img/lux/lux-dumbbell.png")}
			className="h-[264px] w-[264px]"
			style={animatedImageStyle}
		/>

		<Text numberOfLines={1}
			className="mt-1 font-semibold text-2xl tracking-[-.8px] px-4 dark:text-white"
		>Rocket te da la bienvenida.</Text>
		<Text
			className="text-center text-gray-500 dark:text-gray-400 text-lg font-normal mt-4 px-4"
		>La aplicación ideal para gestionar tu vida deportiva y ayudarte a organizar tus metas, logros, horarios y ejercicios.</Text>

		<Animated.View className="w-full items-center"
			style={animatedButtonStyle}>
			<TouchableOpacity
				onPress={() => setIsTakingOff(true)}
				className={btnBase + " mt-16 bg-black dark:bg-white w-[90%] flex-row gap-x-2"}>
				{isTakingOff ? <LoaderBtn />
					: <>
						<MaterialCommunityIcons name="rocket-launch" size={30} color={isDarkMode ? "black" : "white"} />
						<Text className="text-white dark:text-black text-[17px] font-normal">Despegar Ahora</Text>
					</>
				}
			</TouchableOpacity>
		</Animated.View>
	</View>
}
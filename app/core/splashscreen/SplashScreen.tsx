import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import { useCallback, useEffect } from 'react'

export default function SplashScreenHandler({ children }) {
	const [fontsLoaded] = useFonts({
		"Inter-Bold": require("@/assets/fonts/inter/Inter-Bold.ttf"),
		"Inter-ExtraBold": require("@/assets/fonts/inter/Inter-ExtraBold.ttf"),
		"Inter-Medium": require("@/assets/fonts/inter/Inter-Medium.ttf"),
		"Inter-Regular": require("@/assets/fonts/inter/Inter-Regular.ttf"),
		"Inter-SemiBold": require("@/assets/fonts/inter/Inter-SemiBold.ttf"),
	})

	useEffect(() => {
		(async () => {
			await SplashScreen.preventAutoHideAsync()
		})()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) return null

	return <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
		{children}
	</View>
}

// export function SplashScreenHandler({ children }) {
// 	const [fontsLoaded] = useFonts({
// 		"Inter-Bold": require("@/assets/fonts/inter/Inter-Bold.ttf"),
// 		"Inter-ExtraBold": require("@/assets/fonts/inter/Inter-ExtraBold.ttf"),
// 		"Inter-Medium": require("@/assets/fonts/inter/Inter-Medium.ttf"),
// 		"Inter-Regular": require("@/assets/fonts/inter/Inter-Regular.ttf"),
// 		"Inter-SemiBold": require("@/assets/fonts/inter/Inter-SemiBold.ttf"),
// 	})

// 	const [isReady, setIsReady] = useState(false)

// 	useEffect(() => {
// 		(async () => {
// 			await SplashScreen.preventAutoHideAsync()
// 		})()
// 	}, [])

// 	useEffect(() => {
// 		if (fontsLoaded) {
// 			const timer = setTimeout(() => {
// 				setIsReady(true)
// 			}, 3000)
// 			return () => clearTimeout(timer)
// 		}
// 	}, [fontsLoaded])

// 	const onLayoutRootView = useCallback(async () => {
// 		if (isReady) {
// 			await SplashScreen.hideAsync()
// 		}
// 	}, [isReady])

// 	if (!isReady) return null

// 	return <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
// 		{children}
// 	</View>
// }

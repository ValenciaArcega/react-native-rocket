import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '@/app/core/login/Login';

export function RouterNoSession() {
	const stack = createNativeStackNavigator()
	const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null)
	// const [isValidating, setIsValidating] = useState<boolean>(true)

	// useEffect(() => {
	// 	validateAppLoad()
	// }, [])

	// const validateAppLoad = async function () {
	// 	const flag = Boolean(JSON.parse(await AsyncStorage.getItem("HAS_BEEN_INSTALLED")))

	// 	if (flag) {
	// 		setIsFirstTime(false)
	// 		setIsValidating(false)
	// 	} else {
	// 		setIsFirstTime(true)
	// 		await AsyncStorage.setItem("HAS_BEEN_INSTALLED", JSON.stringify(true))
	// 		setIsValidating(false)
	// 	}
	// }

	return (
		// !isValidating && <stack.Navigator
		<stack.Navigator
			screenOptions={{ headerBackTitle: "Atrás" }}
			initialRouteName={isFirstTime ? "Login" : "Login"}>
			<stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false, animation: "fade" }} />
		</stack.Navigator>
	)
}

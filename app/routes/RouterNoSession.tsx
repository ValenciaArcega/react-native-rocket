import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '@/app/core/login/Login';
import ForgotPassword from '../core/login/ForgotPassword';
import SignUp from '../core/login/SignUp';
import { useAppearance } from '../hooks/useAppearance';
import { Onboarding } from '../core/onboarding/Onboarding';

export function RouterNoSession() {
	const stack = createNativeStackNavigator()
	const { isDarkMode } = useAppearance()

	return (
		<stack.Navigator
			screenOptions={{
				headerBackTitle: "Atrás",
				headerStyle: {
					backgroundColor: isDarkMode ? "black" : "white"
				},
				headerTitleStyle: {
					color: !isDarkMode ? "black" : "white"
				}
			}}
			initialRouteName={"Login"}>
			<stack.Screen
				name="Onboarding"
				component={Onboarding}
				options={{
					presentation: "modal",
					gestureEnabled: false,
					headerLargeTitle: false,
					headerShown: false,
					animation: "slide_from_bottom"
				}} />
			<stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false, animation: "slide_from_right" }} />
			<stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: true,
					animation: "slide_from_right",
					headerBackTitle: "Login",
					headerTitle: "",
					headerTransparent: true,
					headerStyle: {},
					headerBlurEffect: "light",
				}} />
			<stack.Screen
				name="ForgotPassword"
				component={ForgotPassword}
				options={{
					presentation: "modal",
					headerLargeTitle: false,
					title: "Recuperar contraseña",
					gestureEnabled: false,
					animation: "slide_from_bottom"
				}} />
		</stack.Navigator>
	)
}

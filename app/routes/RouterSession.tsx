import Login from '@/app/core/login/Login';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Days, Home } from '../core/home/Days';
import { CompleteProfile } from '../core/home/CompleteProfile';
import { Map } from '../core/others/Map';
import { useAppearance } from '../hooks/useAppearance';

export function RouterSession() {
	const stack = createNativeStackNavigator()
	const { isDarkMode } = useAppearance()

	return (
		<stack.Navigator
			screenOptions={{
				headerBackTitle: "Atrás",
				headerStyle: {
					backgroundColor: isDarkMode ? "#0a0a0a" : "#fff"
				},
				headerTitleStyle: {
					color: !isDarkMode ? "#0a0a0a" : "#fff"
				},
				headerTintColor: !isDarkMode ? "#748ffc" : "#fff",
			}}
			initialRouteName="Days">
			<stack.Screen
				name="Days"
				component={Days}
				options={{ headerShown: false, animation: "simple_push" }} />
			<stack.Screen
				name="CompleteProfile"
				component={CompleteProfile}
				options={{
					title: "Completa tu perfil",
					headerShown: true,
					animation: "slide_from_right"
				}} />
		</stack.Navigator>
	)
}

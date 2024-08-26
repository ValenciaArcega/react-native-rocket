import Login from '@/app/core/login/Login';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function RouterSession() {
	const stack = createNativeStackNavigator()

	return (
		<stack.Navigator
			screenOptions={{ headerBackTitle: "Atrás" }}
			initialRouteName={"Login"}>
			<stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false, animation: "fade" }} />
		</stack.Navigator>
	)
}

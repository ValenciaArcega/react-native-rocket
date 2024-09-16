import Login from '@/app/core/login/Login';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home';

export function RouterSession() {
	const stack = createNativeStackNavigator()

	return (
		<stack.Navigator
			screenOptions={{ headerBackTitle: "Atrás" }}
			initialRouteName={"Home"}>
			<stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false, animation: "simple_push" }} />
		</stack.Navigator>
	)
}

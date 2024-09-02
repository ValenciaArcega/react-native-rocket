import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

export function useNavigateApp() {
	const navigation: NavigationProp<ParamListBase> = useNavigation()

	const navigateTo = function (route: string, data?: object) {
		if (data) {
			navigation.navigate(route, data)
			return
		}
		navigation.navigate(route)
	}

	return { navigation, navigateTo }
}

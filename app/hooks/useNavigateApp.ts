
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
/**
 * Navigate to a nested route
 * navReplace.replace("RouterBottomTabs", {
		screen: 'RouterHubTenedor',
		params: {
			screen: 'HubTenedor'
		}
	})
 */
export function useNavigateApp() {
	const navigation: NavigationProp<ParamListBase> = useNavigation()
	const navReplace = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const navigateTo = function (route: string, data?: object) {
		if (data) {
			navigation.navigate(route, data)
			return
		}
		navigation.navigate(route)
	}

	return { navigation, navigateTo, navReplace }
}

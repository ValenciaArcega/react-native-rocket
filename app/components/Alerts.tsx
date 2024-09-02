import { Alert } from "react-native";

export function AlertError(title: string, message: string) {
	Alert.alert(title, message, [{
		text: "Cerrar",
		style: "destructive",
	}])
}

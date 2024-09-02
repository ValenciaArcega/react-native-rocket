import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { stylesServerError as s } from "../styles/st-server-error";
import Animated, { BounceIn } from "react-native-reanimated";

export function ServerError({ style }: { style?: any }) {
	return (
		<View style={[s.container, { ...style }]}>
			<Animated.View
				entering={BounceIn}
				style={s.wrapperIcon}>
				<Ionicons name="warning" size={48} color="white" />
			</Animated.View>
			<Text style={s.txtError}>
				Se perdió la conexión al servidor. Revisa tu conexión a internet e intenta nuevamente o reinicia la aplicación.
			</Text>
		</View>
	)
}

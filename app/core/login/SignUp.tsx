import { KeyboardScroll } from "@/app/components/KeyboardScroll";
import { gs } from "@/app/constants/generalStyles";
import { Text, View } from "react-native";

export default function SignUp() {
	return <View style={gs.containerTight}>
		<KeyboardScroll>
			<Text>Registrate</Text>
		</KeyboardScroll>
	</View>
}

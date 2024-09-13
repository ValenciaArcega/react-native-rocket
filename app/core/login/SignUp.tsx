import { AvoiderKeyboard } from "@/app/components/AvoiderKeyboard";
import { KeyboardScroll } from "@/app/components/KeyboardScroll";
import { appColors } from "@/app/constants/colors";
import { InterWeight } from "@/app/constants/fonts";
import { gs } from "@/app/constants/generalStyles";
import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
	return <View style={gs.containerTight}>
		<AvoiderKeyboard>
			<View className="flex-row items-center justify-center">
				<View className="h-[78px] w-[64px] rounded-xl border border-gray-500 mt-16 -mr-3 rotate-[-10deg]"></View>
				<View style={s.actionHeaderCenterCard}>
					<FontAwesome6 name="building" size={38} color={appColors.p700} />
				</View>
				<View className="h-[78px] w-[64px] rounded-xl border border-gray-500 mt-16 -ml-[12px] rotate-[10deg]"></View>
			</View>
			<Text
				style={{ fontSize: 30, textAlign: "center", marginTop: 8, letterSpacing: -1, fontFamily: InterWeight.w600 }}>
				Acciones</Text>
		</AvoiderKeyboard>
	</View>
}

const s = StyleSheet.create({
	actionHeaderBackCard: {
		height: 78,
		width: 64,
		borderRadius: 12,
		borderColor: "gray",
		borderWidth: 1,
		marginTop: 64,
		marginRight: -12,
		transform: [{ rotate: '-10deg' }]
	},
	actionHeaderCenterCard: {
		height: 106,
		width: 90,
		borderRadius: 12,
		borderColor: appColors.p700,
		borderWidth: 1,
		backgroundColor: appColors.p100,
		zIndex: 2,
		shadowColor: "#000",
		shadowOffset: {
			height: 6,
			width: 0,
		},
		shadowOpacity: 0.3,
		shadowRadius: 12,
		alignItems: "center",
		justifyContent: "center",
	}
})
import { appColors as ac, } from "@/app/constants/colors";
import { InterWeight } from "@/app/constants/fonts";
import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
	wrapperForm: {
		flex: 1,
		justifyContent: "center",
	},
	titleLogin: {
		marginTop: 18,
		fontSize: 30,
		letterSpacing: -.5,
		fontFamily: InterWeight.w500
	},
	wrapperLogin: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
	},
	wrapperPass: {
		flexDirection: "row",
		// gap: 6,
		alignItems: "center",
		justifyContent: "space-between"
	},
	btnShowPass: {
		width: "18%",
		height: 60,
		marginTop: 4,
		borderRadius: 18,
		alignItems: "center",
		justifyContent: "center",
	}
})
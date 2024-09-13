import { appColors as ac, } from "@/app/constants/colors";
import { InterWeight } from "@/app/constants/fonts";
import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
	wrapperForm: {
		flex: 1,
		paddingTop: "50%",
		paddingHorizontal: 20,
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
	},
	txtForgotPass: {
		fontSize: 16,
		textAlign: "right",
		color: ac.p700,
		textDecorationLine: "underline",
		marginTop: 14,
	},
	txtSignUp: {
		marginTop: 22,
		fontSize: 18,
		color: "#181818",
		textAlign: "center",
	},
	txtSignUpPress: {
		textDecorationColor: ac.s600,
		textDecorationLine: "underline",
		width: "100%",
		color: ac.p600,
	}
})
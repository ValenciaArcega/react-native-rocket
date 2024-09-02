import { StyleSheet } from "react-native"
import { appColors as ac } from "../constants/colors"

export const stylesServerError = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: ac.bgWhite,
	},
	wrapperIcon: {
		width: 112,
		height: 112,
		borderRadius: 300,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 9,
		borderColor: "#ffe8cc",
		backgroundColor: "#ff922b",
	},
	txtError: {
		color: ac.frBlack,
		fontSize: 19,
		marginTop: 12,
		lineHeight: 28,
		paddingHorizontal: 32,
		textAlign: "center",
	},
})

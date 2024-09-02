import { StyleSheet } from "react-native";
import { appColors as ac } from "./colors";

export const gs = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerBg: {
		flex: 1,
		backgroundColor: ac.bgWhite,
	},
	containerTight: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: ac.bgWhite,
	},
	scroll: {
		// overflow: "visible",
		minHeight: "100%",
		flexGrow: 1,
	},
	labelInput: {
		marginTop: 14,
		fontSize: 16,
	},
	input__basic: {
		height: 60,
		marginTop: 4,
		paddingHorizontal: 16,
		fontSize: 18,
		borderRadius: 24,
		backgroundColor: ac.bgInput,
	},
	btnBase: {
		minHeight: 64,
		maxHeight: 64,
		width: "100%",
		marginTop: 24,
		borderRadius: 24,
		overflow: "hidden",
		backgroundColor: ac.p600,
		alignItems: "center",
		justifyContent: "center"
	},
	btnBaseTxt: {
		fontSize: 22,
		color: "#fff",
	},
	circleIcon: {
		borderWidth: 9,
		borderColor: ac.p200,
		backgroundColor: ac.p500,
		height: 112, width: 112,
		borderRadius: 300,
		alignItems: "center",
		justifyContent: "center"
	}
})

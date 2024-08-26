
import { LinearGradient } from "expo-linear-gradient";
import { appColors } from "../constants/colors";
import { CustomLinearGradientProps } from "@/app/types/componentProps";

export function CustomLinearGradient({
	children,
	style,
	colors = [appColors.bgWhite, appColors.bgGray],
	horizontal = false
}: CustomLinearGradientProps) {
	const start = horizontal ? { x: 0, y: 0 } : { x: 0, y: 0 };
	const end = horizontal ? { x: 1, y: 0 } : { x: 0, y: 1 };

	return (
		<LinearGradient
			start={start}
			end={end}
			style={{
				height: "100%",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
				gap: 6,
				...style,
			}}
			colors={colors}>
			{children}
		</LinearGradient>
	)
}

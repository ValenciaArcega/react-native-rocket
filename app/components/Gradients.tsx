
import { LinearGradient } from "expo-linear-gradient";
import { appColors } from "../constants/colors";
import { CustomLinearGradientProps } from "@/app/types/componentProps";
import { useAppearance } from "../hooks/useAppearance";

export function CustomLinearGradient({
	children,
	style,
	colors,
	horizontal = false
}: CustomLinearGradientProps) {
	const start = horizontal ? { x: 0, y: 0 } : { x: 0, y: 0 };
	const end = horizontal ? { x: 1, y: 0 } : { x: 0, y: 1 };
	const { isDarkMode } = useAppearance()

	const defaultColors = isDarkMode
		? [appColors.p600, appColors.p800]
		: [appColors.p400, appColors.p600];
	const gradientColors = colors || defaultColors;

	return (
		<LinearGradient
			start={start}
			end={end}
			className="h-full w-full items-center justify-center flex-row"
			style={{ gap: 6, ...style }}
			colors={gradientColors}>
			{children}
		</LinearGradient>
	)
}

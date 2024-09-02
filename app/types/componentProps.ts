import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet"
import { ReactNode } from "react"

export type CustomLinearGradientProps = {
	children: ReactNode
	style?: object
	colors?: string[]
	horizontal?: boolean
}

export type BottomsheetBasicProps = {
	children: React.ReactNode
	snapPoints: string[]
	hasBackdrop?: boolean
	refBottomSheet?: React.RefObject<BottomSheet>
	isCloseOnDrag?: boolean
	backDropPress?: "close" | "none" | "collapse"
	style?: any
	onClose?: () => void
}


import React, { useCallback } from "react"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import { StyleSheet } from "react-native"
import { BottomsheetBasicProps } from "@/app/types/componentProps"
import { useAppearance } from "../hooks/useAppearance"

export function CustomBottomSheet({ children, refBottomSheet, snapPoints, hasBackdrop = true, isCloseOnDrag = false, backDropPress = "none", style, onClose }: BottomsheetBasicProps) {
	const styles = useStylesBottomSheet()
	const { isDarkMode } = useAppearance()

	const renderBackdrop = useCallback(function (props) {
		return <BottomSheetBackdrop
			pressBehavior={backDropPress}
			appearsOnIndex={0}
			disappearsOnIndex={-1} {...props} />
	}, [])

	return (
		<BottomSheet
			style={styles.bottomSheet}
			ref={refBottomSheet}
			index={0}
			onClose={onClose}
			backdropComponent={hasBackdrop ? renderBackdrop : null}
			snapPoints={snapPoints}
			handleIndicatorStyle={{ backgroundColor: '#c5c5c5', width: 48, height: 4, marginTop: 4 }}
			backgroundStyle={{
				backgroundColor: isDarkMode ? "#121212" : "white"
			}}
			enablePanDownToClose={isCloseOnDrag}>
			<BottomSheetView style={[styles.contentContainer, { ...style }]}>
				{children}
			</BottomSheetView>
		</BottomSheet>
	)
}

export function useStylesBottomSheet() {
	return StyleSheet.create({
		bottomSheet: {
			borderRadius: 16,
		},
		contentContainer: {
			paddingHorizontal: 24,
			height: '100%',
		},
	})
}

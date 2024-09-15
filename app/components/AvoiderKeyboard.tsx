import { gs } from "../constants/generalStyles"
import { isiOS } from "../constants/platform"
import { KeyboardAvoidingView, ScrollView } from "react-native"

export function AvoiderKeyboard({ children, offset = 0 }: {
	children: React.ReactNode,
	offset?: number
}) {
	return <KeyboardAvoidingView
		behavior={isiOS ? "padding" : undefined}
		keyboardVerticalOffset={offset}
		className="flex-1">
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			keyboardDismissMode="on-drag"
			showsVerticalScrollIndicator={false}
			keyboardShouldPersistTaps='handled'
			contentContainerStyle={gs.scroll}>
			{children}
		</ScrollView>
	</KeyboardAvoidingView>
}

import { KeyboardScroll } from "@/app/components/KeyboardScroll";
import { useState } from "react";
import { Text } from "react-native";

export function CompleteProfile() {
	const [selectedMuscles, setSelectedMuscles] = useState<number[]>([]);
	/**
	 * @multipleIds
	 * Once the user wanna choose more than one option
	 * and fill the array with those selected ID's
	 */
	const toggleTypeMuscles_onPress = function (id: number) {
		setSelectedMuscles(prevSelected => {
			if (prevSelected.includes(id)) {
				return prevSelected.filter(selectedId => selectedId !== id);
			} else {
				return [...prevSelected, id];
			}
		});
	}
	return <KeyboardScroll>
		<Text>Sup</Text>
	</KeyboardScroll>
}

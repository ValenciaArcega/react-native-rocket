import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from '@react-navigation/elements';

export function useSafeAreas() {
	const heightHeader = useHeaderHeight();
	const insets = useSafeAreaInsets();

	return { heightHeader, insets }
}

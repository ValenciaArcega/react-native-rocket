import { useState } from "react";
import { useNavigateApp } from "./useNavigateApp";

export function useHeaderOnScroll(axis: number = 100) {
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const { navigation } = useNavigateApp()

	const toggleHeader_onScroll = (event) => {
		const scrollY = event.nativeEvent.contentOffset.y;

		if (scrollY > axis && !isHeaderVisible) {
			setIsHeaderVisible(true);
			navigation.setOptions({ headerShown: true });
		} else if (scrollY <= axis && isHeaderVisible) {
			setIsHeaderVisible(false);
			navigation.setOptions({ headerShown: false });
		}
	};

	return { toggleHeader_onScroll }
}

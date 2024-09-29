import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import { btnIconTxtIcon, txtBtnIconTxtIcon, wrView } from "@/app/utils/tw-ui";
import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

export function Panel() {
	const { navigateTo } = useNavigateApp()

	return <View className={wrView + " px-5"}>
		<Pressable
			onPress={() => navigateTo("Map")}
			className={btnIconTxtIcon}>
			<Feather name="map-pin" size={24} color="green" />
			<Text className={txtBtnIconTxtIcon}>Mapa con puntos</Text>
			<Feather name="chevron-right" size={24} color="gray" />
		</Pressable>
	</View>
}
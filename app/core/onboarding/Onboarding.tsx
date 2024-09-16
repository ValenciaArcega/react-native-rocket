import { LoaderBtn } from "@/app/components/Loaders";
import { useAppearance } from "@/app/hooks/useAppearance";
import { btnBase, wrView } from "@/app/utils/tw-ui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function Onboarding() {
	const [isTakingOff, setIsTakingOff] = useState(false)
	const { isDarkMode } = useAppearance()

	return <View className={wrView + " pt-[20%] items-center"}>
		<Image source={require("@/assets/img/lux/lux-dumbbell.png")}
			className="h-[264px] w-[264px]" />

		<Text numberOfLines={1}
			className="mt-1 font-semibold text-2xl tracking-[-.8px] px-4 dark:text-white"
		>Rocket te da la bienvenida.</Text>
		<Text
			className="text-center text-gray-600 dark:text-gray-400 text-lg font-light mt-4 px-4"
		>La aplicación ideal para gestionar tu vida deportiva y ayudarte a organizar tus metas, logros, horarios y ejercicios.</Text>

		<TouchableOpacity
			onPress={() => setIsTakingOff(true)}
			className={btnBase + " mt-16 bg-black dark:bg-white w-[90%] flex-row gap-x-2"}>
			{isTakingOff ? <LoaderBtn />
				: <>
					<MaterialCommunityIcons name="rocket-launch" size={30} color={isDarkMode ? "black" : "white"} />
					<Text className="text-white dark:text-black text-[17px] font-normal">Despegar Ahora</Text>
				</>
			}
		</TouchableOpacity>
	</View>
}
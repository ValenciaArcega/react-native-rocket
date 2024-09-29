import { appColors } from "@/app/constants/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigateApp } from "@/app/hooks/useNavigateApp"
import { Pressable, Text, View } from "react-native"

export function ModalCompleteProfile({ route, description }: {
	route: string
	description: string
}) {
	const { navigateTo } = useNavigateApp()

	return <View
		className="w-[90%] items-center justify-center bg-white dark:bg-[#212529] rounded-2xl p-6 px-4 gap-y-4" >
		<MaterialIcons name="incomplete-circle" size={64} color={appColors.p300} />

		<Text className="text-lg text-slate-800 dark:text-white text-center">
			{description}
		</Text>
		<Pressable
			onPress={() => navigateTo(route)}
			className="h-[54px] w-full rounded-xl items-center justify-center bg-gray-100 dark:bg-gray-700">
			<Text className="text-black dark:text-white text-[19px]">Completar Ahora</Text>
		</Pressable>
	</View >
}

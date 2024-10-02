import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";
import { btnBase, circleIcon, separator, txtBtnBase, wrView } from "../../utils/tw-ui";
import { AvoiderKeyboard } from "../../components/AvoiderKeyboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreas } from "../../hooks/useSafeAreas";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useEffect } from "react";
// import { getMusclesDAL } from "../services/data-access-layer/musclesDAL";
import { MSG } from '@/app/constants/labels';
import { BlurView } from "expo-blur";
import { ModalCompleteProfile } from "../../components/Modal";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { appColors } from "@/app/constants/colors";
import { SymbolView, SymbolViewProps, SFSymbol } from 'expo-symbols';
import { useAppearance } from "@/app/hooks/useAppearance";

const dataWeek = [
	{
		ID_DIA: 1,
		D_DIA: "Lunes",
		TYPE_ROUTINE: "Pierna"
	},
	{
		ID_DIA: 2,
		D_DIA: "Martes",
		TYPE_ROUTINE: "Hombro. Pecho"
	},
	{
		ID_DIA: 4,
		D_DIA: "Jueves",
		TYPE_ROUTINE: "Pierna. Glúteo"
	},
	{
		ID_DIA: 6,
		D_DIA: "Sábado",
		TYPE_ROUTINE: "Espalda. Bícep"
	},
]

export function Days() {
	const { insets } = useSafeAreas()
	const { isDarkMode } = useAppearance()

	useEffect(function () {
		// getMuscles()
	}, [])

	// const getMuscles = async function () {
	// 	try {
	// 		const { data, flag, msg } = await getMusclesDAL()

	// 		console.log(data, flag, msg)
	// 		if (flag) {
	// 			// (data)
	// 		} else if (msg) {
	// 			// Alert
	// 		} else {
	// 			// setServerError(true)
	// 		}
	// 	} finally {
	// 		// setIsLoading(false)
	// 	}
	// }

	return <SafeAreaProvider>
		<View style={{ paddingTop: insets.top }}
			className={wrView + " px-4"}>
			<Text className="text-lg font-medium text-gray-400 mt-4">
				Hola Gabi 👋!</Text>
			<Text className="text-4xl mt-2 font-bold dark:text-white tracking-tighter">
				Mi Rutina</Text>
			<View className={separator} />

			<View className="w-full flex-row flex-wrap justify-between">
				{dataWeek.map(function (item, index) {
					const colors = [
						isDarkMode ? "#075985" : '#e0f2fe',
						isDarkMode ? "rgba(255, 120, 224, 0.33)" : '#f5d0fe',
						isDarkMode ? "rgba(162, 255, 164, 0.33)" : '#f0fdfa',
						isDarkMode ? "rgba(247, 255, 162, 0.57)" : '#fef3c7',
					]
					const images = [
						require("@/assets/img/home/home-leg.png"),
						require("@/assets/img/home/home-shoulder.png"),
						require("@/assets/img/home/home-leg-strech.png"),
						require("@/assets/img/home/home-biceps.png"),
					]
					const color = colors[index % 4];
					const img = images[index % 4];
					return <View
						key={item.ID_DIA}
						className={`w-[48%] h-[216px] px-2 rounded-2xl 
						${index % 2 && "mt-8"}`}
						style={{ backgroundColor: color }}>
						<View className="h-[70%] items-center justify-center">
							<Image
								resizeMode="cover"
								className="h-[154px] w-[154px]"
								source={img}
							/>
						</View>
						<Pressable className="h-[26%] bg-white dark:bg-gray-800 w-full rounded-lg justify-center px-2">
							<Text numberOfLines={2} className="font-semibold text-base dark:text-white">
								{item.D_DIA} -{" "}
								<Text className="text-gray-400 font-medium">
									{item.TYPE_ROUTINE}</Text>
							</Text>
						</Pressable>
					</View>
				})}
			</View>

			<Pressable className={btnBase + " min-h-[56px] rounded-2xl border-2 border-p200 dark:border-gray-700 flex-row"}>
				{/* <Feather name="heart" size={22} color="black" /> */}
				<SymbolView
					tintColor={isDarkMode ? "c5d7ff" : "#748ffc"}
					name="rectangle.stack.badge.plus" style={{
						width: 30,
						height: 30,
						margin: 5,
					}} type="hierarchical" />
				<Text className="text-[20px] text-p600 dark:text-p300">
					Añadir Rutina</Text>
			</Pressable>

		</View>
		{1 !== 1 && <BlurView intensity={20} tint="dark" className="h-full w-full absolute inset-0 items-center justify-center z-50"
			style={{
				backgroundColor: 'rgba(0,0,0,0.2)',
			}}>
			<ModalCompleteProfile route="CompleteProfile" description="Para poder crear tu rutina es necesario completar tus datos de entrenamiento 💪😃" />
		</BlurView>}

		{/* <View
			className="h-full w-full absolute top-0 left-0 items-center justify-center z-50"
			style={{
				backgroundColor: 'rgba(0,0,0,0.7)',
			}}>
			<ModalCompleteProfile route="CompleteProfileTransport" description="Actualiza tu perfil para poder subastar rutas o pujar por mercancías cerca de ti" />
		</View> */}
	</SafeAreaProvider>
}

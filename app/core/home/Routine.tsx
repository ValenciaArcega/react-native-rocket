import { Alert, FlatList, Text, View } from "react-native";
import { circleIcon, wrView } from "../../utils/tw-ui";
import { AvoiderKeyboard } from "../../components/AvoiderKeyboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreas } from "../../hooks/useSafeAreas";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
// import { getMusclesDAL } from "../services/data-access-layer/musclesDAL";
import { MSG } from '@/app/constants/labels';
import { BlurView } from "expo-blur";
import { ModalCompleteProfile } from "../../components/Modal";

export function Days() {
	const { insets } = useSafeAreas()

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
			className={wrView + " px-5"}>
			<Text className="text-lg font-medium text-gray-400 mt-6">
				Hola Valencia 👋!</Text>
			<Text className="text-5xl mt-4 font-bold dark:text-white">
				Lunes.</Text>
			{/* <FlatList
				data={[
					{
						ID_EXERCISE: 1,
						D_EXERCISE: "Sentadilla en Smith",
					}
				]}
				ListEmptyComponent={<Text>No hay datos</Text>}
				renderItem={({ item }) => <Text>{item}</Text>}
			/> */}
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

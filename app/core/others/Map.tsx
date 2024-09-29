import { ModalCompleteProfile } from "@/app/components/Modal";
import { appColors } from "@/app/constants/colors";
import { isAndroid, isiOS } from "@/app/constants/platform";
import { useAppearance } from "@/app/hooks/useAppearance";
import { wrView } from "@/app/utils/tw-ui";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";

const auctionsNear = [
	{ latitude: -19.842202, longitude: -43.985704, counter: 1 },
	{ latitude: -19.857507, longitude: -43.989665, counter: 4 },
	{ latitude: -19.832018, longitude: -43.989660, counter: 2 },
	{ latitude: -19.839963, longitude: -44.001115, counter: 3 },
]
export function Map() {
	const { isDarkMode } = useAppearance()
	const mapRef = useRef<MapView>()
	return <View className="flex-1 relative w-full h-full">
		<View className="bg-white dark:bg-[#212529] p-4 px-4 rounded-2xl max-w-[98%] absolute top-[80px] left-[20px] z-10 shadow-xl gap-1">
			<Text
				className="text-3xl tracking-tight text-black dark:text-white font-semibold">
				Hola{" "}
				<Text className="text-p500 dark:text-p300">
					Angel
				</Text>.
			</Text>
			<Text className="text-gray-500 dark:text-gray-400 text-[18px]">
				¿Qué hay de nuevo hoy?</Text>
		</View>

		<TouchableOpacity
			className="absolute bottom-[4%] right-4 w-16 h-16 bg-white dark:bg-[#212529] rounded-full z-10 items-center justify-center shadow-md"
			style={{
				...(isAndroid && {
					shadowColor: "#000",
					elevation: 12,
				})
			}}>
			<MaterialIcons name="my-location" size={34} color={isDarkMode ? appColors.p500 : appColors.p700} />
		</TouchableOpacity>

		<MapView
			ref={mapRef}
			className="absolute top-0 left-0 w-full min-h-full"
			region={{
				latitude: -19.847946,
				longitude: -43.993125,
				latitudeDelta: 0.0221,
				longitudeDelta: 0.0221,
			}}
			// initialRegion={{
			// 	latitude: (origin.latitude + destination.latitude) / 2,
			// 	longitude: (origin.longitude + destination.longitude) / 2,
			// 	latitudeDelta: Math.abs(origin.latitude - destination.latitude) * 2,
			// 	longitudeDelta: Math.abs(origin.longitude - destination.longitude) * 2,
			// }}
			showsPointsOfInterest={false}
			showsTraffic={false}
			showsBuildings={false}
			showsIndoors={false}
			showsCompass={false}
			showsIndoorLevelPicker={false}
			showsScale={false}
			showsMyLocationButton={false}
			showsUserLocation={true}
			mapType="standard"
			provider={PROVIDER_DEFAULT}
			userInterfaceStyle={isDarkMode ? "dark" : "light"}
		>
			{auctionsNear && auctionsNear.map((item, index) => (
				<Marker
					key={index}
					coordinate={{
						latitude: item.latitude,
						longitude: item.longitude,
					}}
				>
					<Image
						style={{ width: 92, height: 92, zIndex: 2 }}
						source={require("@/assets/img/others/store.png")} />

					<View className="h-6 w-6 bg-yellow-300 text-black absolute top-1 right-0 rounded-full z-50 items-center justify-center">
						<Text className="text-black text-[18px]" numberOfLines={1}>
							{item.counter}
						</Text>
					</View>
				</Marker>
			))}
		</MapView>

		{1 == 1 && <BlurView intensity={20} tint="dark" className="h-full w-full absolute top-0 left-0 items-center justify-center z-50"
			style={{
				backgroundColor: 'rgba(0,0,0,0.2)',
			}}>
			<ModalCompleteProfile route="Some" description="Completa tu perfil para desbloquear nuevas funcionalidades" />
		</BlurView>}

		{/* <View
			className="h-full w-full absolute top-0 left-0 items-center justify-center z-50"
			style={{
				backgroundColor: 'rgba(0,0,0,0.7)',
			}}>
			<ModalCompleteProfile route="CompleteProfileTransport" description="Actualiza tu perfil para poder subastar rutas o pujar por mercancías cerca de ti" />
		</View> */}
	</View>
}

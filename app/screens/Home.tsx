import { FlatList, Text, View } from "react-native";
import { circleIcon, wrView } from "../utils/tw-ui";
import { AvoiderKeyboard } from "../components/AvoiderKeyboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSafeAreas } from "../hooks/useSafeAreas";
import { AntDesign } from "@expo/vector-icons";

export function Home() {
	const { insets } = useSafeAreas()

	return <SafeAreaProvider>
		<View style={{ paddingTop: insets.top }} className={wrView + " px-5"}>
			<View className={circleIcon}>
				<AntDesign name="rocket1" size={36} color="white" />
			</View>

			<FlatList
				data={[]}
				ListEmptyComponent={<Text>No hay datos</Text>}
				renderItem={({ item }) => <Text>{item}</Text>}
			/>
		</View>
	</SafeAreaProvider>
}

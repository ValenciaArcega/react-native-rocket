import { appColors } from "@/app/constants/colors";
import { InterWeight } from "@/app/constants/fonts";
import { useSafeAreas } from "@/app/hooks/useSafeAreas";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useState } from "react";
import { ImageBackground, Text, View } from "react-native";

export default function Login() {
	const [tab, setTab] = useState(0)
	const { insets } = useSafeAreas()

	return <ImageBackground
		source={require("@/assets/img/login/login-bg-v2.jpeg")}
		style={{
			flex: 1,
			paddingTop: insets.top,
			paddingHorizontal: 22,
		}}>
		<SegmentedControl
			appearance="light"
			style={{
				marginTop: 10,
				backgroundColor: "#f2f2f7",
				height: 40,
			}}
			fontStyle={{ fontSize: 16, }}
			activeFontStyle={{ color: appColors.p500, fontSize: 20, }}
			values={['Iniciar Sesión', 'Registrarme']}

			selectedIndex={tab}
			onChange={(event) => {
				setTab(event.nativeEvent.selectedSegmentIndex)
			}}
		/>
		<View style={{
			width: "50%",
			marginTop: 24,
			backgroundColor: "#fff", borderRadius: 10,
			padding: 10,
		}}>
			<Text style={{
				fontSize: 24, fontFamily: InterWeight.w600
			}}>Inicia Sesión</Text>
		</View>
	</ImageBackground>
}

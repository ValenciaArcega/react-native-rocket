import { appColors as ac, appColors } from "@/app/constants/colors";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { Feather, FontAwesome5, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { AlertError } from "@/app/components/Alerts";
import { MSG } from "@/app/constants/labels";
import { REG_EMAIL } from "@/app/constants/regularExpressions";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import { AvoiderKeyboard } from "@/app/components/AvoiderKeyboard";
import { inpIconLight, wrInpIcon, labelInpLight, svgInp, btnTogglePass, wrPass, wrView, btnBase, txtBtnBase, overlay } from "@/app/utils/tw-ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "@/app/hooks/useUser";

export default function Login() {
	const { navigateTo } = useNavigateApp()
	const { setUser } = useUser()
	const [email, setEmail] = useState(null)
	const [pass, setPass] = useState(null)
	const [isShowingPass, setIsShowingPass] = useState(false)
	const [isLogingIn, setIsLogingIn] = useState(false)
	const [isValidating, setIsValidating] = useState<boolean>(true)

	useEffect(() => {
		validateAppLoad()
	}, [])

	const validateAppLoad = async function () {
		const flag = Boolean(JSON.parse(await AsyncStorage.getItem("HAS_BEEN_INSTALLED")))

		if (flag) {
			setIsValidating(false)
		} else {
			navigateTo("Onboarding")
			await AsyncStorage.setItem("HAS_BEEN_INSTALLED", JSON.stringify(true))
			setIsValidating(false)
		}
	}

	const login_onPress = async function () {
		setUser({})
		return

		if (!email || email.trim() == "") {
			Alert.alert("Error al entrar", "El correo electrónico es obligatorio")
			return
		} else if (!email.match(REG_EMAIL)) {
			Alert.alert("Error al entrar", 'Formato de correo electrónico no inválido')
			return
		}
		if (!pass || pass.trim() == "") {
			Alert.alert("Error al entrar", "La contraseña es obligatoria")
			return
		}

		setIsLogingIn(true)

		// try {

		// } catch {
		// 	AlertError(MSG.NO_LOAD, MSG.NO_SERVER)
		// } finally {
		// 	setIsLogingIn(false)
		// }
	}

	return !isValidating && <ImageBackground
		source={require("@/assets/img/login/app-login-bg.png")}
		className="flex-1">
		<AvoiderKeyboard>
			<View className="flex-1 pt-[46%] px-5">
				<View className="h-[112px] w-[112px] rounded-full border-[11px] border-p200 bg-p500 items-center justify-center">
					<FontAwesome5 name="user-lock" size={36} color="white" />
				</View>

				<Text className={labelInpLight}>Correo electrónico</Text>
				<View className={wrInpIcon}>
					<TextInput
						value={email}
						placeholder="Ingresa tu correo"
						placeholderTextColor={"#bbb"}
						inputMode="email"
						keyboardType="email-address"
						className={inpIconLight}
						onChangeText={v => setEmail(v)}
					/>
					<Ionicons style={svgInp} name="mail-outline" size={24} color="black" />
				</View>

				<Text className={labelInpLight}>Contraseña</Text>
				<View className={wrPass}>
					<View className={wrInpIcon + " w-[86%]"}>
						<TextInput
							secureTextEntry={!isShowingPass}
							value={pass}
							placeholder="Ingresa tu contraseña"
							placeholderTextColor={"#bbb"}
							inputMode="text"
							keyboardType="visible-password"
							className={inpIconLight}
							onChangeText={v => setPass(v)}
						/>
						<Feather style={svgInp} name="lock" size={22} color="black" />
					</View>
					<Pressable
						className={btnTogglePass}
						onPress={() => setIsShowingPass(!isShowingPass)}>
						<Octicons name={isShowingPass ? "eye-closed" : "eye"} size={28} color={appColors.p600} />
					</Pressable>
				</View>

				<Text
					onPress={() => navigateTo("ForgotPassword")}
					className="text-right text-[16px] text-p600 underline mt-3"
				>¿Olvidaste tu contraseña?</Text>

				<Pressable
					onPress={login_onPress}
					className={btnBase}>
					<CustomLinearGradient colors={[appColors.p400, appColors.p600]}>
						{isLogingIn
							? <ActivityIndicator size="small" color="white" />
							: <>
								<MaterialIcons name="verified" size={28} color="white" />
								<Text className={txtBtnBase}>Entrar</Text>
							</>}
					</CustomLinearGradient>
				</Pressable>

				<Text className="mt-6 text-[18px] text-black text-center">
					¿No tienes una cuenta?{"\n"}
					<Text
						className="w-full text-p600"
						onPress={() => navigateTo("SignUp")}>
						Registrate ahora</Text>.
				</Text>
			</View>
		</AvoiderKeyboard>
	</ImageBackground>
}

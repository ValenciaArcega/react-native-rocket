import { appColors as ac, appColors } from "@/app/constants/colors";
import { useState } from "react";
import { ActivityIndicator, Alert, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { stylesLogin as s } from "./styles/st-login";
import { gs } from "@/app/constants/generalStyles";
import { Feather, FontAwesome5, Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { AlertError } from "@/app/components/Alerts";
import { MSG } from "@/app/constants/labels";
import { REG_EMAIL } from "@/app/constants/regularExpressions";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import { AvoiderKeyboard } from "@/app/components/AvoiderKeyboard";
import { inpIcon, wrInpIcon, labelInp } from "@/app/utils/tw-ui";

export default function Login() {
	const { navigateTo } = useNavigateApp()
	const [email, setEmail] = useState(null)
	const [pass, setPass] = useState(null)
	const [isEmailFocused, setIsEmailFocused] = useState(false)
	const [isPassFocused, setIsPassFocused] = useState(false)
	const [isShowingPass, setIsShowingPass] = useState(false)
	const [isLogingIn, setIsLogingIn] = useState(false)

	const login_onPress = async function () {
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

	return <ImageBackground
		source={require("@/assets/img/login/app-login-bg.png")}
		style={gs.containerBg}>
		<AvoiderKeyboard>
			<View style={s.wrapperForm} className="pt-1">
				<View style={gs.circleIcon}>
					<FontAwesome5 name="user-lock" size={36} color="white" />
				</View>

				<Text className={labelInp}>Correo electrónico</Text>
				<View className={wrInpIcon}>
					<TextInput
						value={email}
						placeholder="Ingresa tu correo"
						placeholderTextColor={"#bbb"}
						inputMode="email"
						keyboardType="email-address"
						className={inpIcon}
						onChangeText={v => setEmail(v)}
					/>
					<Ionicons style={{ position: "absolute", left: 16 }} name="mail-outline" size={24} color="black" />
				</View>

				<Text className={labelInp}>Contraseña</Text>
				<View style={s.wrapperPass}>
					<View className={wrInpIcon + " w-[86%]"}>
						<TextInput
							secureTextEntry={!isShowingPass}
							value={pass}
							placeholder="Ingresa tu contraseña"
							placeholderTextColor={"#bbb"}
							inputMode="text"
							keyboardType="visible-password"
							className={inpIcon}
							onChangeText={v => setPass(v)}
						/>
						<Feather style={{ position: "absolute", left: 16 }} name="lock" size={22} color="black" />
					</View>
					<Pressable
						style={s.btnShowPass}
						onPress={() => setIsShowingPass(!isShowingPass)}>
						<Octicons name={isShowingPass ? "eye-closed" : "eye"} size={28} color={isPassFocused ? appColors.p600 : "gray"} />
					</Pressable>
				</View>

				<Text
					onPress={() => navigateTo("ForgotPassword")}
					className="text-right text-[16px] text-p600 underline mt-3"
				>¿Olvidaste tu contraseña?</Text>

				<Pressable
					onPress={login_onPress}
					style={gs.btnBase}>
					<CustomLinearGradient>
						{isLogingIn
							? <ActivityIndicator size="small" color="white" />
							: <>
								<MaterialIcons name="verified" size={28} color="white" />
								<Text style={gs.btnBaseTxt}>Entrar</Text>
							</>}
					</CustomLinearGradient>
				</Pressable>

				<Text style={s.txtSignUp}>¿No tienes una cuenta?{"\n"}
					<Text
						style={s.txtSignUpPress}
						onPress={() => navigateTo("SignUp")}>
						Registrate ahora</Text>.
				</Text>
			</View>
		</AvoiderKeyboard>
	</ImageBackground>
}

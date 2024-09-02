import { appColors as ac, appColors } from "@/app/constants/colors";
import { useState } from "react";
import { ActivityIndicator, Alert, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { stylesLogin as s } from "./styles/st-login";
import { gs } from "@/app/constants/generalStyles";
import { FontAwesome5, MaterialIcons, Octicons } from "@expo/vector-icons";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { AlertError } from "@/app/components/Alerts";
import { MSG } from "@/app/constants/labels";
import { REG_EMAIL } from "@/app/constants/regularExpressions";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";
import { KeyboardScroll } from "@/app/components/KeyboardScroll";

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
		style={gs.containerTight}>
		<KeyboardScroll>
			<View style={s.wrapperForm}>
				<View style={gs.circleIcon}>
					<FontAwesome5 name="user-lock" size={36} color="white" />
				</View>
				<Text style={s.titleLogin}>Accede a Rocket 🚀</Text>

				<Text style={gs.labelInput}>Correo electrónico</Text>
				<TextInput
					value={email}
					placeholder="Ingresa tu correo electrónico"
					inputMode="email"
					keyboardType="email-address"
					style={[gs.input__basic, {
						borderWidth: 3,
						borderColor: isEmailFocused ? ac.p600 : "transparent",
						backgroundColor: isEmailFocused ? ac.p100 : ac.bgInput,
					}]}
					onFocus={() => setIsEmailFocused(true)}
					onBlur={() => setIsEmailFocused(false)}
					onChangeText={v => setEmail(v)}
				/>
				<Text style={gs.labelInput}>Contraseña</Text>
				<View style={s.wrapperPass}>
					<TextInput
						secureTextEntry={!isShowingPass}
						value={pass}
						placeholder="Ingresa tu contraseña"
						inputMode="text"
						keyboardType="visible-password"
						style={[gs.input__basic, {
							width: "86%",
							borderWidth: 3,
							borderColor: isPassFocused ? ac.p600 : "transparent",
							backgroundColor: isPassFocused ? ac.p100 : ac.bgInput,
						}]}
						onFocus={() => setIsPassFocused(true)}
						onBlur={() => setIsPassFocused(false)}
						onChangeText={v => setPass(v)}
					/>
					<Pressable
						style={s.btnShowPass}
						onPress={() => setIsShowingPass(!isShowingPass)}>
						<Octicons name={isShowingPass ? "eye-closed" : "eye"} size={32} color={isPassFocused ? appColors.p600 : "gray"} />
					</Pressable>
				</View>

				<Text
					onPress={() => navigateTo("ForgotPassword")}
					style={s.txtForgotPass}
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
						onPress={() => navigateTo("UserType")}>
						Registrate ahora</Text>.
				</Text>
			</View>
		</KeyboardScroll>
	</ImageBackground>
}

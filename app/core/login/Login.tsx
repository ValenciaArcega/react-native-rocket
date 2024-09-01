import { appColors as ac, appColors } from "@/app/constants/colors";
import { InterWeight } from "@/app/constants/fonts";
import { useSafeAreas } from "@/app/hooks/useSafeAreas";
import { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { stylesLogin as s } from "./styles/st-login";
import { gs } from "@/app/constants/generalStyles";
import { FontAwesome5, MaterialIcons, Octicons } from "@expo/vector-icons";
import { isiOS } from "@/app/constants/platform";
import { KeyboardAvoiderScrollView } from "@good-react-native/keyboard-avoider";
import { CustomLinearGradient } from "@/app/components/Gradients";

export default function Login() {
	const { insets, heightHeader } = useSafeAreas()
	const [email, setEmail] = useState(null)
	const [pass, setPass] = useState(null)
	const [isEmailFocused, setIsEmailFocused] = useState(false)
	const [isPassFocused, setIsPassFocused] = useState(false)
	const [isShowingPass, setIsShowingPass] = useState(false)

	return <ImageBackground
		source={require("@/assets/img/login/app-login-bg.png")}
		style={gs.containerTight}>
		<KeyboardScroll>
			<View style={s.wrapperForm}>
				<View style={gs.circleIcon}>
					<FontAwesome5 name="user-lock" size={36} color="white" />
				</View>
				<Text style={s.titleLogin}>Accede al Rocket 🚀</Text>

				<Text style={gs.labelInput}>Correo electrónico</Text>
				<TextInput
					value={email}
					placeholder="Ingresa tu correo electrónico"
					inputMode="email"
					keyboardType="email-address"
					style={[gs.input__basic, {
						borderWidth: 3,
						borderColor: isEmailFocused ? ac.p600 : "transparent"
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
							width: "80%",
							borderWidth: 3,
							borderColor: isPassFocused ? ac.p600 : "transparent"
						}]}
						onFocus={() => setIsPassFocused(true)}
						onBlur={() => setIsPassFocused(false)}
						onChangeText={v => setPass(v)}
					/>
					<Pressable
						style={s.btnShowPass}
						onPress={() => setIsShowingPass(!isShowingPass)}>
						<Octicons name={isShowingPass ? "eye-closed" : "eye"} size={32} color={appColors.p600} />
					</Pressable>
				</View>

				<Pressable style={gs.btnBase}>
					<CustomLinearGradient>
						<MaterialIcons name="verified" size={28} color="white" />
						<Text style={gs.btnBaseTxt}>Entrar</Text>
					</CustomLinearGradient>
				</Pressable>
			</View>
		</KeyboardScroll>
	</ImageBackground>
}

function KeyboardScroll({ children }) {
	return <KeyboardAvoiderScrollView
		keyboardShouldPersistTaps="always"
		keyboardDismissMode="on-drag"
		contentContainerStyle={sK.keyboard}>
		{children}
	</KeyboardAvoiderScrollView>
}

const sK = StyleSheet.create({
	keyboard: { flexGrow: 1 }
})
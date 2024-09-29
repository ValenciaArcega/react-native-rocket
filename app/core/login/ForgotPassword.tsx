import { CustomBottomSheet } from "@/app/components/Bottomsheet";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { KeyboardScroll } from "@/app/components/KeyboardScroll";
import { LoaderBtn } from "@/app/components/Loaders";
import { InterWeight } from "@/app/constants/fonts";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { appColors as ac, appColors } from "@/app/constants/colors";
import { btnBase, inp, inpToken, labelInp, txtBtnBase, wrView } from "@/app/utils/tw-ui";
import { useNavigateApp } from "@/app/hooks/useNavigateApp";

export default function ForgotPassword() {
	const [phone, setPhone] = useState("5540901287")
	const [timer, setTimer] = useState(60)
	const [isSendingToken, setIsSendingToken] = useState(false)
	const [isValidating, setIsValidating] = useState(false)
	const [isTokenSent, setIsTokenSent] = useState(false)
	const [tokenSent, setTokenSent] = useState(null)
	const [token, setToken] = useState({
		token1: null,
		token2: null,
		token3: null,
		token4: null,
	})
	const timerRef = useRef(null);
	const firstInput = useRef<TextInput>(null)
	const secondInput = useRef<TextInput>(null)
	const thirdInput = useRef<TextInput>(null)
	const fourthInput = useRef<TextInput>(null)
	const { navigation } = useNavigateApp()

	useEffect(() => {
		// if (!isTokenSent) return

		firstInput.current?.focus();

		timerRef.current = setInterval(() => {
			setTimer(prev => prev > 0 ? prev - 1 : 0);
		}, 1000);

		return () => clearInterval(timerRef.current);
	}, [])

	const captureToken_onChangeText = function (value: string, tokenPart: string, nextInputRef?: React.RefObject<TextInput>) {
		setToken(prevToken => ({ ...prevToken, [tokenPart]: value }));

		if (value && nextInputRef) {
			nextInputRef.current?.focus();
		}
	}

	const getBackDeleting_onKeyPress = function (event, previousInputRef?: React.RefObject<TextInput>) {
		if (event.nativeEvent.key === 'Backspace' && previousInputRef) {
			const currentValue = token[event.target.placeholder];
			if (!currentValue) {
				previousInputRef.current?.focus();
			}
		}
	}

	const verifyAndRegister_onPress = async function () {

		const finalToken = token.token1 + token.token2 + token.token3 + token.token4

		setIsValidating(true)

		if (tokenSent === finalToken) {
			// try {
		}
	}

	const sendToken_onPress = async function () {
		setIsSendingToken(true)
		setIsTokenSent(true)

		const token = Math.floor(1000 + Math.random() * 9000).toString()
		setTokenSent(token)

		// if (!phone || phone.trim() == "") {
		// 	Alert.alert("Error al ingresar", "El número de teléfono es obligatorio")
		// 	return
		// }
	}

	const resendCode_onPress = async function () {
		try {
			// if (data.phone != null) {
			// 	const request = await fetch(`${API_URL}UserSystemGeneral/ValidateForgotPassword?value=${String(data.phone)}`)
			// 	const json = await request.json()
			// 	setResendToken(json.idCodigo)
			// }
			// Toast.show({ type: 'successShort', text1: 'Código reenviado' });
			setTimer(60)
		} catch (error) {
			Alert.alert("Error al enviar token", error.message)
		}
		firstInput.current?.focus()
	}

	return <View className={wrView}>
		<KeyboardScroll>
			{isTokenSent ? <View className="px-4">
				<Text
					className="text-gray-500 text-lg mt-4"
				>Se envió un código de verificación de 4 digitos al número{" "}
					<Text
						className="font-medium text-black dark:text-white">
						{phone}</Text>, ingresalo para comprobar tu identidad.</Text>
				<View className="max-w-full flex-row mt-8 justify-between">
					<TextInput
						ref={firstInput}
						className={inpToken}
						keyboardType="number-pad"
						value={token.token1}
						maxLength={1}
						onKeyPress={e => getBackDeleting_onKeyPress(e, null)}
						onChangeText={v => captureToken_onChangeText(v, 'token1', secondInput)}
					/>
					<TextInput
						ref={secondInput}
						className={inpToken}
						keyboardType="number-pad"
						value={token.token2}
						maxLength={1}
						onKeyPress={e => getBackDeleting_onKeyPress(e, firstInput)}
						onChangeText={v => captureToken_onChangeText(v, 'token2', thirdInput)}
					/>
					<TextInput
						ref={thirdInput}
						className={inpToken}
						keyboardType="number-pad"
						value={token.token3}
						maxLength={1}
						onKeyPress={e => getBackDeleting_onKeyPress(e, secondInput)}
						onChangeText={v => captureToken_onChangeText(v, 'token3', fourthInput)}
					/>
					<TextInput
						ref={fourthInput}
						className={inpToken}
						keyboardType="number-pad"
						value={token.token4}
						maxLength={1}
						onKeyPress={e => getBackDeleting_onKeyPress(e, thirdInput)}
						onChangeText={v => captureToken_onChangeText(v, 'token4')}
					/>
				</View>

				<Text className="text-black dark:text-white mt-8">
					¿No recibiste el mensaje? {timer > 0 && "Espera " + timer + `${(timer == 1) ? " segundo" : " segundos"}`}
				</Text>
				<Text disabled={timer > 0}
					onPress={resendCode_onPress}
					className="mt-2 underline font-bold"
					style={{ color: timer > 0 ? "gray" : appColors.p500 }}>Reenviar código</Text>
				<Pressable
					className={btnBase + " mt-12 mb-3"}
					onPress={verifyAndRegister_onPress}>
					<CustomLinearGradient>
						{isValidating
							? <LoaderBtn />
							: <>
								<MaterialIcons name="verified" size={26} color="white" />
								<Text className={txtBtnBase}>Verificar</Text>
							</>}
					</CustomLinearGradient>
				</Pressable>

				<Pressable
					onPress={() => navigation.goBack()}
					className="flex items-center justify-center h-16">
					<Text className="text-red-500 dark:text-red-400 text-lg">Cancelar Recuperación</Text>
				</Pressable>
			</View>
				: <CustomBottomSheet
					snapPoints={["50%", "60%", "85%"]}>
					<Ionicons name="call-outline" size={38} color={ac.p500} />
					<Text className={labelInp}>Celular con el que te registraste</Text>
					<TextInput
						maxLength={10}
						value={phone}
						keyboardType="phone-pad"
						inputMode="numeric"
						className={inp}
						placeholder="Número de teléfono"
						placeholderTextColor={"gray"}
						onChangeText={v => setPhone(v)}
					/>
					<Pressable
						onPress={sendToken_onPress}
						className={btnBase}>
						<CustomLinearGradient>
							{isSendingToken
								? <LoaderBtn />
								: <View className="gap-x-2 flex-row items-center">
									<FontAwesome name="send" size={22} color="white" />
									<Text className={txtBtnBase}>
										Enviar Token</Text>
								</View>}
						</CustomLinearGradient>
					</Pressable>
					<Pressable
						onPress={() => navigation.goBack()}
						className="flex items-center justify-center h-16 mt-2">
						<Text className="text-red-500 dark:text-red-400 text-lg">Cancelar</Text>
					</Pressable>
				</CustomBottomSheet>}
		</KeyboardScroll>
	</View>
}

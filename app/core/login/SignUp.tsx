import { AvoiderKeyboard } from "@/app/components/AvoiderKeyboard";
import { appColors } from "@/app/constants/colors";
import { InterWeight } from "@/app/constants/fonts";
import { useAppearance } from "@/app/hooks/useAppearance";
import { inpIcon, labelInp, svgInp, wrInpIcon, wrView } from "@/app/utils/tw-ui";
import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function SignUp() {
	const [name, setName] = useState(null)
	const [phone, setPhone] = useState(null)
	const { isDarkMode } = useAppearance()
	const svgInpColor = isDarkMode ? "gray" : "black"

	return <View className={wrView}>
		<AvoiderKeyboard>
			<View className="flex-row items-center justify-center">
				<View className="h-[78px] w-[64px] rounded-xl border border-gray-500 mt-16 -mr-3 rotate-[-10deg]"></View>
				<View style={s.actionHeaderCenterCard}>
					<Entypo name="pencil" size={52} color={appColors.p600} />
				</View>
				<View className="h-[78px] w-[64px] rounded-xl border border-gray-500 mt-16 -ml-[12px] rotate-[10deg]"></View>
			</View>
			<Text
				numberOfLines={1}
				className="px-3 text-center text-[32px] mt-3 tracking-tighter text-p700 dark:text-gray-200"
				style={{ fontFamily: InterWeight.w600 }}>
				{!name || !name.trim() ? "Registrate" : `Hola ${name.trim()}.`}
			</Text>

			<View className="px-5 ">
				<Text className={labelInp}>Alias</Text>
				<View className={wrInpIcon}>
					<TextInput
						value={name}
						placeholder="¿Hoy te gusta que te llamen?"
						className={inpIcon}
						onChangeText={v => setName(v)}
					/>
					<FontAwesome5 style={svgInp} name="user" size={22} color={svgInpColor} />
				</View>
				<Text className={labelInp}>Número telefónico</Text>
				<View className={wrInpIcon}>
					<TextInput
						value={phone}
						className={inpIcon}
						keyboardType="number-pad"
						inputMode="numeric"
						maxLength={10}
						placeholder="Ingresa tu número de celular"
						onChangeText={v => setPhone(v)}
					/>
					<Feather style={svgInp} name="phone" size={24} color={svgInpColor} />
				</View>
			</View>
		</AvoiderKeyboard>
	</View>
}

const s = StyleSheet.create({
	actionHeaderBackCard: {
		height: 78,
		width: 64,
		borderRadius: 12,
		borderColor: "gray",
		borderWidth: 1,
		marginTop: 64,
		marginRight: -12,
		transform: [{ rotate: '-10deg' }]
	},
	actionHeaderCenterCard: {
		height: 106,
		width: 90,
		borderRadius: 12,
		borderColor: appColors.p700,
		borderWidth: 1,
		backgroundColor: appColors.p100,
		zIndex: 2,
		shadowColor: "#000",
		shadowOffset: {
			height: 6,
			width: 0,
		},
		shadowOpacity: 0.3,
		shadowRadius: 12,
		alignItems: "center",
		justifyContent: "center",
	}
})
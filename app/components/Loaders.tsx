import { ActivityIndicator, StyleSheet, View } from "react-native";
import { appColors } from "../constants/colors";

export function LoaderActivity() {
	return <View style={s.loaderActivityContainer}>
		<ActivityIndicator size="large" color={appColors.frBlack} />
	</View>
}

export function LoaderBtn() {
	return <ActivityIndicator size="small" color="white" />
}
/**
 * @description
 * Usar `StyleSheet.create()` en lugar de estilos en línea es recomendable por las siguientes razones:
 * @equality
 * `{}` es diferente de `{}` en React, ya que cada vez que se crea un nuevo objeto en línea, su referencia es distinta, lo que puede causar renderizados innecesarios. Usar `StyleSheet.create` evita este problema al mantener referencias constantes.
*
 * @performance
 * `StyleSheet.create` optimiza los estilos, asegurando que solo se procesen una vez, a diferencia de los estilos en línea que se recrean en cada renderizado, impactando negativamente el rendimiento.
 *
 * @scalability
 * Centraliza y reutiliza los estilos, facilitando la gestión y mantenimiento del código en aplicaciones grandes.
 *
 */
const s = StyleSheet.create({
	loaderActivityContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: appColors.bgWhite
	},
})
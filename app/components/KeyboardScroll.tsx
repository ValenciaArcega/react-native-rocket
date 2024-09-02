import { KeyboardAvoiderScrollView } from "@good-react-native/keyboard-avoider"
import { memo, ReactNode } from "react"
import { StyleSheet } from "react-native"

export const KeyboardScroll = memo(function KeyboardScroll({ children }: { children: ReactNode }) {
	return <KeyboardAvoiderScrollView
		contentInsetAdjustmentBehavior="automatic"
		showsVerticalScrollIndicator={false}
		keyboardShouldPersistTaps="always"
		keyboardDismissMode="on-drag"
		contentContainerStyle={sK.keyboard}>
		{children}
	</KeyboardAvoiderScrollView>
})
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
const sK = StyleSheet.create({
	keyboard: { flexGrow: 1 }
})

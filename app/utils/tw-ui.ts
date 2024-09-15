import { TextStyle } from "react-native"
/**
 * @author valenciaarcega
 * 
 * Whole this set of constants contain
 * the joint tailwind classes to reuse
 * inside the app interfaces.
 */

/**
 * @generals
 */

export const wrView = "flex-1 bg-bgLight dark:bg-bgDark"

/**
 * @forms
 * Labels, wrapper inputs and inputs.
 * wr: Wrappers and containers
 * inp: Inputs and text areas
 * bt: Buttons and pressables
 * txt: Labels, titles, paragraphs...
 */
export const wrInpIcon = "flex-row items-center mt-2"
// export const labelInp = "mt-5 text-[14px]"
// export const inpIcon = "h-14 w-full pr-3 pl-12 text-[18px] rounded-2xl bg-white border-[2px] border-[#ddd] focus:border-p600 focus:bg-p100 flex"
export const labelInp = "mt-5 text-[14px] text-black dark:text-gray-100"
export const inpIcon = "h-14 w-full pr-3 pl-12 text-[18px] rounded-2xl bg-white dark:bg-bgDark border-[2px] border-[#ddd] dark:border-gray-700 focus:border-p600 focus:bg-p100 dark:focus:bg-gray-900 dark:text-p100"
export const svgInp: TextStyle = {
	position: "absolute",
	left: 16,
}

export const inp = "h-14 w-full px-3 text-[18px] rounded-2xl bg-white border-[2px] border-[#ddd] focus:border-p600 focus:bg-p100 flex"

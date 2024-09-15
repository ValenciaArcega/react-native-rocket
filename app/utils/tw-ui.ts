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
 * btn: Buttons and pressables
 * txt: Labels, titles, paragraphs...
 */
export const wrInpIcon = "flex-row items-center mt-2"
// Exclusive light version screens
export const labelInpLight = "mt-5 text-[14px]"
export const inpIconLight = "h-14 w-full pr-3 pl-12 text-[18px] rounded-2xl bg-white border-[2px] border-[#ddd] focus:border-p600 focus:bg-p100 flex"
// General toggle appearance
export const labelInp = "mt-5 text-[14px] text-black dark:text-gray-100"
export const inpIcon = "h-14 w-full pr-3 pl-12 text-[18px] rounded-2xl bg-white dark:bg-bgDark border-[2px] border-[#ddd] dark:border-gray-700 focus:border-p600 focus:bg-p100 dark:focus:bg-gray-900 dark:text-p100"
export const svgInp: TextStyle = {
	position: "absolute",
	left: 16,
}

export const inp = "h-14 w-full px-3 text-[18px] rounded-2xl bg-white border-[2px] border-[#ddd] focus:border-p600 focus:bg-p100 flex"
export const inpToken = "h-[92] w-[80] bg-[#f2f2f7] text-black dark:bg-[#212529] dark:text-white rounded-3xl text-[32px] text-center"

// Password fields
export const wrPass = "flex-row items-center justify-between"
export const btnTogglePass = "w-[18%] h-[60px] mt-1 items-center justify-center"
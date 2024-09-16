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
export const overlay = "absolute top-0 left-0 flex h-full w-full items-center justify-center bg-gray-500 dark:bg-black opacity-[0.8]"
export const circleIcon = "my-4 h-[112px] w-[112px] rounded-full border-[13px] border-p200 dark:border-p900 bg-p500 dark:bg-p600 items-center justify-center"

/**
 * @forms
 * Labels, wrapper inputs and inputs.
 * wr: Wrappers and containers
 * inp: Inputs and text areas
 * btn: Buttons and pressables
 * txt: Labels, titles, paragraphs...
 */
export const wrInpIcon = "flex-row items-center mt-2"
export const wrPass = "flex-row items-center justify-between"
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
export const inp = "h-14 w-full mt-2 px-4 text-[18px] rounded-2xl bg-white dark:bg-bgDark border-[3px] border-[#ddd] dark:border-gray-700 focus:border-p600 focus:bg-p100 flex dark:focus:bg-gray-900 dark:text-p100"
export const inpToken = "h-[92] w-[80] bg-[#f2f2f7] text-black dark:bg-[#212529] dark:text-white rounded-3xl text-[32px] text-center"

/**
 * @buttons
*/
export const btnTogglePass = "w-[18%] h-[60px] mt-1 items-center justify-center"
export const btnBase = "min-h-[64px] max-h-[64px] w-full mt-6 rounded-3xl overflow-hidden items-center justify-center"
export const txtBtnBase = "text-white text-xl font-medium"

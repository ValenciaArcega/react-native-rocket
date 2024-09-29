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
export const wrView = "flex-1 bg-[#fff] dark:bg-[#0A0A0A]"
export const overlay = "absolute top-0 left-0 flex h-full w-full items-center justify-center"
export const circleIcon = "my-4 h-[112px] w-[112px] rounded-full border-[13px] border-p200 dark:border-p900 bg-p500 dark:bg-p600 items-center justify-center"
export const wrMultimedia = "max-w-full min-h-[58px] py-3 bg-[#f2f2f7] dark:bg-[#212529] mt-[6px] px-3 rounded-xl flex-row items-center"
export const txtMultimedia = "ml-3 font-medium text-p800 dark:text-p100 text-[18px]"
export const txtSecondary = "text-lg mt-3 text-gray-500 dark:text-gray-400"
export const highGreen = "text-green-600 dark:text-green-200"
export const highIndigo = "text-[#5c7cfa] dark:text-[#dbe4ff]"
export const separator = "border-b-2 border-b-[#eee] dark:border-b-[#343a40] w-full h-1 my-6"
export const txt = "text-black dark:text-white"
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
export const labelInp = "mt-5 text-[15px] text-black dark:text-gray-100"

export const inpIcon = "h-14 w-full pr-3 pl-12 text-[18px] rounded-2xl bg-white dark:bg-[#0A0A0A] border-[2px] border-[#ddd] dark:border-gray-700 focus:border-p300 focus:bg-p100 flex dark:focus:bg-gray-900 dark:text-p100"
export const svgInp: TextStyle = {
	position: "absolute",
	left: 16,
}
export const inp = "h-14 w-full mt-2 px-4 text-[18px] rounded-2xl bg-white dark:bg-[#0A0A0A] border-[3px] border-[#ddd] dark:border-gray-700 focus:border-p300 focus:bg-p100 flex dark:focus:bg-gray-900 dark:text-p100"
export const inpToken = "h-[92] w-[74px] bg-[#f2f2f7] text-black dark:bg-[#212529] dark:text-white rounded-3xl text-[38px] text-center"

/**
 * @buttons
*/
export const btnTogglePass = "w-[18%] h-[60px] mt-1 items-center justify-center"
export const btnBase = "min-h-[64px] max-h-[64px] w-full mt-6 rounded-3xl overflow-hidden items-center justify-center"
export const txtBtnBase = "text-white text-xl font-medium"
export const btnSkip = "mt-8 h-14 bg-p200 dark:bg-p900 rounded-2xl items-center justify-center"
export const txtBtnSkip = "text-[19px] font-medium text-p900 dark:text-p100"
export const btnIconTxtIcon = "min-w-[60%] mt-6 h-[60px] bg-[#f2f2f7] dark:bg-[#212529] rounded-lg px-4 flex-row items-center justify-between"
export const txtBtnIconTxtIcon = "text-[19px] ml-3 dark:text-white"
import { Platform } from "react-native";

export const isiOS = Platform.OS == "ios"
export const isAndroid = Platform.OS == "android"
export const isMacOS = Platform.OS === "macos";
export const isWindows = Platform.OS === "windows";
export const isWeb = Platform.OS === "web";

import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from '@/app/constants/theme';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
	const colorScheme = useColorScheme();
	const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

	useEffect(() => {
		setIsDarkMode(colorScheme === 'dark');
	}, [colorScheme]);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const theme = isDarkMode ? darkColors : lightColors;

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);

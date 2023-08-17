/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
	return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(false);
	const toggleTheme = () => {
		setDarkTheme(!darkTheme);
		return darkTheme;
	};

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

import Navbar from "../containers/Navbar";
import { useTheme } from "../../hooks/ThemeContext";

const Layout = ({ children }) => {
	const darkTheme = useTheme();

	return (
		<div id="container" className={darkTheme ? "dark" : undefined}>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</div>
	);
};

export default Layout;

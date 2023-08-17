import { Switch } from "@mui/joy";
import { useThemeUpdate } from "../../hooks/ThemeContext";
import { DarkMode } from "@mui/icons-material";

const Navbar = () => {
	const toggleTheme = useThemeUpdate();
	return (
		<nav>
			<ul>
				<li>
					<a href="">Link</a>
				</li>
				<li>
					<a href="">Link</a>
				</li>
				<li>
					<a href="">Link</a>
				</li>
				<li>
					<a href="">Link</a>
				</li>
			</ul>
			<Switch
				onChange={toggleTheme}
				slotProps={{
					input: { "aria-label": "Dark mode" },
					thumb: {
						children: <DarkMode />,
					},
				}}
				sx={{
					"--Switch-thumbSize": "28px",
				}}
			></Switch>
		</nav>
	);
};

export default Navbar;

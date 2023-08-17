import "./styles/index.css";
import Layout from "./components/layouts/layout";
import Banner from "./components/containers/Banner";
import ThemeProvider from "./hooks/ThemeContext";
import Post from "./components/containers/Post";

const posts = [
	{
		id: 1,
		date: "September 5, 2022",
		title: "Crafting a design system for a multiplanetary future",
		description:
			"Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
	},
	{
		id: 2,
		date: "September 5, 2022",
		title: "Crafting a design system for a multiplanetary future",
		description:
			"Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
	},
	{
		id: 3,
		date: "September 5, 2022",
		title: "Crafting a design system for a multiplanetary future",
		description:
			"Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
	},
	{
		id: 4,
		date: "September 5, 2022",
		title: "Crafting a design system for a multiplanetary future",
		description:
			"Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
	},
];

const getPost = posts.map((post) => {
	return (
		<Post key={post.id} date={post.date} title={post.title} description={post.description} />
	);
});

const App = () => {
	return (
		<ThemeProvider>
			<Layout>
				<Banner />
				<div className="postDisplay">{getPost}</div>
			</Layout>
		</ThemeProvider>
	);
};

export default App;

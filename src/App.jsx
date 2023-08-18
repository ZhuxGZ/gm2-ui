import './styles/index.css';
import Layout from './components/layouts/layout';
import Banner from './components/containers/Banner';
import ThemeProvider from './hooks/ThemeContext';
import PostDisplay from './components/containers/PostDisplay';

const App = () => {
	return (
		<ThemeProvider>
			<Layout>
				<Banner />
				<PostDisplay />
			</Layout>
		</ThemeProvider>
	);
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./components/global/GlobalStyle";
import useDarkMode from "./hook/useDarkMode";
import { darkTheme, lightTheme } from "./themes/Theme";
import styled from "styled-components";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import CarouselCoin from "./components/CarouselCoin";
import CoinPage from "./pages/coin/CoinPage";

function App() {
	const [theme, themeToggler] = useDarkMode();
	const route = [
		{
			path: "/",
			exact: true,
			  main: <Home />,
		},
		{
			path: "/coins/:id",
			exact: true,
			  main: <CoinPage />,
		},
		
	];
	return (
		<ThemeProvider theme={theme === "light" ? darkTheme : lightTheme} themeToggler={themeToggler}>
			<>
				<GlobalStyles />
				<Wrapper>
					<Router>
						<Container>
							<CarouselCoin/>
							<Header themeToggler={themeToggler} />
							<Routes>
								{route.map((route, index) => {
									return (
										<Route
											key={index}
											path={route.path}
											exact={route.path}
											element={route.main}
										/>
									);
								})}
							</Routes>
							<Footer/>
						</Container>
					</Router>
				</Wrapper>
			</>
		</ThemeProvider>
	);
}
const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
`;
export default App;

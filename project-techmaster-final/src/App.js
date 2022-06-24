import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyle";
import useDarkMode from "./hook/useDarkMode";
import { darkTheme, lightTheme } from "./themes/Theme";
import styled from "styled-components";

function App() {
  const [theme, themeToggler] = useDarkMode;
  const route = [
	{
		path: "/",
		exact: true,
		main: 'ssddfdfdfd'
	},
  ];
  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Wrapper>
			<Router>
				<Container>
					<Routes>
						{
							route.map((route,index)=>{
								return(
									<Route
									key={index}
									path={route.path}
									exact={route.path}
									element={route.main}
									/>
								)
							})
						}
					</Routes>
				</Container>
			</Router>
		</Wrapper>
      </>
    </ThemeProvider>
  );
}
const Container = styled.div`
`
const Wrapper = styled.div``;
export default App;

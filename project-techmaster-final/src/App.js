import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./components/global/GlobalStyle";
import useDarkMode from "./hook/useDarkMode";
import { darkTheme, lightTheme } from "./themes/Theme";
import styled from "styled-components";
import Header from "./components/header/Header";

function App() {
  const [theme] = useDarkMode();
  const route = [
    {
      path: "/",
      exact: true,
      main: <Header />,
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
            </Container>
          </Router>
        </Wrapper>
      </>
    </ThemeProvider>
  );
}
const Container = styled.div``;
const Wrapper = styled.div`
  width: 100vw;
`;
export default App;

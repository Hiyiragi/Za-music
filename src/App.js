import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

import Home from "pages/Home";
import Header from "components/Header";

//import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor={theme.colors.black} highlightColor={theme.colors.lightWhite}>
        <GlobalStyles />
        <Header />
        <Home />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;

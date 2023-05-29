import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";

import Home from "pages/Home";
import Header from "components/Header";
import Player from "components/Player";

//import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";
//import react toastify css
import "react-toastify/dist/ReactToastify.css";
//import rc-slider css
import "rc-slider/assets/index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme baseColor={theme.colors.black} highlightColor={theme.colors.lightWhite}>
        <GlobalStyles />
        <Header />
        <Home />
        <Player />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;

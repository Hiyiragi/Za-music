import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "styles/Theme";
import { GlobalStyles } from "styles/Global";
import Layout from "components/Layout";
import Search from "pages/Search";
import { initialState, playerReducer } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";

import Home from "pages/Home";

//import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";
//import react toastify css
import "react-toastify/dist/ReactToastify.css";
//import rc-slider css
import "rc-slider/assets/index.css";
import Error from "pages/Error";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme baseColor={theme.colors.black} highlightColor={theme.colors.lightWhite}>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="*" element={<Error />}></Route>
              </Route>
            </Routes>
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
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;

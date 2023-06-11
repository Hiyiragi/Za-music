import Layout from "components/Layout";
import Search from "pages/Search";
import Genre from "pages/Genre";
import Home from "pages/Home";
import Error from "pages/Error";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

function AppRouter() {
  return (
    <ErrorBoundary fallback={<Error isErrorPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/genres/:genreID" element={<Genre />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRouter;

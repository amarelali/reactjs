import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import App from "../pages/App";
import Page from "../pages/Page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<App />} />
      <Route exact path="/page" element={<Page />} />
    </>
  )
);

export default router;
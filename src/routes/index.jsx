import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

export const WebRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

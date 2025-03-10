import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Browser from "./pages/Browser";
import Login from "./pages/Login";
import { researchPapers } from "./utils/data";
import Submit from "./pages/Submit";
import SinglePage from "./pages/SinglePage";

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browser" element={<Browser />} />
          <Route path="/browser/:id" element={<SinglePage/>} />

          <Route path="login" element={<Login />} />
          <Route path="submit" element={<Submit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

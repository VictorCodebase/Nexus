import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Browser from "./pages/Browser";
import Login from "./pages/Login";
import PaperDetails from "./pages/PaperDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browser" element={<Browser />} />
          <Route path="paper-details" element={<PaperDetails />} />
          <Route path="login" element={<Login />} />
        </Route>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

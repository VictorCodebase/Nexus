import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Browser from "./pages/Browser";
import Login from "./pages/Login";
import Papers from "./pages/Papers";
import Submit from "./pages/Submit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browser" element={<Browser />} />
          <Route path="papers" element={<Papers />} >
            <Route path=":id" />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="submit" element={<Submit />} />
        </Route>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

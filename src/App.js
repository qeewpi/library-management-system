import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            {" "}
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

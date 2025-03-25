// import './App.css'
import { Route, Router, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AccountSettings from "./Pages/AccountSettings";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      }
    </>
  );
}

export default App;

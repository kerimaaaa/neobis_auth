import { Routes, Route, Link } from 'react-router-dom';
import Signup from "./components/Signup/Signup";
import Signin from "./components/SignIn/Signin";
import "./App.css";
import ConfirmationPage from "./components/confirmationPage/confirmationPage";
import NewPassword from './components/Signup/NewPassword';
import AdditionalInfo from "./components/Signup/AddtionalInfo";
import ResetPassword from "./components/resetPassword/resetPassword";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/confirmation" element={<ConfirmationPage />} /> */}
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/additionalInfo" element={<AdditionalInfo />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/register/email/verify?:token" element={<VerificationPage />} />







        </Routes>
      </main>
    </div>
  );
}

export default App;

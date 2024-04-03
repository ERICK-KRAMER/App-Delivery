import { useState } from "react";
import UserContext from "./context";
import Home from "./pages/home";
import FormComponent from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./api/auth";
import NotFoundPage from "./pages/notFoundPage";
import { IUser } from "./types/User";

export default function App() {
  const [loginUser, setLoginUser] = useState<IUser | null>(null);

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    try {
      const userData = await Login({ email, password });
      if (userData !== null) {
        setLoginUser(userData);
        if(loginUser !== null){
          console.log(loginUser);
          window.location.href= "/";
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>  
      <UserContext.Provider value={loginUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormComponent handleSubmit={handleSubmit} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

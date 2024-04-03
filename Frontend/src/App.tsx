import { useState } from "react";
import UserContext from "./context";
import Home from "./pages/home";
import FormComponent from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./api/auth";
import NotFoundPage from "./pages/notFoundPage";

export default function App() {
  const [token, setToken] = useState<string | null>(null);

  const handleClick = ({ email, password }: { email: string; password: string }) => {
    Login({ email, password })
      .then(res => {
        setToken(res);
        console.log(res);
        if(res !== null) window.location.href = "/";
      })
      .catch(e => console.log(e));
  }

  return (
    <BrowserRouter>  
      <UserContext.Provider value={token}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<FormComponent handleClick={handleClick}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

import { useState, useEffect } from "react";
import Home from "./pages/home";
import FormComponent from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from "./api/auth";
import NotFoundPage from "./pages/notFoundPage";
import { loginContext } from "./context/userLogin";
import { IDataLogin } from "./types/User";

export default function App() {
  const [data, setData] = useState<IDataLogin>();

  useEffect(() => {
    const loginDataString = sessionStorage.getItem("login");
    if (loginDataString) {
      const loginData: IDataLogin = JSON.parse(loginDataString);
      setData(loginData);
    }
  }, []);

  const handleSubmit = async({ email, password }: { email: string, password: string }) => {
    try {
      await Login({ email, password });
      window.location.href = "/"
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <loginContext.Provider value={{ data }}>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" 
            element={data?.token ? <Navigate to={"/"}/> : <FormComponent handleSubmit={handleSubmit} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </loginContext.Provider>
    </BrowserRouter>
  )
}

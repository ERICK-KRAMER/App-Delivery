import React, { useRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface FormProps {
  handleClick: (values: { email: string; password: string }) => void;
}

const FormComponent: React.FC<FormProps> = ({ handleClick }) => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.current && password.current) {
      const values = {
        email: email.current.value,
        password: password.current.value
      };
      handleClick(values);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full dark:bg-yellow-500">
        <div className="bg-white dark:bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-neutral-950">Form Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700  mb-2">Email Address</label>
              <input ref={email} type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700  mb-2">Password</label>
              <input ref={password} type={isVisible ? "text" : "password"} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
              {isVisible ? <EyeOffIcon onClick={() => setIsVisible(prev => !prev) } className="absolute cursor-pointer top-9 right-3" size={27} /> : <EyeIcon onClick={ ()=> setIsVisible(prev => !prev) } className="absolute cursor-pointer top-9 right-3" size={27} />}
              <a href="#"
                className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                Password?</a>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"/>
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 ">Remember me</label>
              </div>
              <a href="#"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
                Account</a>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormComponent;

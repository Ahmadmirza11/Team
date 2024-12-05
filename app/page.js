"use client";
import Image from "next/image";
import React from "react";
import pic from "../public/assets/left.png";
import pic1 from "../public/assets/logo.png";
import { IoLogoApple } from 'react-icons/io';
import {FaGoogle} from 'react-icons/fa';
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const dashboardPage = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    router.push("/signup"); // Navigate to the dashboard page
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
  <div className="relative">
      <Image src={pic} alt="logo" className="w-full h-full overflow-hidden" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 bg-opacity-50 p-4 md:p-8">
        <Image 
          src={pic1} 
          alt="logo" 
          className="w-20 h-20 mb-4 mx-auto" 
        />

        <p className="text-black text-[23px] text-center md:text-left max-w-prose">
          This accounting firm offers streamlined, personalized financial
          services, specializing in tax returns, VAT, and payroll management.
          With a user-friendly platform, clients can track progress in
          real-time, communicate directly with accountants, and manage
          payments seamlessly. We ensure accuracy, transparency, and
          efficiency for all your accounting needs.
        </p>
      </div>
    </div>

      <div className="flex-1 bg-white p-4 md:p-8 flex flex-col">
      <h2 className="text-black text-2xl font-semibold mb-4 mt-5">Login</h2>
        <p className="text-black mb-4">Login to your account</p>
        <form className="p-3" onSubmit={dashboardPage}>
          <div className="mb-4">
            <label className="block text-black mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded border"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full p-3 rounded border"
            />
          </div>
          <div className="text-right">
            <p className="text-[#52bdcd] cursor-pointer">Forgot Password?</p>
          </div>
          <button className="bg-[#52bdcd] w-full p-2 mt-3 rounded-md text-white">
            Login
          </button>

          <p className="text-center text-lg font-semibold p-4">OR login with</p>
          

          <button className="bg-black w-full p-2 mt-3 rounded-md text-white flex items-center justify-center space-x-2">
      <IoLogoApple className="w-7 h-7" />
      <span className="font-bold">Apple</span>
    </button>


    <button className="bg-white w-full p-2 mt-3 rounded-md text-black border border-gray-300 flex items-center justify-center space-x-2">
      <FaGoogle className="w-5 h-5" />
      <span className="font-bold">Log in with Google</span>
    </button>


    <div className="flex flex-row justify-center mt-4">
      <p className="text-center text-lg font-semibold pt-4">creat a new account?</p>
      <p className="text-lg font-semibold pt-4 text-blue-600">sign up</p>

    </div>
      <p className="text-lg font-semibold pt-4 text-blue-600 text-center">Continous as Guest</p>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;

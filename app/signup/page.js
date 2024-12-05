"use client";
import Image from "next/image";
import React, { useState } from "react";
import pic from "../../public/assets/left.png";
import pic1 from "../../public/assets/logo.png";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const dashboardPage = (e) => {
    e.preventDefault();
    // Log form data before navigation (you might want to add validation here)
    console.log('Form Data:', formData);
    router.push("/otp");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative">
        <Image src={pic} alt="left picture" className="w-full h-full overflow-hidden" />
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
        <h2 className="text-black text-2xl font-semibold mb-4 mt-5">Sign Up</h2>
        <p className="text-black mb-4">Create your account</p>
        <form className="p-3" onSubmit={dashboardPage}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-black mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                className="w-full p-3 rounded border"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                className="w-full p-3 rounded border"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded border"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded border"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-full p-3 rounded border"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="bg-[#52bdcd] w-full p-2 mt-3 rounded-md text-white">
            Sign Up
          </button>

          <div className="flex flex-row justify-center mt-14">
            <p className="text-black cursor-pointer text-center">Already have an account</p>
            <p className="text-[#52bdcd] cursor-pointer text-center"> Sign In</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

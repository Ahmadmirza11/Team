"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import pic from "../../public/assets/left.png";
import pic1 from "../../public/assets/logo.png";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpInputRefs = useRef([]);

  const handleOtpChange = (index, e) => {
    const value = e.target.value;
    
    // Only allow numbers
    if (isNaN(value)) return;

    // Create a copy of the current OTP state
    const newOtp = [otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if value is entered
    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Move focus back on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Join OTP digits and log (you would typically send this to a verification endpoint)
    const otpCode = otp.join('');
    console.log('OTP Entered:', otpCode);
    router.push("/landing");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative w-1/2">
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

      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Verify OTP</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter the 6-digit code sent to your phone number
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  ref={(ref) => otpInputRefs.current[index] = ref}
                  className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:border-[#52bdcd]"
                />
              ))}
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#52bdcd] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Verify OTP
            </button>

            <div className="text-center">
              <p className="text-gray-600">
                Didnt receive the code? 
                <span className="text-[#52bdcd] ml-2 cursor-pointer">Resend</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
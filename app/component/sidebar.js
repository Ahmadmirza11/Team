"use client";
import React, { useState } from "react";
import { SiGooglemessages } from "react-icons/si";
import { FaBell, FaUsers,  FaClipboardList, FaComments, FaSearch } from "react-icons/fa";

import {  MdDashboard, MdTask, } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import pic from "../../public/assets/account.png";

const sideitems = [
  { id: 1, name: "Taxt Assigned", icon: <MdDashboard />, link: "/landing" },
  { id: 2, name: "Approve Docoment", icon: <FaClipboardList />, link: "/pdf" },
  { id: 3, name: "Generate Invoice", icon: <FaUsers />, link: "/saveprogress" },
  { id: 4, name: "FeedBack", icon: <MdTask />, link: "/task-management" },

];

const additionalButtons = [
  { id: 1, name: "Chat", icon: <FaComments /> },
  { id: 2, name: "Support", icon: <SiGooglemessages /> },
  { id: 3, name: "Notification", icon: <FaBell /> },
];

const scrollbarStyles = `
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1f2937;
  }
  ::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
  }
`;

export default function Sidebar({ children, navTitle }) {
  const [selectedOption, setSelectedOption] = useState("Task Assigned");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigation = (name) => {
    setSelectedOption(name);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <style>{scrollbarStyles}</style>
      <div className="w-64 bg-black text-white flex flex-col justify-between overflow-y-auto shadow-lg fixed h-full">
        <div className="p-6">
          <Image src={pic} alt="Logo" className="mx-auto w-39 h-auto justify-center" />
          <div className="mt-6 space-y-2">
            {sideitems.map((item) => (
              <Link href={item.link} key={item.id}>
                <button
                  className={`w-full flex items-center hover:bg-gray-800 rounded-lg p-2 mb-2 cursor-pointer transition duration-200 ease-in-out ${
                    selectedOption === item.name ? "bg-blue-400 text-white" : "text-gray-300"
                  }`}
                  onClick={() => handleNavigation(item.name)}
                >
                  <div className="text-white mr-2">{item.icon}</div>
                  <span>{item.name}</span>
                </button>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <p className=" font-bold  text-gray-400">Support</p>
            {additionalButtons.map((button) => (
              <button
                key={button.id}
                className="w-full flex items-center hover:bg-gray-800 rounded-lg p-2 mt-2 cursor-pointer transition duration-200 ease-in-out text-gray-300"
              >
                <div className="text-white mr-2">{button.icon}</div>
                <span>{button.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 ml-64 overflow-y-auto">
        <div className="bg-white text-black py-4 px-6 flex justify-between items-center shadow-md">
          <div className="text-xl font-semibold">{selectedOption}</div>
          <div className="flex-1 max-w-xs mx-auto">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={pic} alt="Profile" className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-medium">Musfiq</p>
              <p className="text-sm text-gray-400">Admin</p>
            </div>
            <div className="relative">
              <FaBell className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
            </div>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
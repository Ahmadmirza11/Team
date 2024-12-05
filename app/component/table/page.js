"use client";
// import Cards from "@/components/cards";
import React from "react";
import { FaAngleDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import pic from "../../../public/assets/logo.png";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { useRouter } from "next/navigation";

const leads = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    source: "Website",
    status: "New",
    nextAction: "Contact Lead",
    manager: "Sarah Johnson",
    image: pic, // Local image path
  },
  {
    id: 2,
    name: "Darlene Robertson",
    source: "Ad Campaign",
    status: "Follow-Up",
    nextAction: "Send Proposal",
    manager: "Sarah Johnson",
    image: pic,
  },
  {
    id: 3,
    name: "Cameron Williamson",
    source: "Referral",
    status: "Converted",
    nextAction: "Onboarding",
    manager: "Sarah Johnson",
    image: pic,
  },
  {
    id: 4,
    name: "Jerome Bell",
    source: "Website",
    status: "New",
    nextAction: "Contact Lead",
    manager: "Sarah Johnson",
    image: pic,
  },
  {
    id: 5,
    name: "Kathryn Murphy",
    source: "Website",
    status: "New",
    nextAction: "Send Proposal",
    manager: "Sarah Johnson",
    image: pic,
  },
];

const getStatusBgColor = (status) => {
  switch (status) {
    case "New":
      return "bg-green-100 text-green-800";
    case "Follow-Up":
      return "bg-yellow-100 text-yellow-800";
    case "Converted":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Table = () => {
  const router = useRouter();

  const nextpg = () => {
    router.push("/clientDetail");
  };

  return (
    <div>
      {/* <div className="bg-white rounded-md shadow-xl p-4">
        <p className="text-xl font-bold">Good morning, Jack</p>
        <p className="text-sm text-gray-500 pt-2">
          Here is a summary of the leads overview.
        </p>
      </div>


      <div className="bg-[#CAFDF5] shadow-xl rounded-xl p-3 mt-7">
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">Info</p>
          <div className="flex items-center space-x-2">
            <button className="bg-black rounded text-white p-1">Action</button>
            <button className="rounded text-black p-1">Dismiss</button>
          </div>
        </div>
        <p className="pt-1 text-gray-500 text-sm">
          New Lead Notification: You have 5 new leads waiting for follow-up.
          <br />
          Reminder: Follow up with Jane Smith scheduled for Oct 18, 2024.
        </p>
      </div> */}
  
      {/* table */}
      <div className="bg-white shadow-xl rounded-md w-full lg:w-full mt-7 p-4 mb-6 lg:mb-0 lg:min-h-full lg:flex lg:flex-col lg:h-[500px]">
        <div className="flex-grow overflow-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm h-full">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead Name
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Action
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Manager
                </th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

{/* Tis is body contant */}




            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-3 py-2 align-middle">{lead.id}</td>
                  <td className="px-3 py-2 align-middle flex items-center">
                    <Image
                      src={lead.image}
                      alt={lead.name}
                      width={30}
                      height={30}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {lead.name}
                  </td>




                  <td className="px-3 py-2 align-middle">{lead.source}</td>


                  <td className="px-3 py-2 align-middle">
                    <span
                      className={`px-2 py-1 rounded-full ${getStatusBgColor(
                        lead.status
                      )}`}
                    >
                      {lead.status}
                    </span>
                  </td>


                  <td className="px-3 py-2 align-middle">{lead.nextAction}</td>

                  <td className="px-3 py-2 align-middle">{lead.manager}</td>
                  
                  <td className="px-3 py-2 align-middle text-center">
                    <span className="p-2 space-x-4 flex items-center justify-center">
                      <BiMessageDetail
                        size={30}
                        className="bg-gray-200 inline-flex p-1 rounded-full text-blue-300"
                      />
                      <IoEyeOutline
                        size={30}
                        className="bg-gray-200 inline-flex p-1 rounded-full text-blue-300"
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="flex items-center px-2 py-1 border rounded-md text-sm">
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <button
            className="flex items-center px-2 py-1 border rounded-md text-sm"
            onClick={nextpg}
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;

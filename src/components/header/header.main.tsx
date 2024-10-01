import React from "react";
import Image from "next/image";
import logo from "../../../public/img/LogoBLCNew2024.png";
export default function HeaderMain() {

  return (
    <div className="bg-white shadow-lg shadow-gray-500  w-full flex px-6  items-center justify-between p-3 top-0 ">
      <div>
        <Image src={logo} alt="logo" width={250} height={250} />
      </div>
      <div>
        {/* Logo and Menu Button */}
          <button className="bg-blue-900 p-2 rounded flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span className="text-white font-semibold">DANH MỤC</span>
          </button>
        </div>
        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Bạn muốn tìm gì ..."
            className="w-full py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Schedule and Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Schedule Icon */}
          <button className="flex items-center space-x-2 hover:t">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2z"
              />
            </svg>
            <span>Đặt Lịch</span>
          </button>      
        </div>
    </div>
  );
}

import { RiShutDownLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";

import { Link } from "react-router-dom";

   
  export default function SideNav() {
    return (
        <div
    className="relative flex h-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
        <div   className="p-4 mb-2">
            <h5   className="block font-sans text-green-800 text-xl antialiased font-semibold leading-snug tracking-normal ">
            Coffee Shop
            </h5>
        </div>
        <nav   className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            
            <Link to="/dashboard/customers"
                className="flex gap-5 items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <MdOutlinePayments   className="w-5 h-5"/>

                Customers
            </Link>
            <Link to="/"
                className="flex gap-5 items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <MdBorderColor   className="w-5 h-5"/>

                Orders
            </Link>
            <Link to="/"
                className="flex gap-5 items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <GrGroup   className="w-5 h-5"/>

                Employees
            </Link>
            <Link to="/"
                className="flex gap-5 items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <FaStore  className="w-5 h-5"/>

                Store
            </Link>
           <Link to="/"
                className="flex gap-5 items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <FaHandsHelping  className="w-5 h-5"/>

                Suppliers
            </Link>

            <Link to="/"
                className="flex gap-5 items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <RiShutDownLine  className="w-5 h-5"/>

                Log Out
            </Link>
        </nav>
        </div>
    );
  }
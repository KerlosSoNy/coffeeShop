import { useState } from "react"
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

    
    export default function Customers() {
        // const [customers , setCustomers] = useState([])
        const [search , setSearch] = useState("")

        console.log(search)
    
    
        
        
    return (
    <div  className="relative w-full p-5 ">
        <h1 className="my-5 mb-10 text-3xl text-green-800 font-semibold">Customers Page</h1>
        <div className="flex flex-row justify-between my-5">
        <label className="flex flex-row border rounded focus:outline-none focus:shadow-outline leading-tight shadow">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search"  className=" appearance-none py-2 px-3 text-gray-700   mx-auto  h-[45px]"/>
            <IoSearchOutline className="text-3xl my-auto ms-4 pe-2 bg"/>

        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 h-[45px] px-5 rounded flex flex-row gap-2">
            <span className="my-auto">Add</span>
            <FaPlus className="my-auto"/>

        </button>
        </div>
        <table  className="w-[100%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col"  className="px-6 py-3">
                        Customer Name
                    </th>
                    <th scope="col"  className="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col"  className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col"  className="px-6 py-3">
                        Address
                    </th>
                    <th scope="col"  className="px-6 py-3">
                        ACtions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17
                    </th>
                    <td  className="px-6 py-4">
                        Silver
                    </td>
                    <td  className="px-6 py-4">
                        Laptop
                    </td>
                    <td  className="px-6 py-4">
                        $2999
                    </td>
                    <td  className="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row"  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td  className="px-6 py-4">
                        White
                    </td>
                    <td  className="px-6 py-4">
                        Laptop PC
                    </td>
                    <td  className="px-6 py-4">
                        $1999
                    </td>
                    <td  className="px-6 py-4">
                        $1999
                    </td>
                </tr>
                <tr  className="bg-white dark:bg-gray-800">
                    <th scope="row"  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td  className="px-6 py-4">
                        Black
                    </td>
                    <td  className="px-6 py-4">
                        Accessories
                    </td>
                    <td  className="px-6 py-4">
                        $99
                    </td>
                    <td  className="px-6 py-4">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
</div>

      )
    }
    
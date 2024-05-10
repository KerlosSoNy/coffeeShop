import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
    
    export default function Login() {
      const [data , setData] = useState({})
      const navigate = useNavigate()
      // to get data from inputs
      const handleChange = (e) => {
        setData({...data , [e.target.name] : e.target.value})
      }

      const handleLogin = (e) => {
        e.preventDefault()

        if(data.email === "admin@admin.com" && data.password === "admin") {
          navigate("/dashboard")
        }else{
          toast.error("Wrong Email or Password")
        }
      }


      return (
        <div className="flex flex-row  justify-center h-full">
        <div className=" absolute">
          <Toaster position="top-right" />
        </div>
      <div className="flex flex-col justify-center my-auto mt-36 lg:w-1/3 md:w-1/2 w-full  border-2 shadow-lg shadow-gray-300  border-gray-100 py-8  px-10 rounded-md bg-white">
        <h1 className="text-center mb-3 text-3xl font-semibold">Login</h1>
        <h1 className="text-center mb-10 text-md font-semibold">
          Welcome Back
        </h1>
        <form
          action=""
          className="flex flex-col gap-5 w-full"
          onSubmit={handleLogin}
        >
          {/* Email Input */}
          <div className="flex flex-col">
            <div className="flex flex-col text-start">
              <label htmlFor="email">
                <span className="font-bold">Email</span>
                <span className="text-red-500">*</span>
              </label>
              <input className="border-2 p-2 px-3 border-gray-300 rounded-md" type="email" name="email" onChange={handleChange} placeholder="Enter your email" required/>
            </div>
          </div>
          {/* Password Input */}
          <div className="flex flex-col">
            <div className="flex flex-col text-start">
              <label htmlFor="password">
                <span className="font-bold">Passowrd</span>
                <span className="text-red-500">*</span>
              </label>
              <input className="border-2 p-2 px-3 border-gray-300 rounded-md" type="password" name="password" onChange={handleChange} placeholder="Enter your email" required/>
            </div>
          </div>
          <button className="bg-green-800 text-white p-2 px-5 rounded-md mb-5 mx-auto ">
              Login
          </button>
        </form>
        <span className="text-center mt-5 font-semibold text-xl">
          CopyRight@{" "}
          <a className="text-green-800" href="https://doctor-code.net/en">
            Ahmed Yasser
          </a>{" "}
          2024.
        </span>
      </div>
    </div>
      )
    }
    
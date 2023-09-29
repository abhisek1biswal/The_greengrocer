import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [form,setForm]=useState({});
    const [data,setData]=useState([]);
    const handleform=(e)=>{
        e.preventDefault();
        fetch("http://localhost:9091/register",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
        .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
        
    }
    useEffect(()=>{
        fetch("http://localhost:9091/getDetails",{
            method:"GET"
        })
        .then((response) =>response.json())
      .then((data) => {
        console.log("Success:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    },[])
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-6xl p-5 items-center">
          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Sign Up</h2>
            <form action className="flex flex-col gap-4" onSubmit={handleform}>
              <div className="flex flex-none">
                <input
                  className="p-2 mt-8 rounded-2xl border hover:scale-110 duration-300"
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  
                />
                <input
                  className="p-2 rounded-2xl border hover:scale-110 duration-300 h-11 mt-7 ml-5"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  
                />
              </div>
              <input
                className="p-2 rounded-xl border hover:scale-110 duration-300"
                type="text"
                name="email"
                placeholder="Enter Your Email"
               
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-at-fill absolute top-1/2 right-6 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
              </svg>
              <input
                className="p-2 rounded-xl border hover:scale-110 duration-300"
                type="number"
                name="phnno"
                placeholder="Enter Your Phone Number"
                
              />
              <input
                className="p-2 rounded-xl border hover:scale-110 duration-300"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                
              />
              <input
                className="p-2 rounded-xl border hover:scale-110 duration-300"
                type="password"
                name="cpassword"
                placeholder="Re-type Your Password"
              />
              <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Sign Up
              </button>
            </form>
            <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center">OR</p>
              <hr className="border-gray-500" />
            </div>
            
            <hr className="border-gray-500" />
            <div class="mt-3 text-xs flex justify-between items-center">
              <p>If you already have an account</p>
              <Link className="py-2 px-7 font-bold bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">
                Login
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img
              className="p-50 rounded-2xl"
              alt=""
              style={{
                width: "350px",
                height: "450px",
                transform: "translate(50px)",
              }}
              src="Fruits-and-Vegetables.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

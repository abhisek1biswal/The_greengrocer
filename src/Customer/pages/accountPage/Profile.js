import React from "react";

export default function Profile() {
  return (
    <div className="flex justify-center">
      <div class=" w-[50%] p-5 m-5 border-spacing-3 ">
        <h2 class="mb-5 text-3xl font-bold  text-gray-900 dark:text-green-400">
          Personal Information
        </h2>
        <div class="w-full max-w-full">
          <div class="flex flex-wrap m-11 -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <span
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                contentEditable
              >
                Sai Sagar
              </span>
              
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <span
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                contentEditable
              >Mohapatra</span>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <span
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                contentEditable
              >sai6895@gmail.com</span>
              
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-number"
              >
                Mobile Number
              </label>
              <span
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                pattern="[0-9]*"
                contentEditable
              ></span>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                E-mail Id
              </label>
              <span
                class="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                contentEditable
              > Saisagar@gmail.com</span>
              <p class="text-gray-600 text-xs italic"></p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <span
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                contentEditable
              ></span>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Rajasthan</option>
                  <option>Goa</option>
                  <option>Haryana</option>
                  <option>Assam</option>
                  <option>New Delhi</option>
                  <option>Uttrakhand</option>
                  <option>Uttar Pradesh</option>
                  <option>Bihar</option>
                  <option>West Bengal</option>
                  <option>Punjab</option>
                  <option>Gujrat</option>
                  <option>Jharkhand</option>
                  <option>Chhattisgarh</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Telengana</option>
                  <option>Andhra Pradesh</option>
                  <option>Kerla</option>
                  <option>Tamil Nadu</option>
                  <option>karnataka</option>
                  <option>odisha</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <span
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                contentEditable
              ></span>
            </div>
          </div>

          <div class="flex items-center space-x-24 p-8">
            <button
              type="submit"
              class="text-blue-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Update Details
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

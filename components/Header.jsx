import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col flex-1 w-full">
    <header className="z-10 py-4 bg-white shadow-sm rounded-xl">
      <div
        className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 "
      >
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div
            className="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
          >
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md  focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Toggle color mode"
            >
            
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                ></path>
              </svg>
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"
              ></span>
            </button>
            {/* <div >
              <ul
                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
              >
                <li className="flex">
                  <a
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    href="#"
                  >
                    <span>Messages</span>
                    <span
                      className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                    >
                      13
                    </span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    href="#"
                  >
                    <span>Sales</span>
                    <span
                      className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                    >
                      2
                    </span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    href="#"
                  >
                    <span>Alerts</span>
                  </a>
                </li>
              </ul>
            </div> */}
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
    </div>
  )
}

export default Header
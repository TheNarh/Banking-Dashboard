function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex justify-between items-center transition-colors duration-300">

      {/* Logo / Brand */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 text-white font-bold text-lg px-3 py-1 rounded-lg">
          GB
        </div>
        <span className="text-xl font-bold text-gray-800 dark:text-white">GhanaBank</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-500 dark:text-yellow-400 hover:text-blue-600 dark:hover:text-yellow-300 transition"
        >
          {darkMode ? (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        {/* Notification Bell */}
        <button className="relative text-gray-500 dark:text-gray-300 hover:text-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-9 w-9 flex items-center justify-center">
            LN
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Ludwig Narh</span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar



import React from "react";
import reactLogo from "../assets/react.svg";

const Navbar = ({ setTest, isTestActive, setSubject, subjectObj }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Logo & Branding */}
        <div className="flex items-center gap-3">
          <a 
            href="/" 
            className="group flex items-center justify-center transition-transform duration-300 hover:scale-105"
            aria-label="Home"
          >
            <img 
              src={reactLogo} 
              className="h-8 w-auto animate-[spin_20s_linear_infinite] motion-reduce:animate-none" 
              alt="React logo" 
            />
          </a>
          <h1 className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-sky-400 dark:to-blue-500">
            React Mastery
          </h1>
        </div>

        {/* Center/Right Section: Controls */}
        <div className="flex items-center gap-4">
          
          {/* Navigation Toggle Group */}
          <div className="inline-flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
            <button
              onClick={() => setTest(true)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                isTestActive
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              Test
            </button>
            <button
              onClick={() => setTest(false)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                !isTestActive
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              Notes
            </button>
          </div>

          {/* Subject Dropdown Select */}
          <div className="relative">
            <select
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              id="subject"
              className="w-40 appearance-none rounded-lg border border-slate-200 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:focus:border-sky-400 dark:focus:ring-sky-400"
            >
              {subjectObj && Object.keys(subjectObj).map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            {/* Custom SVG chevron arrow right inside the select wrapper */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400 dark:text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
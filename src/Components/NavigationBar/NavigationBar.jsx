import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHireAHelper } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useSpring, animated } from "react-spring";
const NavigationBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const drawerAnimation = useSpring({
    width: isDrawerOpen ? "translateY(0%)" : "translateY(-100%)",
    opacity: isDrawerOpen ? 1 : 0,
    config: {
      duration: isDrawerOpen ? 400 : 400, // Adjust the duration values as desired
    },
  });

  return (
    <div className="flex justify-center fixed z-10 w-screen bg-black bg-opacity-80 md:bg-opacity-30">
      <div className="mx-auto" style={{ width: "1280px" }}>
        {/* Navigation Bar */}
        <nav className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <NavLink
                  to="/"
                  className="flex items-center"
                  onClick={closeDrawer}
                >
                  <FaHireAHelper className="h-8 w-8 mr-2 text-white" />
                  <span className="text-white font-semibold text-2xl font-mono">
                    Hire Synce
                  </span>
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="text-white  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center "
                    activeClassName="text-gray-900 bg-gray-200"
                    exact
                    onClick={closeDrawer}
                  >
                    HOME
                  </NavLink>

                  <NavLink
                    to="/jobs"
                    className="text-white  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center "
                    activeClassName="text-gray-900 bg-gray-200"
                    onClick={closeDrawer}
                  >
                    <div className="dropdown dropdown-hover">
                      <label
                        tabIndex={0}
                        className="m-1 flex items-center gap-1"
                      >
                        JOBS
                        <FiChevronDown className="text-white font-extrabold text-xl" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
                      >
                        <li>
                          <a>REMOTE JOBS</a>
                        </li>
                        <li>
                          <a>HYBRID JOBS</a>
                        </li>
                        <li>
                          <a>ONSITE JOBS</a>
                        </li>
                        <li>
                          <a>SOFTWARE ENGINEER</a>
                        </li>
                        <li>
                          <a>UX DESIGNER</a>
                        </li>
                        <li>
                          <a>PAID INTERN</a>
                        </li>
                        <li>
                          <a>UNPAID INTERN</a>
                        </li>
                      </ul>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/services"
                    className="text-white  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center "
                    activeClassName="text-gray-900 bg-gray-200"
                    onClick={closeDrawer}
                  >
                    <div className="dropdown dropdown-hover">
                      <label
                        tabIndex={0}
                        className="m-1 flex items-center gap-1"
                      >
                        SERVICES{" "}
                        <FiChevronDown className="text-white font-extrabold text-xl" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
                      >
                        <li>
                          <a>PROFESSIONAL TRAINING</a>
                        </li>
                        <li>
                          <a>INTERVIEW COURSES</a>
                        </li>
                        <li>
                          <a>ENGLISH SKILL TRAINING</a>
                        </li>
                        <li>
                          <a>RESUME WRITING</a>
                        </li>
                        <li>
                          <a>JOB SEARCH STRATEGY</a>
                        </li>
                        <li>
                          <a>CAREER COACHING</a>
                        </li>
                    
                        <li>
                          <a>INTERNSHIP PROGRAMS</a>
                        </li>
                      </ul>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/services"
                    className="text-white  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center "
                    activeClassName="text-gray-900 bg-gray-200"
                    onClick={closeDrawer}
                  >
                    ABOUT US
                  </NavLink>
                  <NavLink
                    to="/resources"
                    className="text-white  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center "
                    activeClassName="text-gray-900 bg-gray-200"
                    onClick={closeDrawer}
                  >
                    <div className="dropdown dropdown-hover">
                      <label
                        tabIndex={0}
                        className="m-1 flex items-center gap-1"
                      >
                        RESOURCES
                        <FiChevronDown className="text-white font-extrabold text-xl" />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
                      >
                        <li>
                          <a>DOCUMENTS</a>
                        </li>
                        <li>
                          <a>EMPLOYER RESOURCES </a>
                        </li>
                        <li>
                          <a>CANDIDATE RESOURCES </a>
                        </li>
                        <li>
                          <a>BLOG</a>
                        </li>
                        <li>
                          <a>FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/contact-us"
                    className="text-white  hover:text-gray-300 px-3 py-2 rounded-md text-sm font-bold flex items-center "
                    activeClassName="text-gray-900 bg-gray-200"
                    onClick={closeDrawer}
                  >
                    CONTACT US
                  </NavLink>
                </div>
              </div>
              {/* Hamburger Menu */}
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  onClick={toggleDrawer}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900  "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`${
                      isDrawerOpen ? "hidden" : "block"
                    } h-6 w-6 text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={`${
                      isDrawerOpen ? "block" : "hidden"
                    } h-6 w-6 text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <animated.div
          style={drawerAnimation}
          className={`${isDrawerOpen ? "block" : "hidden"} md:hidden`}
        >
          <div className={`${isDrawerOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <NavLink
                to="/"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-900 bg-gray-200"
                exact
                onClick={closeDrawer}
              >
                HOME
              </NavLink>
              <NavLink
                to="/jobs"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-900 bg-gray-200"
                onClick={closeDrawer}
              >
                JOBS
              </NavLink>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-900 bg-gray-200"
                onClick={closeDrawer}
              >
                SERVICES
              </NavLink>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-900 bg-gray-200"
                onClick={closeDrawer}
              >
                ABOUT US
              </NavLink>

              <NavLink
                to="/resources"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-900 bg-gray-200"
                onClick={closeDrawer}
              >
                RESOURCES
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-900 bg-gray-200"
                onClick={closeDrawer}
              >
                CONTACT US
              </NavLink>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default NavigationBar;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../Redux/Slices/AuthSlice";
// import { Link, useNavigate } from "react-router-dom";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { FiMenu } from "react-icons/fi";
// import {
//   FaHome,
//   FaUserCircle,
//   FaPlus,
//   FaList,
//   FaInfoCircle,
//   FaPhone,
// } from "react-icons/fa";

// export default function Sidebar({ hideBar = false }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(false);
//   const { isLoggedIn, role, data } = useSelector((state) => state.auth);

//   const onLogout = async function () {
//     await dispatch(logout());
//     navigate("/");
//   };
//   // problem on ul effect
//   function changeWidth() {
//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "auto";
//   }

//   function hideDrawer() {
//     const element = document.getElementsByClassName("drawer-toggle");
//     element[0].checked = false;

//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "0";
//   }

//   if (!hideBar) {
//     return (
//       <div className="drawer absolute left-0 z-50 w-fit">
//         <input className="drawer-toggle" id="my-drawer" type="checkbox" />
//         <div className="drawer-content ">
//           <label
//             htmlFor="my-drawer"
//             className="cursor-pointer fixed top-0 left-3"
//           >
//             <FiMenu
//               onClick={changeWidth}
//               size={"32px"}
//               className="font-bold text-base-200 dark:text-white m-4"
//             />
//           </label>
//         </div>
//         <div className="drawer-side  w-0 shadow-custom dark:shadow-lg">
//           <label
//             htmlFor="my-drawer"
//             className="drawer-overlay w-screen"
//           ></label>
//           <ul className="menu  p-4 pt-7 h-[100%] min-w-[250px] max-w-[350px]  bg-white dark:bg-[#29303ea3] backdrop-blur-[8px] text-gray-500 font-inter dark:text-slate-50 md:text-[17px] text-base font-[600] relative">
//             <li className="w-fit absolute right-2 z-50 text-red-500">
//               <button onClick={hideDrawer}>
//                 <AiFillCloseCircle size={28} />
//               </button>
//             </li>
//             <li>
//               <Link to="/" className="flex gap-4 items-center">
//                 <FaHome
//                   size={18}
//                   className="text-gray-500 dark:text-slate-100"
//                 />
//                 Home
//               </Link>
//             </li>

//             {role === "ADMIN" && (
//               <li>
//                 <Link to="/admin/dashboard" className="flex gap-4 items-center">
//                   <FaUserCircle
//                     size={18}
//                     className="text-gray-500 dark:text-slate-100"
//                   />
//                   Admin DashBoard
//                 </Link>
//               </li>
//             )}

//             {role === "ADMIN" && (
//               <li>
//                 <Link to="/course/create" className="flex gap-4 items-center">
//                   <FaPlus
//                     size={18}
//                     className="text-gray-500 dark:text-slate-100"
//                   />
//                   Create new course
//                 </Link>
//               </li>
//             )}

//             <li>
//               <Link to="/courses" className="flex gap-4 items-center">
//                 <FaList
//                   size={18}
//                   className="text-gray-500 dark:text-slate-100"
//                 />
//                 All Courses
//               </Link>
//             </li>

//             <li>
//               <Link to="/contact" className="flex gap-4 items-center">
//                 <FaPhone
//                   size={18}
//                   className="text-gray-500 dark:text-slate-100"
//                 />
//                 Contact Us
//               </Link>
//             </li>

//             <li>
//               <Link to="/about" className="flex gap-4 items-center">
//                 <FaInfoCircle
//                   size={18}
//                   className="text-gray-500 dark:text-slate-100"
//                 />
//                 About Us
//               </Link>
//             </li>
//             </ul>
//             <ul className="menu p-4 pt-7 h-[100%] min-w-[250px] max-w-[350px]  bg-white dark:bg-[#29303ea3]  text-gray-500 font-inter dark:text-slate-50 md:text-[17px] text-base font-[600] relative ">
//             {isLoggedIn ? (
//               <li className="absolute bottom-4 w-[90%] ">
//                 <div className="w-full flex md:flex-row flex-col gap-2 items-center justify-center">
//                   <button className="btn-primary px-3.5 py-2.5 font-semibold rounded-md w-full">
//                     <Link to="/user/profile">Profile</Link>
//                   </button>
//                   <button
//                     className="btn-secondary px-3.5 py-2.5 font-semibold rounded-md w-full"
//                     onClick={onLogout}
//                     disabled={isLoading}
//                   >
//                     <Link>{isLoading ? "Logout..." : "Logout"}</Link>
//                   </button>
//                 </div>
//               </li>
//             ) : (
//               <li className="absolute bottom-4 w-[90%] ">
//                 <div className="w-full flex items-center justify-center">
//                   <button className="btn-primary px-3.5 border-[2px] py-2.5 font-semibold rounded-md w-full">
//                     <Link to="/login">Login</Link>
//                   </button>
//                   <button className="btn-secondary px-3.5 py-2.5 font-semibold rounded-md w-full">
//                     <Link to="/signup">Signup</Link>
//                   </button>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import {
  FaHome,
  FaUserCircle,
  FaPlus,
  FaList,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";


export default function Sidebar({ hideBar = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

  const { isLoggedIn, role, data } = useSelector((state) => state.auth);

  const onLogout = async function () {
    setIsLoading(true);
    await dispatch(logout());
    setIsLoading(false);
    navigate("/");
    setIsDrawerOpen(false); // Close sidebar on logout
  };
  
  // Toggle function for the sidebar state
  const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
  }

  // Hide function for the sidebar state
  const hideDrawer = () => {
    setIsDrawerOpen(false);
  }

  if (hideBar) {
    return null; // Don't render if hideBar is true
  }

 

  return (
    <div className="relative z-50">
      
      {/* 1. Menu Icon (Always visible) */}
      <div className="fixed top-0 left-3">
        <FiMenu
          onClick={toggleDrawer} // Use the state toggle
          size={"32px"}
          className="cursor-pointer font-bold text-gray-800 dark:text-white m-4 transition-transform hover:scale-105"
        />
      </div>

      {/* 2. Overlay (Clicking outside closes the menu) */}
      {isDrawerOpen && (
        <div 
          onClick={hideDrawer} // Close on overlay click
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* 3. Sidebar Menu (The actual sliding content) */}
      <div 
        className={`fixed top-0 left-0 h-full transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
          min-w-[280px] max-w-xs shadow-2xl bg-white dark:bg-[#1f2937]
        `}
      >
        <ul className="menu p-4 pt-12 h-full text-gray-600 dark:text-slate-100 font-semibold flex flex-col justify-between">
          
          {/* Top Section: Close Button and Main Navigation Links */}
          <div>
            <li className="absolute top-2 right-2 text-red-500">
              <button onClick={hideDrawer} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <AiFillCloseCircle size={28} />
              </button>
            </li>
            
            {/* --- Navigation Links --- */}
            <li onClick={hideDrawer}>
              <Link to="/" className="flex gap-4 items-center hover:bg-sky-100 dark:hover:bg-slate-700">
                <FaHome size={18} /> Home
              </Link>
            </li>

            {role === "ADMIN" && (
              <li onClick={hideDrawer}>
                <Link to="/admin/dashboard" className="flex gap-4 items-center hover:bg-sky-100 dark:hover:bg-slate-700">
                  <FaUserCircle size={18} /> Admin DashBoard
                </Link>
              </li>
            )}

            {role === "ADMIN" && (
              <li onClick={hideDrawer}>
                <Link to="/course/create" className="flex gap-4 items-center hover:bg-sky-100 dark:hover:bg-slate-700">
                  <FaPlus size={18} /> Create new course
                </Link>
              </li>
            )}

            <li onClick={hideDrawer}>
              <Link to="/courses" className="flex gap-4 items-center hover:bg-sky-100 dark:hover:bg-slate-700">
                <FaList size={18} /> All Courses
              </Link>
            </li>

            <li onClick={hideDrawer}>
              <Link to="/contact" className="flex gap-4 items-center hover:bg-sky-100 dark:hover:bg-slate-700">
                <FaPhone size={18} /> Contact Us
              </Link>
            </li>

            <li onClick={hideDrawer}>
              <Link to="/about" className="flex gap-4 items-center hover:bg-sky-100 dark:hover:bg-slate-700">
                <FaInfoCircle size={18} /> About Us
              </Link>
            </li>
          </div>
          
          {/* Bottom Section: Auth/Profile Buttons */}
          <div className="w-full mt-auto p-2">
            {isLoggedIn ? (
              <div className="w-full flex flex-col md:flex-row gap-2">
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg w-full transition-colors"
                  onClick={hideDrawer} // Close on profile click
                >
                  <Link to="/user/profile">Profile</Link>
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg w-full transition-colors"
                  onClick={onLogout}
                  disabled={isLoading}
                >
                  {isLoading ? "Logout..." : "Logout"}
                </button>
              </div>
            ) : (
              <div className="w-full flex gap-2">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg w-full transition-colors">
                  <Link to="/login" onClick={hideDrawer}>Login</Link>
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg w-full transition-colors">
                  <Link to="/signup" onClick={hideDrawer}>Signup</Link>
                </button>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
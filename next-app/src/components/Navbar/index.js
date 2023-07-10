import { isLogin, logout } from "@/hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaFaceSadTear } from "react-icons/fa6";

const Navbar = () => {
  const router = useRouter();

  const [isLoginStatus, setIsloginStatus] = useState(null);

  const [openNotifications, setOpenNotifications] = useState(false);

  const handleNotificationsOperation = async () => {
    setOpenNotifications(!openNotifications);
  };

  const logoutOperation = async (e) => {
    logout();
    Swal.fire({
      icon: "success",
      title: "Logout successful",
      cancelButtonAriaLabel: false,
      timer: 2000,
      showConfirmButton: false,
    });
    router.push("/");
  };

  useEffect(() => {
    (async () => {
      isLogin(setIsloginStatus);
    })();
  });

  return (
    <div className="navbar bg-appColor_1 mb-14 -z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-appColor_3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-[#1d232a] text-appColor_3"
          >
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="text-appColor_2">Auth</span>
              {isLoginStatus ? (
                <ul className="p-2">
                  <li onClick={logoutOperation}>
                    <span>Logout</span>
                  </li>
                </ul>
              ) : (
                <ul className="p-2">
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl text-appColor_2"
        >
          Job Hip
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-appColor_3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Auth</summary>
              {isLoginStatus ? (
                <ul className="p-2 bg-[#1d232a]">
                  <li onClick={logoutOperation}>
                    <span>Logout</span>
                  </li>
                </ul>
              ) : (
                <ul className="p-2">
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                </ul>
              )}
            </details>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={handleNotificationsOperation}
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-appColor_2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {openNotifications === true && (
          <div className="notifications">
            <div className="messages">
              <FaFaceSadTear className="sad-emoji" />
              <span className="no-message">There are no messages yet</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

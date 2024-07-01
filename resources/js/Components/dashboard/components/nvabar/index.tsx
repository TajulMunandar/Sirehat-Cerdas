import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { motion } from "framer-motion";
import avatar from "../../../../../images/avatars/1.png";
import { Link, usePage } from "@inertiajs/react";

interface NavbarProps {
    currentPage: React.ReactNode;
}

interface User {
    id: number;
    role: string;
    username: string;
    // Tambahkan properti lain yang sesuai dengan struktur user Anda
}

interface PageProps {
    auth: {
        user: User;
    };
    [key: string]: any; // Add index signature
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { auth } = usePage<PageProps>().props;
    const user = auth.user;

    console.log("User Data:", user);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const getRoleString = (role: string) => {
        const roleNumber = Number(role);
        switch (roleNumber) {
            case 0:
                return "Super Admin";
            case 1:
                return "Pimpinan";
            case 2:
                return "Dokter";
            case 3:
                return "Apoteker";
            case 4:
                return "Operator";
            default:
                return "Unknown";
        }
    };

    return (
        <>
            <motion.nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
            >
                <div
                    className="navbar-nav-right d-flex align-items-center"
                    id="navbar-collapse"
                >
                    {/* <!-- Search --> */}
                    <div className="navbar-nav pt-3 align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <Breadcrumb>
                                {currentPage === "Dashboard" && (
                                    <Breadcrumb.Item active={true}>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </Breadcrumb.Item>
                                )}

                                {/* Breadcrumb untuk halaman lain */}
                                {currentPage !== "Dashboard" && (
                                    <>
                                        <Breadcrumb.Item active={true}>
                                            <Link href="/dashboard">
                                                Dashboard
                                            </Link>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item active={true}>
                                            {currentPage}
                                        </Breadcrumb.Item>
                                    </>
                                )}
                            </Breadcrumb>
                        </div>
                    </div>
                    {/* <!-- /Search --> */}

                    <ul className="flex flex-row items-center ml-auto">
                        {/* User */}
                        <li className="relative">
                            <a
                                className="flex pt-3 items-center cursor-pointer"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown();
                                }}
                            >
                                <div className="avatar online">
                                    <img
                                        src={avatar}
                                        className="w-10 h-auto rounded-full"
                                        alt="Avatar"
                                    />
                                </div>
                            </a>
                            {dropdownOpen && (
                                <ul className="absolute p-0 right-0 mt-2 w-48 bg-white border-gray-200 rounded-lg shadow-lg">
                                    <li>
                                        <a
                                            className="block py-2 px-4 hover:bg-gray-100"
                                            href="#"
                                        >
                                            <div className="flex">
                                                <div className="flex-shrink-0 mr-3">
                                                    <div className="avatar online">
                                                        <img
                                                            src={avatar}
                                                            className="w-10 h-auto rounded-full"
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="font-semibold block">
                                                        {user.username}
                                                    </span>
                                                    <small className="text-gray-500">
                                                        {getRoleString(
                                                            user.role
                                                        )}
                                                    </small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="border-t border-gray-200"></div>
                                    </li>
                                    <li>
                                        <a
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            href="#"
                                        >
                                            <i className="bx bx-user mr-2"></i>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            className="block px-4 py-2 hover:bg-gray-100"
                                            href="/logout"
                                            method="post"
                                        >
                                            <i className="bx bx-power-off mr-2"></i>
                                            <span>Log Out</span>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* /User */}
                    </ul>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;

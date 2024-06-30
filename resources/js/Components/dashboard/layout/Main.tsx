import React, { useEffect } from "react";
import Sidebar from "../components/sidebars";
import Navbar from "../components/nvabar";
import { motion } from 'framer-motion';
import "../../../../css/dashboard/core.css";
import "../../../../css/dashboard/theme-default.css";
import "../../../../css/dashboard/demo.css";
import "../../../../css/dashboard/apex-charts.css";

interface MainDashboardProps {
    children: React.ReactNode;
    nav: React.ReactNode;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ children, nav }) => {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Sidebar />
                    <div className="layout-page">
                        <Navbar currentPage={nav} />
                        <motion.div
                            className="content-wrapper"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        >
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    );
};

export default MainDashboard;

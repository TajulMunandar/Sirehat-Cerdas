import React, { useEffect } from "react";
import Sidebar from "../components/sidebars";
import Navbar from "../components/nvabar";

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
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
            </div>
        </>
    );
};

export default MainDashboard;

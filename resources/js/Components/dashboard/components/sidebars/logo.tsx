import React from "react";
import logo from "../../../../../images/logo.png";
import { Link } from "@inertiajs/react";

const Logo: React.FC = () => {
    return (
        <>
            <div className="app-brand demo">
                <Link href="/dashboard">
                    <span className="app-brand-logo demo">
                        <img src={logo} alt="" width={220} />
                    </span>
                </Link>

                <a
                    href="#"
                    className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                >
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>
        </>
    );
};

export default Logo;

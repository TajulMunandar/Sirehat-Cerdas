import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItems: React.FC = () => {
    const { url } = usePage();

    const isActive = (path: string) => {
        // Remove any trailing slashes from the pathname to normalize it
        const currentPath = url.replace(/\/$/, "");
        const targetPath = path.replace(/\/$/, "");

        // Check if the current path matches the target path
        return currentPath === targetPath ? "active" : "";
    };

    return (
        <>
            <ul className="menu-inner py-1">
                {/* Dashbaord */}
                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons "
                            icon={["fas", "house"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>

                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "address-card"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Registrasi</div>
                    </Link>
                </li>

                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "chart-bar"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Riwayat Kesehatan</div>
                    </Link>
                </li>

                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "truck"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Antar Obat</div>
                    </Link>
                </li>

                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Data Master</span>
                </li>
                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "suitcase-medical"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Obat</div>
                    </Link>
                </li>
                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "user-doctor"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Dokter</div>
                    </Link>
                </li>
                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "user-ninja"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Kurir</div>
                    </Link>
                </li>
                <li className={`menu-item ${isActive("/dashboard")}`}>
                    <Link href="/dashboard" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "user-group"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Pasien</div>
                    </Link>
                </li>
                <li className={`menu-item ${isActive("/dashboard/users")}`}>
                    <Link href="/dashboard/users" className="menu-link">
                        <FontAwesomeIcon
                            className="menu-icon tf-icons"
                            icon={["fas", "users"]}
                            size="1x"
                        />
                        <div data-i18n="Analytics">Users</div>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default ListItems;

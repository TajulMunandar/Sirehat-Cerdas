import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface User {
    id: number;
    role: number;
    // Tambahkan properti lain yang sesuai dengan struktur user Anda
}

interface PageProps {
    user: User;
    [key: string]: any; // Tambahkan tanda tangan indeks
}

const ListItems: React.FC = () => {
    const { url } = usePage<PageProps>();
    const { user } = usePage<PageProps>().props;

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
                {user && (
                    <>
                        {(user.role === 0 || user.role === 1 || user.role === 2 || user.role === 3 || user.role === 4) && (
                            <>
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
                            </>
                        )}
                        {(user.role === 0 || user.role === 4) && (
                            <>
                                <li className={`menu-item ${isActive("/dashboard/registrasi")}`}>
                                    <Link href="/dashboard/registrasi" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "address-card"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Registrasi</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 2) && (
                            <>
                                <li className={`menu-item ${isActive("/dashboard/kunjungan")}`}>
                                    <Link href="/dashboard/kunjungan" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "chart-line"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Kunjungan</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 3) && (
                            <>
                                <li
                                    className={`menu-item ${isActive(
                                        "/dashboard/transaksi-obat"
                                    )}`}
                                >
                                    <Link
                                        href="/dashboard/transaksi-obat"
                                        className="menu-link"
                                    >
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "tablets"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Transaksi Obat</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 1) && (
                            <>
                                <li className={`menu-item ${isActive("/dashboard/konsultasi")}`}>
                                    <Link href="/dashboard/konsultasi" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "comment"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Konsultasi Online</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 3) && (
                            <>
                                <li className={`menu-item ${isActive("/dashboard/transaksi-obat-online")}`}>
                                    <Link href="/dashboard/transaksi-obat-online" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "comments"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Transaksi Obat Online</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 1 || user.role === 2) && (
                            <>
                                <li className={`menu-item ${isActive("/dashboard/riwayat-kesehatan")}`}>
                                    <Link href="/dashboard/riwayat-kesehatan" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "chart-bar"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Riwayat Kesehatan</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 1) && (
                            <>
                                <li className={`menu-item ${isActive("/dashboard/antar-jemput-obat")}`}>
                                    <Link href="/dashboard/antar-jemput-obat" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "truck"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Antar Jemput Obat</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {(user.role === 0 || user.role === 2) && (
                            <>
                                <li
                                    className={`menu-item ${isActive(
                                        "/dashboard/jadwal-dokter"
                                    )}`}
                                >
                                    <Link href="/dashboard/jadwal-dokter" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "calendar-days"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Jadwal Dokter</div>
                                    </Link>
                                </li>
                            </>
                        )}
                        {user.role === 0 && (
                            <>
                                <li className="menu-header small text-uppercase">
                                    <span className="menu-header-text">Data Master</span>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/obat")}`}>
                                    <Link href="/dashboard/obat" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "suitcase-medical"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Obat</div>
                                    </Link>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/dokter")}`}>
                                    <Link href="/dashboard/dokter" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "user-doctor"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Dokter</div>
                                    </Link>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/apoteker")}`}>
                                    <Link href="/dashboard/apoteker" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "user-nurse"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Apoteker</div>
                                    </Link>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/operator")}`}>
                                    <Link href="/dashboard/operator" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "user-tie"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Operator</div>
                                    </Link>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/kurir")}`}>
                                    <Link href="/dashboard/kurir" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "user-ninja"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Kurir</div>
                                    </Link>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/pasien")}`}>
                                    <Link href="/dashboard/pasien" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "user-group"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Pasien</div>
                                    </Link>
                                </li>
                                <li className={`menu-item ${isActive("/dashboard/user")}`}>
                                    <Link href="/dashboard/user" className="menu-link">
                                        <FontAwesomeIcon
                                            className="menu-icon tf-icons"
                                            icon={["fas", "users"]}
                                            size="1x"
                                        />
                                        <div data-i18n="Analytics">Users</div>
                                    </Link>
                                </li>
                            </>
                        )}
                    </>
                )}
            </ul>
        </>
    );
};

export default ListItems;

import { RegistrasiTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { TRegistrasi } from "../../types/registrasi";
import RegisterList from "@/Components/dashboard/components/RegisterList";
import RegisterListEmp from "@/Components/dashboard/components/RegisterListEmp";
import { ToastContainer, toast } from "react-toastify";

interface DashboardRegistrasisProps {
    registrasis: TRegistrasi[];
}

const DashboardRegistrasis: React.FC<DashboardRegistrasisProps> = ({
    registrasis,
}) => {
    const formatTanggal = (tanggal: string) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long", // Nama hari dalam bahasa Inggris, misalnya "Selasa"
            day: "numeric", // Tanggal, misalnya "6"
            month: "long", // Nama bulan dalam bahasa Inggris, misalnya "Juni"
            year: "numeric", // Tahun, misalnya "2023"
            hour: "numeric", // Jam dalam format 24 jam, misalnya "14"
            minute: "numeric", // Menit, misalnya "00"
            hour12: false, // Menggunakan format 24 jam
            timeZone: "Asia/Jakarta", // Zona waktu untuk WIB
            timeZoneName: "short", // Nama zona waktu, misalnya "WIB"
        };

        const dateObj = new Date(tanggal);
        const formattedDate = dateObj.toLocaleDateString("id-ID", options); // Menggunakan locale Indonesia untuk nama hari dan bulan

        // Pisahkan tanggal dan waktu
        const [tanggalFormatted, waktuFormatted] =
            formattedDate.split(" pukul ");
        // Tambahkan "|" sebelum "pukul"
        const formattedString = `${tanggalFormatted} | pukul ${waktuFormatted}`;

        return formattedString;
    };

    const data = registrasis.map((item) => ({
        ...item,
        id: item.id,
        poli: item.poli,
        keluhan: item.keluhan,
        tanggal: formatTanggal(item.tanggal),
        nama: item.nama,
        nik: item.nik,
        kk: item.kk,
        bpjs: item.bpjs,
        alamat: item.alamat,
        foto: item.foto,
        dokter: item.nama_dokter,
    }));

    return (
        <>
            <Head title="Registrasi" />
            <MainDashboard nav={"Registrasi"}>
                <ToastContainer
                    theme="colored"
                    autoClose={1500}
                    hideProgressBar
                    closeButton={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <h3 className="font-bold">Table Registrasi</h3>
                {registrasis.length > 0 ? (
                    <RegisterList patient={data}></RegisterList>
                ) : (
                    <RegisterListEmp></RegisterListEmp>
                )}
            </MainDashboard>
        </>
    );
};

export default DashboardRegistrasis;

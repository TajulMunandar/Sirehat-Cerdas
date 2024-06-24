import { RiwayatTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TRiwayat } from "@/types/riwayat";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardRiwayatsProps {
    kunjungans: TRiwayat[];
}

const DashboardRiwayats: React.FC<DashboardRiwayatsProps> = ({
    kunjungans
}) => {

    const datas = kunjungans.map((item) => ({
        ...item,
        id_dokter: item.id_dokter,
        id_registrasi: item.id_registrasi,
        tanggal: item.registrasi.tanggal,
        dokter: item.dokter.nama,
        pasien: item.registrasi.pasien.nama,
        keluhaan: item.registrasi.keluhan,
        diagnosa: item.diagnosa,
        poli: item.registrasi.poli,
        tindakan: item.tindakan,
    }));

    // User role mappin
    const statusTindakanMapping = {
        0: "PENGOBATAN",
        1: "RUJUKAN",
    };

    return (
        <>
            <Head title="Riwayat Kesehatan" />
            <MainDashboard nav={"Riwayat Kesehatan"}>
                <h3 className="font-bold">Table Riwayat Kesehatan</h3>
                <Table
                    headers={RiwayatTableHeader}
                    data={datas}
                    statusMapping={statusTindakanMapping}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardRiwayats;

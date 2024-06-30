import { KonsultasiTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import TableNoRow from "@/Components/dashboard/components/table/TableNoRow";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TKonsultasi } from "@/types/konsultasi";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardKonsultasisProps {
    konsultasis: TKonsultasi[];
}

const DashboardKonsultasis: React.FC<DashboardKonsultasisProps> = ({
    konsultasis
}) => {


    const datas = konsultasis.map((item) => ({
        ...item,
        id_dokter: item.id_dokter,
        id_pasien: item.id_pasien,
        dokter: item.dokter.nama,
        pasien: item.pasien.nama,
        status_konsul: item.status_konsul,
        status_obat: item.status_obat,
        diagnosa: item.diagnosa,
    }));

    // User role mappin
    const statusObatMapping = {
        0: "TANPA OBAT",
        1: "RESEP OBAT",
    };
    const statusKonsulMapping = {
        0: "BELUM",
        1: "SELESAI",
    };

    return (
        <>
            <Head title="Konsultasi Online" />
            <MainDashboard nav={"Konsultasi Online"}>
                <h3 className="font-bold">Table Konsultasi Online</h3>
                <TableNoRow
                    headers={KonsultasiTableHeader}
                    data={datas}
                    statusMapping1={statusObatMapping}
                    statusMapping2={statusKonsulMapping}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardKonsultasis;

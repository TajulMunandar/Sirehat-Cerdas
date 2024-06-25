import { KunjunganTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TKunjungan } from "@/types/kunjungan";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardKunjungansProps {
    kunjungans: TKunjungan[];
}

const DashboardKunjungans: React.FC<DashboardKunjungansProps> = ({
    kunjungans
}) => {


    const datas = kunjungans.map((item) => ({
        ...item,
        id_pasien: item.id_pasien,
        pasien: item.pasien.nama,
        tanggal: item.tanggal,
        keluhan: item.keluhan,
    }));


    return (
        <>
            <Head title="Kunjungan" />
            <MainDashboard nav={"Kunjungan"}>
                <h3 className="font-bold">Table Kunjungan</h3>
                <Table
                    headers={KunjunganTableHeader}
                    data={datas}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardKunjungans;

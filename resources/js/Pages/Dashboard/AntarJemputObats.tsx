import { AntarTableHeader, JemputTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TAntarObat, TJemputObat } from "@/types/antarjemput";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardAntarJemputProps {
    antarobats: TAntarObat[];
    jemputobats: TJemputObat[];
}

const DashboardAntarJemputs: React.FC<DashboardAntarJemputProps> = ({
    antarobats,
    jemputobats
}) => {

    const datasAntar = antarobats.map((item) => ({
        ...item,
        id_kurir: item.id_kurir,
        id_to_online: item.id_to_online,
        kurir: item.kurir.nama,
        pasien: item.transaksiobatonline.konsultasionline.pasien.nama,
        status_antar: item.status,
    }));

    const datasJemput = jemputobats.map((item) => ({
        ...item,
        id_to_online: item.id_to_online,
        pasien: item.transaksiobatonline.konsultasionline.pasien.nama,
        nama_pegambil: item.nama_pengambil,
        status_ambil: item.transaksiobatonline.status_ambil,
    }));

    // User role mappin
    const statusJemputMapping = {
        0: "BELUM",
        1: "SUDAH",
        2: "BATAL",
    };

    const statusAntarMapping = {
        0: "BELUM",
        1: "SUDAH",
    };

    return (
        <>
            <Head title="Antar Jemput Obat" />
            <MainDashboard nav={"Antar Jemput Obat"}>
                <h3 className="font-bold">Table Antar Obat</h3>
                <Table
                    headers={AntarTableHeader}
                    data={datasAntar}
                    statusMapping={statusAntarMapping}
                />
                <h3 className="font-bold">Table Jemput Obat</h3>
                <Table
                    headers={JemputTableHeader}
                    data={datasJemput}
                    statusMapping={statusJemputMapping}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardAntarJemputs;

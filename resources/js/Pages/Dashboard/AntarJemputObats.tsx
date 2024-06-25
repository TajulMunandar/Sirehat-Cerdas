import {
    AntarTableHeader,
    JemputTableHeader,
} from "@/Components/dashboard/components/constants/table.constant";
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
import { TAntarObat, TJemputObat } from "@/types/antarjemput";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";
import ModalApproveAntar from "@/Components/dashboard/components/modal/ModalApproveAntar";

interface DashboardAntarJemputProps {
    antarobats: TAntarObat[];
    jemputobats: TJemputObat[];
}

const DashboardAntarJemputs: React.FC<DashboardAntarJemputProps> = ({
    antarobats,
    jemputobats,
}) => {
    const [processItemId, setProcessItemId] = useState<number | null>(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
    const [isDiapproveModalOpen, setIsDisapproveModalOpen] = useState(false);

    const handleApproval = (id: number) => {
        setProcessItemId(id);
        setIsApproveModalOpen(true);
    };

    const handleConfirmApproval = async () => {
        if (processItemId !== null) {
            try {
                setIsApproveModalOpen(false);
                toast.success("Loan approved successfully");
            } catch (err) {
                toast.error(`Error approving loan: ${err}`);
            }
        }
    };
    const handleConfirmDisapproval = async () => {
        if (processItemId !== null) {
            try {
                setIsApproveModalOpen(false);
                toast.success("Loan approved successfully");
            } catch (err) {
                toast.error(`Error approving loan: ${err}`);
            }
        }
    };

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

    // User role mapping
    const statusJemputMapping = {
        0: "BELUM",
        1: "SUDAH",
        2: "BATAL",
    };

    const statusAntarMapping = {
        0: "BELUM",
        1: "SUDAH",
    };

    const [activeTable, setActiveTable] = useState<"antar" | "jemput">("antar");

    return (
        <>
            <Head title="Antar Jemput Obat" />
            <MainDashboard nav={"Antar Jemput Obat"}>
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold">
                        {activeTable === "antar"
                            ? "Table Antar Obat"
                            : "Table Jemput Obat"}
                    </h3>
                    <div className="flex gap-4">
                        <button
                            className={`font-bold cursor-pointer  ${
                                activeTable === "antar"
                                    ? "text-blue-600 btn btn-primary"
                                    : "text-gray-600"
                            }`}
                            onClick={() => setActiveTable("antar")}
                        >
                            Antar
                        </button>
                        <button
                            className={`font-bold cursor-pointer  ${
                                activeTable === "jemput"
                                    ? "text-blue-600 btn btn-primary"
                                    : "text-gray-600"
                            }`}
                            onClick={() => setActiveTable("jemput")}
                        >
                            Jemput
                        </button>
                    </div>
                </div>

                {activeTable === "antar" ? (
                    <TableNoRow
                        headers={AntarTableHeader}
                        data={datasAntar}
                        statusMapping={statusAntarMapping}
                    />
                ) : (
                    <Table
                        headers={JemputTableHeader}
                        data={datasJemput}
                        statusMapping={statusJemputMapping}
                        onProcessApproval={handleApproval}
                    />
                )}

                <ModalApproveAntar
                    isOpen={isApproveModalOpen}
                    onClose={() => setIsApproveModalOpen(false)}
                    onApprove={handleConfirmApproval}
                    onRejected={handleConfirmDisapproval}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardAntarJemputs;

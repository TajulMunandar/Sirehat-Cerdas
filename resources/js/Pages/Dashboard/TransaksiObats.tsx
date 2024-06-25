import { TransaksiObatTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { ToastContainer, toast } from "react-toastify";
import { TTransaksiObat } from "../../types/transaksiobat";
import Modal from "@/Components/dashboard/components/modal/ModalApprove";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";
import ApprovalConfirmationModal from "@/Components/dashboard/components/modal/ModalApprove";
import ModalApproveAntar from "@/Components/dashboard/components/modal/ModalApproveAntar";

interface DashboardTransaksiObatsProps {
    transaksiobats: TTransaksiObat[];
}

const DashboardTransaksiObats: React.FC<DashboardTransaksiObatsProps> = ({
    transaksiobats,
}) => {
    const { routers }: any = usePage();
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [processItemId, setProcessItemId] = useState<number | null>(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const handleDetail = (id: number) => {
        setProcessItemId(id);
        setIsDetailModalOpen(true);
    };

    const handleApproval = (id: number) => {
        setProcessItemId(id);
        setIsApproveModalOpen(true);
    };

    const { data, setData, post, processing, errors } = useForm({
        nama_obat: "",
        satuan: "",
        jumlah: 0,
        dosis: "",
    });

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

    const closeModal = () => {
        setIsApproveModalOpen(false);
        setIsDetailModalOpen(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    const handleDeleteItem = (id: number) => {
        setDeleteItemId(id);
        setIsDeleteConfirmationOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            if (deleteItemId !== null) {
                await router.delete(`/dashboard/obat/${deleteItemId}`, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error("Error deleting obat");
                        } else {
                            toast.success("Obat deleted successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            }
        } catch (error) {
            toast.error("Error deleting Obat");
            closeModal();
        }
    };

    const datas = transaksiobats.map((item) => ({
        ...item,
        id: item.id,
        id_kunjungan: item.id_kunjungan,
        id_apoteker: item.id_apoteker,
        tanggal: item.kunjungan.registrasi.tanggal,
        dokter: item.kunjungan.dokter.nama,
        pasien: item.kunjungan.registrasi.pasien.nama,
        transaksiobatdetail: item.transaksiobatdetail,
    }));

    return (
        <>
            <Head title="Transaksi Obat" />
            <MainDashboard nav={"Transaksi Obat"}>
                <ToastContainer
                    theme="colored"
                    autoClose={1500}
                    hideProgressBar
                    closeButton={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <h3 className="font-bold">Table Transaksi Obat</h3>

                <Table
                    headers={TransaksiObatTableHeader}
                    data={datas}
                    onDetail={handleDetail}
                    onProcessApproval={handleApproval}
                />

                <Modal
                    title="Detail Obat"
                    isOpen={isDetailModalOpen}
                    onClose={() => setIsDetailModalOpen(false)}
                >
                    {processItemId !== null && (
                        <>
                            <div className="row"></div>
                            <p className="text-black font-semibold dark:text-slate-400">
                                Informasi Berobat:
                            </p>
                            <div className="row flex px-3">
                                <div className="col">
                                    <p>Nama Dokter</p>
                                    <p>Nama Pasien</p>
                                </div>
                                <div className="col text-end">
                                    <p>
                                        {
                                            datas.find(
                                                (item) =>
                                                    item.id === processItemId
                                            )?.dokter
                                        }
                                    </p>
                                    <p>
                                        {
                                            datas.find(
                                                (item) =>
                                                    item.id === processItemId
                                            )?.pasien
                                        }
                                    </p>
                                </div>
                            </div>
                            <p className="text-black font-semibold dark:text-slate-400">
                                Informasi Lengkap Obat:
                            </p>
                            <div className="row flex justify-between px-3">
                                <div className="col">
                                    <p>Nama Obat</p>
                                    {datas
                                        .find(
                                            (item) => item.id === processItemId
                                        )
                                        ?.transaksiobatdetail.map((detail) => (
                                            <p>{detail.obat.nama_obat}</p>
                                        ))}
                                </div>
                                <div className="col text-end">
                                    <p>Keterangan</p>
                                    {datas
                                        .find(
                                            (item) => item.id === processItemId
                                        )
                                        ?.transaksiobatdetail.map((detail) => (
                                            <p>{detail.ket}</p>
                                        ))}
                                </div>
                            </div>
                        </>
                    )}
                </Modal>

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

export default DashboardTransaksiObats;

import { TransaksiObatOnlineTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import { TTransaksiObatOnline } from "../../types/transaksiobatonline";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardTransaksiObatsProps {
    transaksiobatonlines: TTransaksiObatOnline[];
}

const DashboardTransaksiObats: React.FC<DashboardTransaksiObatsProps> = ({ transaksiobatonlines }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const { routers }: any = usePage();

    const { data, setData, post, processing, errors } = useForm({
        nama_obat: "",
        satuan: "",
        jumlah: 0,
        dosis: "",
    });

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    // const openModal = (item?: TTransaksiObat) => {
    //     setIsEditMode(!!item);
    //     setIsModalOpen(true);
    //     if (item) {
    //         setCurrentItemId(item.id as number);
    //         setData({
    //             ...data,
    //             nama_obat: item.nama_obat,
    //             satuan: item.satuan,
    //             jumlah: item.jumlah,
    //             dosis: item.dosis,
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             nama_obat: "",
    //             satuan: "",
    //             jumlah: 0,
    //             dosis: "",
    //         });
    //     }
    // };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setData({
            ...data,
            nama_obat: "",
            satuan: "",
            jumlah: 0,
            dosis: "",
        });
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditMode && currentItemId) {
                await router.put(`/dashboard/obat/${currentItemId}`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Error update obat, Gagal Di Tambahkan"
                            );
                        } else {
                            toast.success("Obat update successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            } else {
                await router.post(`/dashboard/obat`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Gagal Di Tambahkan"
                            );
                        } else {
                            toast.success("Obat add successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            }
            closeModal();
        } catch (error) {
            closeModal();
            toast.error(
                isEditMode ? "Error Updating Data" : "Error Adding Data"
            );
        }
    };

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

    const datas = transaksiobatonlines.map((item) => ({
        ...item,
        id: item.id,
        id_konsul: item.id_konsul,
        id_apoteker: item.id_apoteker,
        dokter: item.konsultasionline.dokter.nama,
        pasien: item.konsultasionline.pasien.nama,
    }));

    return (
        <>
            <Head title="Obat" />
            <MainDashboard nav={"Obat"}>
            <ToastContainer
                    theme="colored"
                    autoClose={1500}
                    hideProgressBar
                    closeButton={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <h3 className="font-bold">Table Obat</h3>
                <Table
                    headers={TransaksiObatOnlineTableHeader}
                    data={datas}
                    onDeleteUser={handleDeleteItem}
                />
                <DeleteConfirmationModal
                    isOpen={isDeleteConfirmationOpen}
                    onClose={() => setIsDeleteConfirmationOpen(false)}
                    onConfirmDelete={handleConfirmDelete}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardTransaksiObats;

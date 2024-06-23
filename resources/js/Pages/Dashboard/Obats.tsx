import { ObatTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import { TObat } from "../../types/obat";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardObatsProps {
    obats: TObat[];
}

const DashboardObats: React.FC<DashboardObatsProps> = ({ obats }) => {
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

    const openModal = (item?: TObat) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id as number);
            setData({
                ...data,
                nama_obat: item.nama_obat,
                satuan: item.satuan,
                jumlah: item.jumlah,
                dosis: item.dosis,
            });
        } else {
            setData({
                ...data,
                nama_obat: "",
                satuan: "",
                jumlah: 0,
                dosis: "",
            });
        }
    };

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
                    headers={ObatTableHeader}
                    data={obats}
                    // statusMapping={roleMapping}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create Obat
                        </button>
                    }
                    onEdit={openModal}
                    onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit Obat" : "Create Obat"}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    footer={
                        <button
                            type="button"
                            className="text-white bg-primary  border border-primary hover:!border-black hover:!bg-black font-medium rounded-lg text-sm px-5 py-2.5 dark:!bg-primary dark:hover:!bg-primary/90 dark:hover:!border-primary/90 transition-colors duration-200"
                            onClick={handleSubmit}
                        >
                            {isEditMode ? "Update" : "Save"}
                        </button>
                    }
                >
                    <form>
                        <div className="mt-5 flex flex-col gap-3">
                            <FormInput
                                type="text"
                                name="nama_obat"
                                onChange={handleChange}
                                value={data.nama_obat}
                                label="Nama Obat"
                                placeholder="Enter Nama Obat"
                            />
                            <FormInput
                                type="text"
                                name="satuan"
                                onChange={handleChange}
                                value={data.satuan}
                                label="Satuan"
                                placeholder="Enter Satuan"
                            />
                            <FormInput
                                type="number"
                                name="jumlah"
                                onChange={handleChange}
                                // value={data.jumlah}
                                label="Jumlah"
                                placeholder="Enter Jumlah"
                            />
                            <FormInput
                                type="text"
                                name="dosis"
                                onChange={handleChange}
                                value={data.dosis}
                                label="Dosis"
                                placeholder="Enter Dosis"
                            />
                        </div>
                    </form>
                </Modal>
                <DeleteConfirmationModal
                    isOpen={isDeleteConfirmationOpen}
                    onClose={() => setIsDeleteConfirmationOpen(false)}
                    onConfirmDelete={handleConfirmDelete}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardObats;

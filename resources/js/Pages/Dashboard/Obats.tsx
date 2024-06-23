import { ObatTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { TObat } from "../../types/obat";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";

interface DashboardObatsProps {
    obats: TObat[];
}

const DashboardObats: React.FC<DashboardObatsProps> = ({ obats }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [formData, setFormData] = useState<TObat>({
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
            setCurrentItemId(item.id_obat as number);
            setFormData(item);
        } else {
            setFormData({
                nama_obat: "",
                satuan: "",
                jumlah: 0,
                dosis: "",
            } as TObat);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setFormData({
            nama_obat: "",
            satuan: "",
            jumlah: 0,
            dosis: "",
        } as TObat);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDeleteItem = (id: number) => {
        setDeleteItemId(id);
        setIsDeleteConfirmationOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (deleteItemId !== null) {
            router.delete(`/dashboard/operator/${deleteItemId}`);
            setIsDeleteConfirmationOpen(false);
            // toast.success("User deleted successfully");
        }
    };

    return (
        <>
            <Head title="Obat" />
            <MainDashboard nav={"Obat"}>
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
                            // onClick={handleSubmit}
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
                                value={formData.nama_obat}
                                label="Nama Obat"
                                placeholder="Enter Nama Obat"
                            />
                            <FormInput
                                type="text"
                                name="satuan"
                                onChange={handleChange}
                                value={formData.satuan}
                                label="Satuan"
                                placeholder="Enter Satuan"
                            />
                            <FormInput
                                type="number"
                                name="jumlah"
                                onChange={handleChange}
                                // value={formData.jumlah}
                                label="Jumlah"
                                placeholder="Enter Jumlah"
                            />
                            <FormInput
                                type="text"
                                name="dosis"
                                onChange={handleChange}
                                value={formData.dosis}
                                label="Dosis"
                                placeholder="Enter Dosis"
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardObats;

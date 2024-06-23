import { DokterTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { TDokter } from "../../types/dokter";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";

interface DashboardDoktersProps {
    dokters: TDokter[];
}

const DashboardDokters: React.FC<DashboardDoktersProps> = ({ dokters }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [formData, setFormData] = useState<TDokter>({
        nama: "",
        no_hp: "",
        foto: "",
        poli: "",
        username: "",
    });

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    const openModal = (item?: TDokter) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id_dokter as number);
            setFormData(item);
        } else {
            setFormData({
                nama: "",
                no_hp: "",
                foto: "",
                poli: "",
                username: "",
            } as TDokter);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setFormData({
            nama: "",
            no_hp: "",
            foto: "",
            poli: "",
            username: "",
        } as TDokter);
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
            <Head title="Dokter" />
            <MainDashboard nav={"Dokter"}>
                <h3 className="font-bold">Table Dokter</h3>
                <Table
                    headers={DokterTableHeader}
                    data={dokters}
                    // statusMapping={roleMapping}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create Dokter
                        </button>
                    }
                    onEdit={openModal}
                    onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit Dokter" : "Create Dokter"}
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
                                name="nama"
                                onChange={handleChange}
                                value={formData.nama}
                                label="Name"
                                placeholder="Enter fullname"
                            />
                            <FormInput
                                type="text"
                                name="no_hp"
                                onChange={handleChange}
                                value={formData.no_hp}
                                label="No HP"
                                placeholder="Enter No HP"
                            />
                            <FormInput
                                type="text"
                                name="foto"
                                onChange={handleChange}
                                value={formData.foto}
                                label="Foto"
                                placeholder="Enter Foto"
                            />
                            <FormInput
                                type="text"
                                name="poli"
                                onChange={handleChange}
                                value={formData.poli}
                                label="Poli"
                                placeholder="Enter Poli"
                            />
                            <FormInput
                                type="text"
                                name="username"
                                onChange={handleChange}
                                value={formData.username}
                                label="Username"
                                placeholder="Enter Username"
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardDokters;

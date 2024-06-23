import { PasienTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { TPasien } from "../../types/pasien";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";

interface DashboardPasiensProps {
    pasiens: TPasien[];
}

const DashboardPasiens: React.FC<DashboardPasiensProps> = ({ pasiens }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [formData, setFormData] = useState<TPasien>({
        nik: "",
        no_kk: "",
        no_bpjs: "",
        nama: "",
        no_hp: "",
        alamat: "",
        username: "",
    });

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    const openModal = (item?: TPasien) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id_pasien as number);
            setFormData(item);
        } else {
            setFormData({
                nik: "",
                no_kk: "",
                no_bpjs: "",
                nama: "",
                no_hp: "",
                alamat: "",
                username: "",
            } as TPasien);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setFormData({
            nik: "",
            no_kk: "",
            no_bpjs: "",
            nama: "",
            no_hp: "",
            alamat: "",
            username: "",
        } as TPasien);
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
            router.delete(`/dashboard/pasien/${deleteItemId}`);
            setIsDeleteConfirmationOpen(false);
            // toast.success("User deleted successfully");
        }
    };

    return (
        <>
            <Head title="Pasien" />
            <MainDashboard nav={"Pasien"}>
                <h3 className="font-bold">Table Pasien</h3>
                <Table
                    headers={PasienTableHeader}
                    data={pasiens}
                    // statusMapping={roleMapping}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create Pasien
                        </button>
                    }
                    onEdit={openModal}
                    onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit Pasien" : "Create Pasien"}
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
                                name="nik"
                                onChange={handleChange}
                                value={formData.nik}
                                label="NIK"
                                placeholder="Enter NIK"
                            />
                            <FormInput
                                type="text"
                                name="no_kk"
                                onChange={handleChange}
                                value={formData.no_kk}
                                label="No KK"
                                placeholder="Enter No KK"
                            />
                            <FormInput
                                type="text"
                                name="no_bpjs"
                                onChange={handleChange}
                                value={formData.no_bpjs}
                                label="No BPJS"
                                placeholder="Enter No BPJS"
                            />
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
                                name="alamat"
                                onChange={handleChange}
                                value={formData.alamat}
                                label="Alamat"
                                placeholder="Enter Alamat"
                            />
                            <FormInput
                                type="text"
                                name="username"
                                onChange={handleChange}
                                value={formData.username}
                                label="Username"
                                placeholder="Enter username"
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardPasiens;

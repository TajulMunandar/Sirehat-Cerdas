import { RegistrasiTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { TRegistrasi, TRegistrasiData } from "../../types/registrasi";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";

interface DashboardRegistrasisProps {
    registrasis: TRegistrasiData[];
}

const DashboardRegistrasis: React.FC<DashboardRegistrasisProps> = ({ registrasis }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [formData, setFormData] = useState<TRegistrasi>({
        status: 0,
        
    });

    const openModal = (item?: TRegistrasi) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id_registrasi as number);
            setFormData(item);
        } else {
            setFormData({
                status: 0,
            } as TRegistrasi);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setFormData({
            status: 0,
        } as TRegistrasi);
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

    const roleMapping = {
        0: "Not Approve",
        1: "Approve",
    };

    return (
        <>
            <Head title="Registrasi" />
            <MainDashboard nav={"Registrasi"}>
                <h3 className="font-bold">Table Registrasi</h3>
                <Table
                    headers={RegistrasiTableHeader}
                    data={registrasis}
                    statusMapping={roleMapping}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create Apoteker
                        </button>
                    }
                    onEdit={openModal}
                    // onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit Registrasi" : "Create Registrasi"}
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
                                type="number"
                                name="status"
                                onChange={handleChange}
                                // value={formData.status}
                                label="Status"
                                placeholder="Enter status"
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardRegistrasis;

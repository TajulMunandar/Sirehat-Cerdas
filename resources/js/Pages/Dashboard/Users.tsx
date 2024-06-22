import { UserTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { TUser } from "../../types/user";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";

const Dashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [formData, setFormData] = useState<TUser>({
        username: "",
        role: 0,
    });

    const openModal = (item?: TUser) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id_user as number);
            setFormData(item);
        } else {
            setFormData({
                username: "",
                role: 0,
            } as TUser);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setFormData({
            username: "",
            role: 0,
        } as TUser);
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

    const dummyData = [
        {
            id: 1,
            username: "johndoe21",
            role: 1,
        },
        {
            id: 1,
            username: "johndoe21",
            role: 4,
        },
    ];

    return (
        <>
            <Head title="Users" />
            <MainDashboard nav={"Users"}>
                <h3 className="font-bold">Table Users</h3>
                <Table
                    headers={UserTableHeader}
                    data={dummyData}
                    // statusMapping={roleMapping}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create User
                        </button>
                    }
                    onEdit={openModal}
                    // onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit User" : "Create User"}
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
                                name="username"
                                onChange={handleChange}
                                value={formData.username}
                                label="Username"
                                placeholder="Enter username"
                            />
                            <FormSelect
                                name="role"
                                label="Role"
                                onChange={handleChange}
                                value={formData.role}
                                items={[
                                    { text: "SuperAdmin", value: "0" },
                                    { text: "Pimpinan", value: "1" },
                                    { text: "Dokter", value: "2" },
                                    { text: "Apoteker", value: "3" },
                                    { text: "Operator", value: "4" },
                                    { text: "Kurir", value: "5" },
                                    { text: "Pasien", value: "6" },
                                ]}
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default Dashboard;

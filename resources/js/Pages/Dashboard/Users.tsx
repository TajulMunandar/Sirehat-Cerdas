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
        nama: "",
        email: "",
        password: "",
        telepon: "",
        nik: "",
        divisi: "",
        is_admin: 0,
        perusahaan: "Nongsa Digital Park",
    });

    const openModal = (item?: TUser) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id_user as number);
            setFormData(item);
        } else {
            setFormData({
                nama: "",
                email: "",
                password: "",
                telepon: "",
                nik: "",
                divisi: "",
                is_admin: 0,
                perusahaan: "Nongsa Digital Park",
            } as TUser);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setFormData({
            nama: "",
            email: "",
            password: "",
            telepon: "",
            nik: "",
            divisi: "",
            is_admin: 0,
            perusahaan: "Nongsa Digital Park",
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
            nama: "John Doe",
            email: "john.doe@example.com",
            telepon: "123-456-7890",
            nik: "123456789",
            divisi: "Sales",
            perusahaan: "Company A",
            is_admin: "Admin",
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
                                name="nama"
                                onChange={handleChange}
                                value={formData.nama}
                                label="Full Name"
                                placeholder="Enter fullname"
                            />
                            <FormInput
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                label="Email"
                                placeholder="Enter email"
                            />
                            <FormInput
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={formData.password}
                                label="Password"
                                placeholder="••••••••"
                            />
                            <FormInput
                                type="text"
                                name="telepon"
                                onChange={handleChange}
                                value={formData.telepon}
                                label="Phone Number"
                                placeholder="Enter phone number"
                            />
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
                                name="divisi"
                                onChange={handleChange}
                                value={formData.divisi}
                                label="Division"
                                placeholder="Enter division"
                            />
                            <FormSelect
                                name="perusahaan"
                                label="Company"
                                onChange={handleChange}
                                value={formData.perusahaan}
                                items={[
                                    {
                                        text: "Nongsa Digital Park",
                                        value: "Nongsa Digital Park",
                                    },
                                    {
                                        text: "Infinite Learning Indonesia",
                                        value: "Infinite Learning Indonesia",
                                    },
                                ]}
                            />
                            <FormSelect
                                name="is_admin"
                                label="Role"
                                onChange={handleChange}
                                value={formData.is_admin}
                                items={[
                                    { text: "User", value: "0" },
                                    { text: "Admin", value: "1" },
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

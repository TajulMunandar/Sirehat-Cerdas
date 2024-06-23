import { UserTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import { TUser, TAUser } from "../../types/user";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardUsersProps {
    users: TUser[];
    usersAdd: TAUser[];
}

const DashboardUsers: React.FC<DashboardUsersProps> = ({ users }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const { routers }: any = usePage();

    const { data, setData, post, processing, errors } = useForm({
        username: "",
        password: "",
        role: 0,
    });

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    const openModal = (item?: TUser) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id as number);
            setData({
                ...data,
                username: item.username,
                role: item.role,
                password: "", // Ini bisa diubah sesuai kebutuhan
            });
        } else {
            setData({
                ...data,
                username: "",
                password: "", // Ini bisa diubah sesuai kebutuhan
                role: 0,
            });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setData({
            username: "",
            password: "", // Tambahkan properti password
            role: 0,
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

    // Create and Update User
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditMode && currentItemId) {
                await router.put(`/dashboard/user/${currentItemId}`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Error update user, Username Already Taken"
                            );
                        } else {
                            toast.success("User update successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            } else {
                await router.post(`/dashboard/user`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Error Add user, Username Already Taken"
                            );
                        } else {
                            toast.success("User add successfully");
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

    // Delete User
    const handleDeleteItem = (id: number) => {
        setDeleteItemId(id);
        console.log(deleteItemId);
        setIsDeleteConfirmationOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            if (deleteItemId !== null) {
                await router.delete(`/dashboard/user/${deleteItemId}`, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error("Error deleting user");
                        } else {
                            toast.success("User deleted successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            }
        } catch (error) {
            toast.error("Error deleting user");
            closeModal();
        }
    };

    // User role mappin
    const roleMapping = {
        0: "SUPER ADMIN",
        1: "PIMPINAN",
        2: "DOKTER",
        3: "APOTEKER",
        4: "OPERATOR",
        5: "KURIR",
        6: "PASIEN",
    };

    return (
        <>
            <Head title="Users" />
            <MainDashboard nav={"Users"}>
                <ToastContainer
                    theme="colored"
                    autoClose={1500}
                    hideProgressBar
                    closeButton={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <h3 className="font-bold">Table Users</h3>
                <Table
                    headers={UserTableHeader}
                    data={users}
                    statusMapping={roleMapping}
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
                    onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit User" : "Create User"}
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
                                name="username"
                                onChange={handleChange}
                                value={data.username}
                                label="Username"
                                placeholder="Enter username"
                            />
                            {!isEditMode && (
                                <FormInput
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    label="Password"
                                    placeholder="Enter password"
                                />
                            )}
                            <FormSelect
                                name="role"
                                label="Role"
                                onChange={handleChange}
                                value={data.role}
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
                <DeleteConfirmationModal
                    isOpen={isDeleteConfirmationOpen}
                    onClose={() => setIsDeleteConfirmationOpen(false)}
                    onConfirmDelete={handleConfirmDelete}
                />
            </MainDashboard>
        </>
    );
};

export default DashboardUsers;

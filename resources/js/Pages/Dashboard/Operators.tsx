import { OperatorTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import { TOperator } from "../../types/operator";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardOperatorsProps {
    operators: TOperator[];
}

const DashboardOperators: React.FC<DashboardOperatorsProps> = ({ operators }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const { routers }: any = usePage();

    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        no_hp: "",
        username: "",
    });

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    const openModal = (item?: TOperator) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id as number);
            setData({
                ...data,
                nama: item.nama,
                no_hp: item.no_hp,
                username: item.username,
            });
        } else {
            setData({
                ...data,
                nama: "",
                no_hp: "",
                username: "",
            });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setData({
            ...data,
            nama: "",
            no_hp: "",
            username: "",
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
                await router.put(`/dashboard/operator/${currentItemId}`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Error update operator, Username Already Taken"
                            );
                        } else {
                            toast.success("Operator update successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            } else {
                await router.post(`/dashboard/operator`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Error Add operator, Username Already Taken"
                            );
                        } else {
                            toast.success("Operator add successfully");
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
                await router.delete(`/dashboard/operator/${deleteItemId}`, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error("Error deleting operator");
                        } else {
                            toast.success("Operator deleted successfully");
                        }
                        setIsDeleteConfirmationOpen(false);
                        closeModal();
                    },
                });
            }
        } catch (error) {
            toast.error("Error deleting operator");
            closeModal();
        }
    };

    return (
        <>
            <Head title="Operator" />
            <MainDashboard nav={"Operator"}>
                <ToastContainer
                    theme="colored"
                    autoClose={1500}
                    hideProgressBar
                    closeButton={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <h3 className="font-bold">Table Operator</h3>
                <Table
                    headers={OperatorTableHeader}
                    data={operators}
                    // statusMapping={roleMapping}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create Operator
                        </button>
                    }
                    onEdit={openModal}
                    onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit Operator" : "Create Operator"}
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
                                name="nama"
                                onChange={handleChange}
                                value={data.nama}
                                label="Name"
                                placeholder="Enter fullname"
                            />
                            <FormInput
                                type="text"
                                name="no_hp"
                                onChange={handleChange}
                                value={data.no_hp}
                                label="No HP"
                                placeholder="Enter No HP"
                            />
                            {!isEditMode && (
                                <FormInput
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    value={data.username}
                                    label="Username"
                                    placeholder="Enter username"
                                />
                            )}
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

export default DashboardOperators;

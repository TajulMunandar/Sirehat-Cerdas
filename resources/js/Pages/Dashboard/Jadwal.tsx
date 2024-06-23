import { JadwalTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TJadwal } from "@/types/jadwal";

interface DashboardApotekersProps {
    jadwals: TJadwal[];
    dokters: { id: number; nama: string }[];
}

const DashboardJadwal: React.FC<DashboardApotekersProps> = ({
    jadwals,
    dokters,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);

    const { data, setData, post, processing, errors } = useForm({
        id_dokter: 0,
        hari: "",
        rentang_waktu: "",
    });

    const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
        useState(false);

    const openModal = (item?: TJadwal) => {
        setIsEditMode(!!item);
        setIsModalOpen(true);
        if (item) {
            setCurrentItemId(item.id as number);
            setData({
                ...data,
                id_dokter: item.id_dokter || 0,
                hari: item.hari || "",
                rentang_waktu: item.rentang_waktu || "", // Ini bisa diubah sesuai kebutuhan
            });
        } else {
            setData({
                ...data,
                id_dokter: 0,
                hari: "",
                rentang_waktu: "",
            });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setData({
            id_dokter: 0,
            hari: "",
            rentang_waktu: "",
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

    const datas = jadwals.map((item) => ({
        ...item,
        ID: item.id,
        dokter: item.dokter.nama,
        hari: item.hari,
        rentang_waktu: item.rentang_waktu,
    }));

    console.log(datas);
    // const dokter: { jadwals: MapJadwals };
    return (
        <>
            <Head title="Apoteker" />
            <MainDashboard nav={"Apoteker"}>
                <h3 className="font-bold">Table Apoteker</h3>
                <Table
                    headers={JadwalTableHeader}
                    data={datas}
                    // statusMapping={namaDokter}
                    createButton={
                        <button
                            type="button"
                            className="flex items-center gap-2 text-white bg-primary hover:bg-black font-medium rounded-lg text-sm px-3 py-2.5 dark:bg-primary dark:hover:bg-primary/90 transition-colors duration-200"
                            onClick={() => openModal()}
                        >
                            <TbPlus size={18} />
                            Create Jadwal
                        </button>
                    }
                    onEdit={openModal}
                    onDeleteUser={handleDeleteItem}
                />

                <Modal
                    title={isEditMode ? "Edit Apoteker" : "Create Apoteker"}
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
                            <FormSelect
                                name="id_dokter"
                                label="Dokter"
                                onChange={handleChange}
                                value={data.id_dokter}
                                items={dokters.map((dokter) => ({
                                    text: dokter.nama,
                                    value: dokter.id.toString(),
                                }))}
                            />
                            <FormInput
                                type="text"
                                name="nama"
                                onChange={handleChange}
                                value={data.hari}
                                label="Name"
                                placeholder="Enter fullname"
                            />
                            <FormInput
                                type="text"
                                name="no_hp"
                                onChange={handleChange}
                                value={data.rentang_waktu}
                                label="No HP"
                                placeholder="Enter No HP"
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardJadwal;

import { JadwalTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/Modal";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TJadwal } from "@/types/jadwal";
import DeleteConfirmationModal from "@/Components/dashboard/components/modal/ModalDelete";

interface DashboardApotekersProps {
    jadwals: TJadwal[];
    dokters: { id: number; nama: string }[];
}

const DashboardJadwal: React.FC<DashboardApotekersProps> = ({
    jadwals,
    dokters,
}) => {
    console.log(dokters[0].id);
    const defaultDokter = dokters.length > 0 ? dokters[0].id : "";
    const defaultHari = "Senin";
    const defaultTime = "07:00";
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);

    const { data, setData, post, processing, errors } = useForm({
        id_dokter: defaultDokter,
        hari: defaultHari,
        waktu_mulai: defaultTime,
        waktu_selesai: defaultTime,
        rentang_waktu: `${defaultTime} - ${defaultTime}`,
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
                id_dokter: item.id_dokter
                    ? item.id_dokter.toString()
                    : defaultDokter,
                hari: item.hari || defaultHari,
                waktu_mulai: item.waktu_mulai || defaultTime,
                waktu_selesai: item.waktu_selesai || defaultTime,
                rentang_waktu: `${item.waktu_mulai || defaultTime} - ${
                    item.waktu_selesai || defaultTime
                }`,
            });
        } else {
            setData({
                ...data,
                id_dokter: defaultDokter,
                hari: defaultHari,
                waktu_mulai: defaultTime,
                waktu_selesai: defaultTime,
                rentang_waktu: `${defaultTime} - ${defaultTime}`,
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
            waktu_mulai: "",
            waktu_selesai: "",
            rentang_waktu: "",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setData((prevData) => {
            const newData = { ...prevData, [name]: value };
            if (name === "waktu_mulai" || name === "waktu_selesai") {
                newData.rentang_waktu = `${newData.waktu_mulai} - ${newData.waktu_selesai}`;
            }
            console.log(newData);
            return newData;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditMode && currentItemId) {
                await router.put(
                    `/dashboard/jadwal-dokter/${currentItemId}`,
                    data,
                    {
                        onSuccess: (data: any) => {
                            console.log(data);
                            if (data.props.status_code == 500) {
                                toast.error(
                                    "Error update jadwal dokter, Jadwal Dokter Gagal Di Ubah"
                                );
                            } else {
                                toast.success(
                                    "Jadwal Dokter update successfully"
                                );
                            }
                            setIsDeleteConfirmationOpen(false);
                            closeModal();
                        },
                    }
                );
            } else {
                await router.post(`/dashboard/jadwal-dokter`, data, {
                    onSuccess: (data: any) => {
                        console.log(data);
                        if (data.props.status_code == 500) {
                            toast.error(
                                "Error Add jadwal dokter, Gagal Di Tambahkan"
                            );
                        } else {
                            toast.success("Jadwal Dokter add successfully");
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
        if (deleteItemId !== null) {
            router.delete(`/dashboard/jadwal-dokter/${deleteItemId}`);
            setIsDeleteConfirmationOpen(false);
            // toast.success("User deleted successfully");
        }
    };

    const generateTimeOptions = (start: any, end: any) => {
        const times = [];
        for (let hour = start; hour <= end; hour++) {
            const timeString = hour.toString().padStart(2, "0") + ":00";
            times.push({ text: timeString, value: timeString });
        }
        return times;
    };

    const timeOptions = generateTimeOptions(7, 18);

    const datas = jadwals.map((item) => ({
        ...item,
        ID: item.id,
        dokter: item.dokter.nama,
        hari: item.hari,
        rentang_waktu: item.rentang_waktu,
    }));

    const Hari = [
        { text: "Senin", value: "Senin" },
        { text: "Selasa", value: "Selasa" },
        { text: "Rabu", value: "Rabu" },
        { text: "Kamis", value: "Kamis" },
        { text: "Jumat", value: "Jumat" },
    ];

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
                            onClick={handleSubmit}
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
                            <FormSelect
                                name="hari"
                                label="Hari"
                                onChange={handleChange}
                                value={data.hari}
                                items={Hari}
                            />
                            <FormSelect
                                name="waktu_mulai"
                                label="Waktu Mulai"
                                onChange={handleChange}
                                value={data.waktu_mulai}
                                items={timeOptions}
                            />
                            <FormSelect
                                name="waktu_selesai"
                                label="Waktu Selesai"
                                onChange={handleChange}
                                value={data.waktu_selesai}
                                items={timeOptions}
                            />
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardJadwal;

import { KunjunganTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, usePage, useForm } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/ModalKunjungan";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TEKunjungan, TKunjungan } from "@/types/kunjungan";

interface DashboardKunjungansProps {
    kunjungans: TKunjungan[];
    obats: { id: number; nama_obat: string }[];
}

interface FormGroup {
    id_obat: string;
    ket: string;
}

const DashboardKunjungans: React.FC<DashboardKunjungansProps> = ({
    kunjungans,
    obats,
}) => {
    const initialFormGroups = obats.length
        ? [{ id_obat: obats[0].id.toString(), ket: "3 X 1" }]
        : [{ id_obat: "", ket: "" }];

    const [formGroups, setFormGroups] = useState<FormGroup[]>(initialFormGroups);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [showAdditionalForm, setShowAdditionalForm] = useState(false);
    const datas = kunjungans.map((item) => ({
        ...item,
        id: item.id,
        id_pasien: item.id_pasien,
        pasien: item.pasien.nama,
        tanggal: item.tanggal,
        keluhan: item.keluhan,
    }));

    const { data, setData, post, processing, errors } = useForm({
        diagnosa: "",
        tindakan: "1",
    });

    const openModal = (item?: TEKunjungan) => {
        setIsModalOpen(true);
        setIsEditMode(!!item);
        if (item) {
            setCurrentItemId(item.id as number);
            setData({
                diagnosa: item.diagnosa || "",
                tindakan: item.tindakan.toString() || "1",
            });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditMode(false);
        setCurrentItemId(null);
        setData({
            diagnosa: "",
            tindakan: "1",
        });
        setFormGroups([{ id_obat: obats[0].id.toString(), ket: "3 X 1" }]);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index: number | null = null
    ) => {
        const { name, value } = e.target;

        if (index === null) {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));

            if (name === "tindakan" && value === "0") {
                setShowAdditionalForm(true);
            } else if (name === "tindakan") {
                setShowAdditionalForm(false);
            }
        } else {
            const newFormGroups = [...formGroups];
            newFormGroups[index][name as keyof FormGroup] = value;
            setFormGroups(newFormGroups);
        }
    };

    const addFormGroup = () => {
        setFormGroups([...formGroups, { id_obat: obats[0].id.toString(), ket: "3 X 1" }]);
    };

    const removeFormGroup = (index: number) => {
        if (formGroups.length > 1) {
            const newFormGroups = formGroups.filter((_, i) => i !== index);
            setFormGroups(newFormGroups);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const kunjunganData = {
            ...data,
            obat_diagnosa: formGroups,
        };

        const formData = new FormData();

        Object.keys(kunjunganData).forEach((key) => {
            if (key === "obat_diagnosa") {
                kunjunganData.obat_diagnosa.forEach((item, index) => {
                    Object.keys(item).forEach((subKey) => {
                        formData.append(`obat_diagnosa[${index}][${subKey}]`, item[subKey as keyof FormGroup] as string);
                    });
                });
            } else {
                formData.append(key, kunjunganData[key as keyof typeof kunjunganData] as string);
            }
        });

        if (isEditMode && currentItemId) {
            formData.append("_method", "put");
            console.log(currentItemId)
            await router.post(
                `/dashboard/kunjungan/${currentItemId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onSuccess: (data: any) => {
                        if (data.props.status_code === 500) {
                            toast.error(
                                "Error update kunjungan, Username Already Taken"
                            );
                        } else {
                            toast.success("kunjungan update successfully");
                        }
                        closeModal();
                    },
                }
            )
        }

        closeModal();
    };

    return (
        <>
            <Head title="Kunjungan" />
            <MainDashboard nav={"Kunjungan"}>
                <ToastContainer
                    theme="colored"
                    autoClose={1500}
                    hideProgressBar
                    closeButton={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
                <h3 className="font-bold">Table Kunjungan</h3>
                <Table
                    headers={KunjunganTableHeader}
                    data={datas}
                    onEdit={openModal}
                />

                <Modal
                    title="Medical Action"
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    footer={
                        <button
                            type="button"
                            className="text-white bg-primary border border-primary hover:!border-black hover:!bg-black font-medium rounded-lg text-sm px-5 py-2.5 dark:!bg-primary dark:hover:!bg-primary/90 dark:hover:!border-primary/90 transition-colors duration-200"
                            onClick={handleSubmit}
                            disabled={processing}
                        >
                            {isEditMode ? "Update" : "Create"}
                        </button>
                    }
                >
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <FormInput
                                type="text"
                                name="diagnosa"
                                onChange={(e) => handleChange(e)}
                                value={data.diagnosa}
                                label="Diagnosa"
                                placeholder="Enter Diagnosa"
                            />
                            <FormSelect
                                name="tindakan"
                                label="Tindakan"
                                onChange={(e) => handleChange(e)}
                                value={data.tindakan}
                                items={[
                                    { text: "Rujukan", value: "1" },
                                    { text: "Pengobatan", value: "0" },
                                ]}
                            />
                            {showAdditionalForm && (
                                <>
                                    {formGroups.map((formGroup, index) => (
                                        <div
                                            className="flex items-center"
                                            key={index}
                                        >
                                            <div className="col col-6 mr-2">
                                                <FormSelect
                                                    name="id_obat"
                                                    label="Obat"
                                                    onChange={(e) =>
                                                        handleChange(e, index)
                                                    }
                                                    value={formGroup.id_obat}
                                                    items={obats.map((obat) => ({
                                                        text: obat.nama_obat,
                                                        value: obat.id.toString(),
                                                    }))}
                                                />
                                            </div>
                                            <div className="col col-5 mr-2">
                                                <FormSelect
                                                    name="ket"
                                                    label="Keterangan"
                                                    onChange={(e) => handleChange(e, index)}
                                                    value={formGroup.ket}
                                                    items={[
                                                        { text: "3 X 1", value: "3 X 1" },
                                                        { text: "2 X 1", value: "2 X 1" },
                                                        { text: "1 X 1", value: "1 X 1" },
                                                    ]}
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger text-white btn-sm mt-4"
                                                    onClick={() =>
                                                        removeFormGroup(index)
                                                    }
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="btn btn-primary text-white btn-md mt-4"
                                        onClick={addFormGroup}
                                    >
                                        +
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                </Modal>
            </MainDashboard>
        </>
    );
};

export default DashboardKunjungans;

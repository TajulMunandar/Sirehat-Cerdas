import { KunjunganTableHeader } from "@/Components/dashboard/components/constants/table.constant";
import Table from "@/Components/dashboard/components/table/Table";
import MainDashboard from "@/Components/dashboard/layout/Main";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { TbPlus } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@/Components/dashboard/components/modal/ModalKunjungan";
import FormInput from "@/Components/dashboard/components/form/Input";
import FormSelect from "@/Components/dashboard/components/form/Select";
import { TEKunjungan, TKunjungan } from "@/types/kunjungan";

interface DashboardKunjungansProps {
    kunjungans: TKunjungan[];
}

interface FormGroup {
    id_obat: string;
    diagnosa: string;
}

const DashboardKunjungans: React.FC<DashboardKunjungansProps> = ({
    kunjungans,
}) => {
    const [formGroups, setFormGroups] = useState([
        { id_obat: "", diagnosa: "" },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentItemId, setCurrentItemId] = useState<number | null>(null);
    const [showAdditionalForm, setShowAdditionalForm] = useState(false);
    const datas = kunjungans.map((item) => ({
        ...item,
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
            tindakan: "",
        });
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
        setFormGroups([...formGroups, { id_obat: "", diagnosa: "" }]);
    };

    const removeFormGroup = (index: number) => {
        if (formGroups.length > 1) {
            const newFormGroups = formGroups.filter((_, i) => i !== index);
            setFormGroups(newFormGroups);
        }
    };

    return (
        <>
            <Head title="Kunjungan" />
            <MainDashboard nav={"Kunjungan"}>
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
                            className="text-white bg-primary  border border-primary hover:!border-black hover:!bg-black font-medium rounded-lg text-sm px-5 py-2.5 dark:!bg-primary dark:hover:!bg-primary/90 dark:hover:!border-primary/90 transition-colors duration-200"
                            // onClick={handleSubmit}
                        >
                            Update
                        </button>
                    }
                >
                    <form>
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
                                                    items={[
                                                        {
                                                            text: "Rujukan",
                                                            value: "1",
                                                        },
                                                        {
                                                            text: "Pengobatan",
                                                            value: "0",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div className="col col-5 mr-2">
                                                <FormInput
                                                    type="text"
                                                    name="diagnosa"
                                                    onChange={(e) =>
                                                        handleChange(e, index)
                                                    }
                                                    value={formGroup.diagnosa}
                                                    label="Diagnosa"
                                                    placeholder="Enter Diagnosa"
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

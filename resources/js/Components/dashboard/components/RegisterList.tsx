import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mamang5 from "../../../../images/tentang/chef/5.jpg";
import { TRegistrasi } from "@/types/registrasi";

interface DashboardRegistrasisProps {
    patient: TRegistrasi[];
}

const RegisterList: React.FC<DashboardRegistrasisProps> = ({ patient }) => {
    const data = patient.map((item) => ({
        ...item,
        id: item.id,
        poli: item.poli,
        keluhan: item.keluhan,
        tanggal: item.tanggal,
        nama: item.nama,
        nik: item.nik,
        kk: item.kk,
        bpjs: item.bpjs,
        alamat: item.alamat,
        foto: item.foto,
        dokter: item.nama_dokter,
    }));

    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [selectedPatient, setSelectedPatient] = useState(data[0]);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = (id: number) => {
        setDropdownOpen(dropdownOpen === id.toString() ? null : id.toString());
    };

    const selectPatient = (patient: any) => {
        setSelectedPatient(patient);
    };

    return (
        <>
            <div className="row">
                <div className="col col-lg-4">
                    <p>Total Pasies: 828</p>
                    <div className="overflow-y-auto whitespace-nowrap h-screen p-2">
                        {data.map((patient) => (
                            <div
                                key={patient.id}
                                className={`card border-0 mb-3 cursor-pointer ${
                                    selectedPatient.id === patient.id
                                        ? "!bg-[#1580EB]"
                                        : ""
                                } transition-all duration-300`}
                                onClick={() => selectPatient(patient)}
                            >
                                <div className="card-body">
                                    <div className="row flex items-center justify-start transition-colors !text-[#e5e5e5] duration-200">
                                        <div className="col-4">
                                            <img
                                                src={patient.foto}
                                                className="h-20 w-20 rounded-full object-cover"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className="col-7 justify-start text-left items-start">
                                            <h5
                                                className={`font-semibold mb-2 ${
                                                    selectedPatient.id ===
                                                    patient.id
                                                        ? "text-white"
                                                        : ""
                                                } truncate`}
                                            >
                                                {patient.nama}
                                            </h5>

                                            <p
                                                className={`m-0 text-sm  ${
                                                    selectedPatient.id ===
                                                    patient.id
                                                        ? "text-white"
                                                        : "text-gray-400"
                                                } truncate`}
                                            >
                                                {patient.alamat}
                                            </p>
                                        </div>
                                        <div
                                            className="col-1 px-2  relative"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleDropdown(patient.id);
                                            }}
                                            ref={dropdownRef}
                                        >
                                            <button
                                                className={`absolute bottom-7 left-4 text-xl ${
                                                    selectedPatient.id ===
                                                    patient.id
                                                        ? "text-white"
                                                        : "text-black"
                                                }`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={[
                                                        "fas",
                                                        "ellipsis-vertical",
                                                    ]}
                                                />
                                                {dropdownOpen ===
                                                    patient.id.toString() && (
                                                    <ul className="absolute z-10 p-0 right-0 w-32 bg-white border-gray-200 rounded-lg shadow-lg">
                                                        <li>
                                                            <a
                                                                className="block pt-3 pl-3 hover:bg-gray-100"
                                                                href="#"
                                                            >
                                                                <div className="flex text-sm text-emerald-500">
                                                                    <FontAwesomeIcon
                                                                        icon={[
                                                                            "fas",
                                                                            "check",
                                                                        ]}
                                                                        className="mr-2"
                                                                    />
                                                                    <p>
                                                                        Approve
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="block pt-3 pl-3 hover:bg-gray-100"
                                                                href="#"
                                                            >
                                                                <div className="flex text-sm text-red-400">
                                                                    <FontAwesomeIcon
                                                                        icon={[
                                                                            "fas",
                                                                            "x",
                                                                        ]}
                                                                        className="mr-2"
                                                                    />
                                                                    <p>
                                                                        Disapprove
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col col-lg-8">
                    <div className="card border-0 mb-3 h-screen">
                        <div className="card-body h-screen p-4">
                            <div className="row flex">
                                <div className="col col-lg-5">
                                    <img
                                        src={selectedPatient.foto}
                                        alt=""
                                        className="rounded-3xl h-[430px] w-[100%] object-cover"
                                    />
                                </div>
                                <div className="col col-lg-7 pt-4">
                                    <h2 className="font-bold">
                                        Tentang Pasien
                                    </h2>

                                    <hr className="bg-gray-400 border-none py-0.5" />
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <p>Nama</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.nama}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <p>NIK</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.nik}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <p>NO KK</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.kk}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <p>NO BPJS</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.bpjs}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <p>ALAMAT</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.alamat}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row flex mt-4">
                                <div className="col">
                                    <div className="row pl-5">
                                        <div className="col">
                                            <h4 className="font-semibold">
                                                Keterangan Registrasi
                                            </h4>
                                        </div>
                                        <div className="col text-end">
                                            <p className="font-semibold">
                                                {selectedPatient.tanggal}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pl-5">
                                        <hr className="bg-gray-400 border-none py-0.5 px-2" />
                                    </div>
                                    <div className="row mt-4 pl-5">
                                        <div className="row mb-3">
                                            <div className="col-4">
                                                <p>Keluhan</p>
                                            </div>
                                            <div className="col">
                                                <p>
                                                    : {selectedPatient.keluhan}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-4">
                                                <p>Poli Tujuan</p>
                                            </div>
                                            <div className="col">
                                                <p>: {selectedPatient.poli}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <p>Dokter</p>
                                            </div>
                                            <div className="col">
                                                <p>
                                                    :{" "}
                                                    {
                                                        selectedPatient.dokter // selectedPatient.doctor
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterList;

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mamang5 from "../../../../images/tentang/chef/5.jpg";

const patients = [
    {
        id: "217125423874238",
        name: "Pasien nama",
        location: "Punteut",
        avatar: Mamang5,
        nik: "12153215645318",
        noKk: "12153215645318",
        noBpjs: "12153215645318",
        address: "Punteut",
        registrationInfo: {
            time: "07:00 Wib",
            date: "2 Juni 2022",
            complaint: "Perut terasa nyeri disertai kepala pusing",
            poli: "Umum",
            doctor: "DR. Julia Fitriani, M.KED (PED)",
        },
    },
    {
        id: "217125423874228",
        name: "Pasien asep",
        location: "Punteut",
        avatar: Mamang5,
        nik: "12153215645318",
        noKk: "12153215645318",
        noBpjs: "12153215645318",
        address: "Punteut",
        registrationInfo: {
            time: "07:00 Wib",
            date: "2 Juni 2022",
            complaint: "Perut terasa nyeri disertai kepala pusing",
            poli: "Umum",
            doctor: "DR. Julia Fitriani, M.KED (PED)",
        },
    },
    // Add more patient objects as needed
];

export default function RegisterList() {
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [selectedPatient, setSelectedPatient] = useState(patients[0]);

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

    const toggleDropdown = (id: string) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
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
                        {patients.map((patient) => (
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
                                                src={patient.avatar}
                                                className="h-20 w-20 rounded-full object-cover"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className="col-7 justify-start text-left items-start">
                                            <h4
                                                className={`font-semibold mb-2 ${
                                                    selectedPatient.id ===
                                                    patient.id
                                                        ? "text-white"
                                                        : ""
                                                }`}
                                            >
                                                {patient.name}
                                            </h4>
                                            <p
                                                className={`text-sm m-0 ${
                                                    selectedPatient.id ===
                                                    patient.id
                                                        ? "text-white"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                <span>{patient.id}</span>
                                            </p>
                                            <p
                                                className={`m-0 text-sm ${
                                                    selectedPatient.id ===
                                                    patient.id
                                                        ? "text-white"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                <span>{patient.location}</span>
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
                                                    patient.id && (
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
                                        src={selectedPatient.avatar}
                                        alt=""
                                        className="rounded-3xl h-[100%] w-[100%] object-cover"
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
                                            <p>: {selectedPatient.name}</p>
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
                                            <p>: {selectedPatient.noKk}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <p>NO BPJS</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.noBpjs}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <p>ALAMAT</p>
                                        </div>
                                        <div className="col">
                                            <p>: {selectedPatient.address}</p>
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
                                                {
                                                    selectedPatient
                                                        .registrationInfo.time
                                                }{" "}
                                                |{" "}
                                                {
                                                    selectedPatient
                                                        .registrationInfo.date
                                                }
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
                                                    :{" "}
                                                    {
                                                        selectedPatient
                                                            .registrationInfo
                                                            .complaint
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-4">
                                                <p>Poli Tujuan</p>
                                            </div>
                                            <div className="col">
                                                <p>
                                                    :{" "}
                                                    {
                                                        selectedPatient
                                                            .registrationInfo
                                                            .poli
                                                    }
                                                </p>
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
                                                        selectedPatient
                                                            .registrationInfo
                                                            .doctor
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
}

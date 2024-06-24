import React, { useState } from "react";
import shield from "../../../images/tentang/chef/shield.png";
import Location from "../../../images/tentang/chef/Location.png";
import Location2 from "../../../images/tentang/chef/Location2.png";
import Mamang from "../../../images/tentang/chef/1.jpg";
import Mamang2 from "../../../images/tentang/chef/2.jpg";
import Mamang3 from "../../../images/tentang/chef/3.jpg";
import Mamang4 from "../../../images/tentang/chef/4.jpg";
import Mamang5 from "../../../images/tentang/chef/5.jpg";
import Toko from "../../../images/tentang/chef/6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctors: React.FC = () => {
    const [activeDoctorIndex, setActiveDoctorIndex] = useState<number | null>(
        0
    );

    const doctors = [
        {
            name: "Dr. Indra Cengkir Tarihoran",
            experience: "15 Tahun",
            location: "Blang Cut",
            image: shield,
            profileImage: Mamang,
            restaurantImage: Toko,
            specialties: ["Poli Gigi"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Dr. Tirtas Alfarizy Simatupang",
            experience: "7 Tahun",
            location: "Blang Cut",
            image: shield,
            profileImage: Mamang2,
            restaurantImage: Toko,
            specialties: ["Poli Umum"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Dr. Suci Pramaditha",
            experience: "18 Tahun",
            location: "Jakarta, Indonesia",
            image: shield,
            profileImage: Mamang5,
            restaurantImage: Toko,
            specialties: ["Poli Penyakit Tidak Menular"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Dr. Mulyadi Lamkaruna",
            experience: "10 Tahun",
            location: "Blang Cut",
            image: shield,
            profileImage: Mamang3,
            restaurantImage: Toko,
            specialties: ["Poli Anak"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Dr. Sintia Falevi",
            experience: "13 Tahun",
            location: "Jakarta, Indonesia",
            image: shield,
            profileImage: Mamang4,
            restaurantImage: Toko,
            specialties: ["Poli Anak dan Ibu"],
            locationImage: Location,
            buttonText: "View Profile",
        },
    ];

    const toggleDoctorDetails = (index: number) => {
        setActiveDoctorIndex(activeDoctorIndex === index ? null : index);
    };

    return (
        <div className="container py-5 mt-5">
            {/* Container pertama untuk menampilkan detail dokter */}
            <div className="row">
                <div className="col-6">
                    {activeDoctorIndex !== null && (
                        <div className="position-absolute items-center">
                            <div className="card card-icons items-center shadow-md">
                                <div className="card-body mt-4">
                                    <img
                                        src={doctors[activeDoctorIndex].image}
                                        alt=""
                                        className="rounded-full w-20 h-20 mb-3 ml-3"
                                    />
                                    <h5 className="card-title text-center">
                                        {doctors[activeDoctorIndex].experience}
                                    </h5>
                                    <p className="card-text mt-0 text-center">
                                        Pengalaman
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeDoctorIndex !== null && (
                        <div className="col">
                            <img
                                src={doctors[activeDoctorIndex].profileImage}
                                alt=""
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    {activeDoctorIndex !== null && (
                        <div className="col card-restaurants-chef">
                            <div className="card !rounded-[24px] shadow-lg">
                                <div className="card-body p-3 flex items-center">
                                    <div className="col col-lg-4">
                                        <img
                                            src={
                                                doctors[activeDoctorIndex]
                                                    .restaurantImage
                                            }
                                            className="img-rest-chef"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col ml-0">
                                        <p className="mt-3 mb-1 text-gray-600">
                                            <span>Dokter di Puskesmas:</span>
                                        </p>
                                        <p className="fw-bold">
                                            <span>
                                                {
                                                    doctors[activeDoctorIndex]
                                                        .location
                                                }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Container kedua untuk dua baris dengan dua button masing-masing */}

                <div className="col ">
                    {doctors.map((doctor, index) => (
                        <div
                            className={`card border-0 d-flex p-4 !rounded-[28px] mb-3 transition-colors duration-200 ${
                                activeDoctorIndex === index
                                    ? "!bg-[#1580EB] !text-[#e5e5e5]"
                                    : "!bg-slate-100 !text-black"
                            }`}
                            key={index}
                        >
                            <div className="row flex items-center pb-1">
                                <div className="col-6">
                                    <p
                                        className={`mb-2 text-md ${
                                            activeDoctorIndex === index
                                                ? "!text-[#93C4F4]"
                                                : "!text-black"
                                        }`}
                                    >
                                        <span>
                                            {doctor.specialties.join(", ")}
                                        </span>
                                    </p>
                                    <h3
                                        className={`font-semibold ${
                                            activeDoctorIndex === index
                                                ? "!text-[#FFFF]"
                                                : "!text-black"
                                        }`}
                                    >
                                        {doctor.name}
                                    </h3>
                                    <div className="flex">
                                        <img
                                            src={`${
                                                activeDoctorIndex === index
                                                    ? Location
                                                    : Location2
                                            }`}
                                            alt=""
                                            className="mr-2"
                                        />{" "}
                                        <span
                                            className={`${
                                                activeDoctorIndex === index
                                                    ? "!text-[#93C4F4]"
                                                    : "!text-black"
                                            }`}
                                        >
                                            {doctor.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6 text-end">
                                    <button
                                        className="mr-"
                                        onClick={() =>
                                            toggleDoctorDetails(index)
                                        }
                                    >
                                        Profile Detail
                                        <FontAwesomeIcon
                                            icon={["fas", "chevron-right"]}
                                            size="1x"
                                            className="ml-2 mr-2"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;

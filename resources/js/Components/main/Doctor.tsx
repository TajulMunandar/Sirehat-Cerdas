import React, { useState } from "react";
import shield from "../../../images/tentang/chef/shield.png";
import Location from "../../../images/tentang/chef/Location.png";
import Location2 from "../../../images/tentang/chef/Location2.png";
import Mamang from "../../../images/tentang/chef/mamang.png";
import Toko from "../../../images/tentang/chef/toko5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctors: React.FC = () => {
    const [activeDoctorIndex, setActiveDoctorIndex] = useState<number | null>(
        0
    );

    const doctors = [
        {
            name: "Phoenix Satcheup",
            experience: "12 Tahun",
            location: "Blang Cut",
            image: shield,
            profileImage: Mamang,
            restaurantImage: Toko,
            specialties: ["Pizza"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Bakso",
            experience: "15 Tahun",
            location: "Jakarta, Indonesia",
            image: shield,
            profileImage: Mamang,
            restaurantImage: Toko,
            specialties: ["Burger"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Bakso",
            experience: "15 Tahun",
            location: "Jakarta, Indonesia",
            image: shield,
            profileImage: Mamang,
            restaurantImage: Toko,
            specialties: ["Burger"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Bakso",
            experience: "15 Tahun",
            location: "Jakarta, Indonesia",
            image: shield,
            profileImage: Mamang,
            restaurantImage: Toko,
            specialties: ["Burger"],
            locationImage: Location,
            buttonText: "View Profile",
        },
        {
            name: "Bakso",
            experience: "15 Tahun",
            location: "Jakarta, Indonesia",
            image: shield,
            profileImage: Mamang,
            restaurantImage: Toko,
            specialties: ["Burger"],
            locationImage: Location,
            buttonText: "View Profile",
        },
    ];

    const toggleDoctorDetails = (index: number) => {
        setActiveDoctorIndex(activeDoctorIndex === index ? null : index);
    };

    return (
        <div className="container py-5 my-5">
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

                <div className="col py-3">
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
                                        className={`mb-2 text-lg ${
                                            activeDoctorIndex === index
                                                ? "!text-[#93C4F4]"
                                                : "!text-black"
                                        }`}
                                    >
                                        <span className="cost">
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

import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import img from "../../../images/section1/img.png";
import img2 from "../../../images/section2/img2.png";
import icon1 from "../../../images/section1/icon1.png";
import icon21 from "../../../images/section3/icon1.png";
import icon11 from "../../../images/section2/icon1.png";
import icon2 from "../../../images/section1/icon2.png";
import icon12 from "../../../images/section2/icon2.png";
import icon3 from "../../../images/section1/icon3.png";
import icon4 from "../../../images/section1/icon4.png";
import icon32 from "../../../images/section3/icon2.png";
import icon34 from "../../../images/section3/icon4.png";
import icon35 from "../../../images/section3/icon5.png";

import group from "../../../images/section4/group1.png";
import group2 from "../../../images/section5/img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@mui/material/Button";
import { Link } from "@inertiajs/react";
import Accordion from "@/Components/main/Accordion";

export default function LandingPage(): any {
    const page = {
        props: {
            url: "/", // Ganti dengan path yang sesuai jika diperlukan
        },
    };

    return (
        <GuestLayout>
            <Head title="Landing Page" />
            <Header page={page}></Header>
            <div className="container py-20">
                <div className="row mb-20">
                    <div className="col col-lg-6">
                        <h1 className="text-6xl font-semibold mb-4 leading-tight">
                            Kami Peduli Dengan
                            <br />
                            <span className="text-[#1580EB]">
                                Keluarga Anda
                            </span>
                        </h1>
                    </div>
                    <div className="col col-lg-5">
                        <p className="text-lg mt-24 leading-loose text-gray-500">
                            Periksakan Kesehatan Keluarga Anda dengan Tim Dokter
                            Profesional dan Fasilitas Modern yang Lengkap
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mb-36">
                    <div className="w-1/4  !pt-32">
                        <h2 className="text-2xl font-bold text-[#1580EB] mb-5">
                            Keunggulan Kami
                        </h2>
                        <ul className="list-none m-2 p-0">
                            <li className="mb-5 flex items-center font-semibold">
                                <img
                                    src={icon1}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Pendaftaran Online
                            </li>
                            <li className="mb-5 flex items-center font-semibold">
                                <img
                                    src={icon2}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Konsultasi Online
                            </li>
                            <li className="mb-5 flex items-center font-semibold">
                                <img
                                    src={icon3}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Antar-Jemput Obat
                            </li>
                            <li className="mb-5 flex items-center font-semibold">
                                <img
                                    src={icon4}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Pengingat Kesehatan
                            </li>
                        </ul>
                    </div>
                    <div className="relative bg-blue-500">
                        <img src={img} alt="Doctors" className="w-full" />
                    </div>
                </div>

                <div className="flex justify-center mb-56">
                    <div className="relative w-1/2 mr-10">
                        <img src={img2} alt="Doctors" className="w-full" />
                        <div className="absolute rounded-lg top-[350px] left-[290px] overflow-hidden shadow bg-white w-[350px] py-4">
                            <div className="px-6 py-2">
                                <div className="font-semibold text-lg mb-1">
                                    Dokter Tersedia
                                </div>
                                <p className="text-gray-400 text-base">
                                    Pilih Dokter
                                </p>
                            </div>
                            <div className="flex px-6 items-center">
                                <div>
                                    <div className="relative inline-block mr-5">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                                        />
                                        <span className="absolute bottom-0 right-0 block w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-semibold mb-3">
                                        Asep Vapor, MD
                                    </span>
                                    <br />
                                    <span className="font-light text-gray-400">
                                        Dokter Gigi
                                    </span>
                                </div>
                            </div>
                            <div className="flex px-6 items-center mt-4">
                                <div>
                                    <div className="relative inline-block mr-5">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                                        />
                                        <span className="absolute bottom-0 right-0 block w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-semibold mb-3">
                                        Asep Vapor
                                    </span>
                                    <br />
                                    <span className="font-light text-gray-400">
                                        Dokter Gigi
                                    </span>
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <Link href="/tentang">
                                    <Button
                                        className="!w-full !py-4 !mt-2 !font-bold !text-black !rounded-xl !bg-[#E3F2FF] hover:!bg-[#3473cc] hover:!text-[#ffffff] transition-colors duration-200"
                                        style={{
                                            textTransform: "capitalize",
                                            fontFamily: "Poppins",
                                        }}
                                    >
                                        Cari Dokter
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pt-16">
                        <p className="text-md text-[#1580EB] font-semibold ">
                            Solusi Cepat
                        </p>
                        <h2 className="text-4xl font-semibold text-black mb-5 leading-relaxed">
                            Janji Temu Mudah di Hari <br /> yang Sama atau
                            Berikutnya
                        </h2>
                        <p className=" text-xl text-black">
                            Mudah Membuat Janji Temu dengan Dokter Terbaik Kami
                        </p>
                        <p className=" text-xl text-black">
                            untuk keluarga Anda di hari yang sama atau
                            berikutnya.
                        </p>
                        <p className=" text-black flex items-center mt-16">
                            <span>
                                <img
                                    src={icon11}
                                    alt="Doctors"
                                    className="mr-5"
                                />
                            </span>
                            Mudah, Cepat dan Fleksible
                        </p>
                        <p className=" text-black flex items-center mt-4">
                            <span>
                                <img
                                    src={icon12}
                                    alt="Doctors"
                                    className="mr-5"
                                />
                            </span>
                            Layanan Janji Temu Berkualitas Terbaik
                        </p>
                        <Link
                            href="/login"
                            className="text-md decoration-transparent"
                        >
                            <Button
                                className="!px-20 !py-6 !mt-11 !font-bold !text-white !rounded-xl !bg-[#1580EB] hover:!bg-[#3473cc] transition-colors duration-200"
                                style={{
                                    textTransform: "capitalize",
                                    fontFamily: "Poppins",
                                }}
                            >
                                Buat Janji
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mb-36">
                    <div className="flex justify-center mt-20">
                        <div className="w-1/2">
                            <p className="text-md font-semibold text-[#1580EB] ">
                                Layanan Kami
                            </p>
                            <h2 className="text-4xl font-semibold text-black mb-5 leading-relaxed">
                                Layanan Berkualitas Terbaik <br /> untuk
                                Keluarga Anda
                            </h2>
                        </div>
                        <div className="w-1/2">
                            <h2 className="text-lg text-gray-500 mb-5 leading-relaxed mt-28">
                                Tim dokter terbaik kami dengan fasilitas lengkap
                                dan modern <br /> akan menjaga kesehatan Anda
                                atau memulihkan Anda dari sakit.
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-4">
                            <div className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4">
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon21} alt="" className="mr-8" />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Umum
                                    </span>
                                </div>
                                <p className="mt-5 text-gray-500 mb-10">
                                    Dokter-dokter berlisensi kami memberikan
                                    perawatan medis terbaik untuk membantu
                                    menjaga Anda tetap sehat.
                                </p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold "
                                >
                                    <span className="flex items-center">
                                        <span className="mr-3">
                                            Selengkapnya
                                        </span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="rounded-3xl overflow-hidden shadow bg-[#1580EB] w-[350px] px-6 py-4">
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon32} alt="" className="mr-8" />
                                    <span className="text-[#fff] font-bold text-xl">
                                        Poli PTM
                                    </span>
                                </div>
                                <p className="mt-5 text-[#fff] mb-12">
                                    Pelayanan perawatan penyakit tidak menular
                                    tercanggih oleh dokter dan fasilitas terbaik
                                    di daerah ini terjadi di Lifecare
                                </p>
                                <Link
                                    href="/layanan"
                                    className="text-[#fff] decoration-transparent font-semibold "
                                >
                                    <span className="flex items-center">
                                        <span className="mr-3">
                                            Selengkapnya
                                        </span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4">
                                <div className="flex px-6 py-2 items-center">
                                    <FontAwesomeIcon
                                        icon={["fas", "child"]}
                                        size="5x"
                                        className="mr-10 text-[#1580EB]"
                                    />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Anak
                                    </span>
                                </div>
                                <p className="mt-5 text-gray-500 mb-14">
                                    Dokter anak kami berdedikasi untuk
                                    memberikan perawatan kesehatan yang terpusat
                                    pada pasien anak-anak
                                </p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold "
                                >
                                    <span className="flex items-center">
                                        <span className="mr-3">
                                            Selengkapnya
                                        </span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 justify-center">
                        <div className="col col-lg-4">
                            <div className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4">
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon34} alt="" className="mr-8" />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Gigi
                                    </span>
                                </div>
                                <p className="mt-5 text-gray-500 mb-10">
                                    Bicaralah dengan dokter gigi kami untuk
                                    menjaga penampilan gigi Anda tetap indah
                                    setiap hari.
                                </p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold "
                                >
                                    <span className="flex items-center">
                                        <span className="mr-3">
                                            Selengkapnya
                                        </span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4">
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon35} alt="" className="mr-8" />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Ibu & Anak
                                    </span>
                                </div>
                                <p className="mt-5 text-gray-500 mb-10 leading-[2.5]">
                                    Tersedia perawatan kesehatan terbaik untuk
                                    ibu dan anak
                                </p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold "
                                >
                                    <span className="flex items-center">
                                        <span className="mr-3">
                                            Selengkapnya
                                        </span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-36">
                    <div className="relative w-1/2 mr-40">
                        <img src={group} alt="Doctors" className="w-full" />
                    </div>
                    <div className="w-1/2 pt-16">
                        <p className="text-md text-[#1580EB] font-semibold ">
                            Testimony
                        </p>
                        <h2 className="text-4xl font-semibold text-black  leading-relaxed">
                            Pasien Memberi Ulasan <br /> Tentang Kami
                        </h2>
                        <p className="text-xl text-gray-800 leading-loose w-full mb-10">
                            Pengalaman yang luar biasa! Saya tidak bisa cukup
                            berterima kasih kepada Puskesmas Blang Cut.
                        </p>

                        <p className="text-black font-bold text-xl mb-0">
                            Olivia Skyler
                        </p>
                        <p className="text-gray-800">Bank Staff</p>
                    </div>
                </div>

                <div className="mb-36">
                    <p className="text-md text-[#1580EB] font-semibold text-center">
                        Tim Dokter
                    </p>
                    <h2 className="text-4xl font-semibold text-center leading-relaxed mb-5">
                        Temui <span className="text-[#1580EB] ">Spesialis</span>{" "}
                        Kami
                    </h2>
                    <div className="row">
                        <div className="col">
                            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-3">
                                <img
                                    src="https://via.placeholder.com/400x200"
                                    alt="Card image"
                                    className="rounded-lg"
                                />
                                <div className="px-6 pt-4 text-center">
                                    <div className="font-bold text-xl mb-2">
                                        Nama
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Posisi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-3">
                                <img
                                    src="https://via.placeholder.com/400x200"
                                    alt="Card image"
                                    className="rounded-lg"
                                />
                                <div className="px-6 pt-4 text-center">
                                    <div className="font-bold text-xl mb-2">
                                        Nama
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Posisi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-3">
                                <img
                                    src="https://via.placeholder.com/400x200"
                                    alt="Card image"
                                    className="rounded-lg"
                                />
                                <div className="px-6 pt-4 text-center">
                                    <div className="font-bold text-xl mb-2">
                                        Nama
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Posisi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-3">
                                <img
                                    src="https://via.placeholder.com/400x200"
                                    alt="Card image"
                                    className="rounded-lg"
                                />
                                <div className="px-6 pt-4 text-center">
                                    <div className="font-bold text-xl mb-2">
                                        Nama
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Posisi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-1/2  px-10">
                        <p className="text-md text-[#1580EB] font-semibold ">
                            Frequently Asked Question
                        </p>
                        <h2 className="text-4xl font-semibold text-black  leading-relaxed mb-20">
                            Kami{" "}
                            <span className="text-[#1580EB]">Melindungi</span>{" "}
                            Anda
                        </h2>

                        <Accordion></Accordion>
                    </div>
                    <div className="relative w-1/2">
                        <img src={group2} alt="Doctors" className="w-full" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </GuestLayout>
    );
}

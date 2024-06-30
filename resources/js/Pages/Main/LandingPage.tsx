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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "@mui/material/Button";
import { Link } from "@inertiajs/react";
import Accordion from "@/Components/main/Accordion";
import { TDokter } from "@/types/dokter";

interface LandingProps {
    dokter: TDokter[];
    dokters: TDokter[];
}



const LandingPage: React.FC<LandingProps> = ({ dokters, dokter }) => {
    const page = {
        props: {
            url: "/", // Ganti dengan path yang sesuai jika diperlukan
        },
    };

    const data = dokters.map((item) => ({
        ...item,
        id: item.id,
        nama: item.nama,
        poli: item.poli,
        foto: item.foto,
        foto_url: item.foto_url,
    }));

    console.log(data);

    const datas = dokter.map((item) => ({
        ...item,
        id: item.id,
        nama: item.nama,
        poli: item.poli,
        foto: item.foto,
        foto_url: item.foto_url,
    }));

    return (
        <GuestLayout>
            <Head title="Landing Page" />
            <Header page={page}></Header>
            <div className="container py-20">
                <div className="row mb-20">
                    <div className="col col-lg-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl font-semibold mb-4 leading-tight"
                        >
                            Kami Peduli Dengan
                            <br />
                            <span className="text-[#1580EB]">Keluarga Anda</span>
                        </motion.h1>
                    </div>
                    <div className="col col-lg-5">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg mt-24 leading-loose text-gray-500"
                        >
                            Periksakan Kesehatan Keluarga Anda dengan Tim Dokter
                            Profesional dan Fasilitas Modern yang Lengkap
                        </motion.p>
                    </div>
                </div>

                <div className="flex justify-center mb-36">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-1/4 !pt-32"
                    >
                        <h2 className="text-2xl font-bold text-[#1580EB] mb-5">
                            Keunggulan Kami
                        </h2>
                        <ul className="list-none m-2 p-0">
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-5 flex items-center font-semibold"
                            >
                                <img
                                    src={icon1}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Pendaftaran Online
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mb-5 flex items-center font-semibold"
                            >
                                <img
                                    src={icon2}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Konsultasi Online
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="mb-5 flex items-center font-semibold"
                            >
                                <img
                                    src={icon3}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Antar-Jemput Obat
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.710 }}
                                className="mb-5 flex items-center font-semibold"
                            >
                                <img
                                    src={icon4}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="mr-2"
                                />
                                Pengingat Kesehatan
                            </motion.li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative bg-blue-500"
                    >
                        <img src={img} alt="Doctors" className="w-full" />
                    </motion.div>
                </div>

                <div className="flex justify-center mb-56">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-1/2 mr-10"
                    >
                        <img src={img2} alt="Doctors" className="w-full" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute rounded-lg top-[350px] left-[290px] overflow-hidden shadow bg-white w-[350px] py-4"
                        >
                            <div className="px-6 py-2">
                                <div className="font-semibold text-lg mb-1">
                                    Dokter Tersedia
                                </div>
                                <p className="text-gray-400 text-base">Pilih Dokter</p>
                            </div>
                            {datas.slice(0, 2).map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="flex px-6 items-center mt-2"
                                >
                                    <div className="relative inline-block mr-5">
                                        <img
                                            src={item.foto_url}
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                                        />
                                        <span className="absolute bottom-0 right-0 block w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                                    </div>
                                    <div>
                                        <span className="font-semibold mb-3">
                                            {item.nama}
                                        </span>
                                        <br />
                                        <span className="font-light text-gray-400">
                                            Poli {item.poli}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="px-6 pt-4 pb-2"
                            >
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
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-1/2 pt-16"
                    >
                        <p className="text-md text-[#1580EB] font-semibold">
                            Solusi Cepat
                        </p>
                        <h2 className="text-4xl font-semibold text-black mb-5 leading-relaxed">
                            Janji Temu Mudah di Hari <br /> yang Sama atau Berikutnya
                        </h2>
                        <p className="text-xl text-black">
                            Mudah Membuat Janji Temu dengan Dokter Terbaik Kami untuk
                            keluarga Anda di hari yang sama atau berikutnya.
                        </p>
                        <p className="text-xl text-black flex items-center mt-16">
                            <span>
                                <img src={icon11} alt="Doctors" className="mr-5" />
                            </span>
                            Mudah, Cepat dan Fleksible
                        </p>
                        <p className="text-xl text-black flex items-center mt-4">
                            <span>
                                <img src={icon12} alt="Doctors" className="mr-5" />
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
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-36"
                >
                    <div className="flex justify-center mt-20">
                        <div className="w-1/2">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-md font-semibold text-[#1580EB]"
                            >
                                Layanan Kami
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-4xl font-semibold text-black mb-5 leading-relaxed"
                            >
                                Layanan Berkualitas Terbaik <br /> untuk Keluarga Anda
                            </motion.h2>
                        </div>
                        <div className="w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-lg text-gray-500 mb-5 leading-relaxed mt-28"
                            >
                                Tim dokter terbaik kami dengan fasilitas lengkap dan
                                modern <br /> akan menjaga kesehatan Anda atau
                                memulihkan Anda dari sakit.
                            </motion.h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4"
                            >
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon21} alt="" className="mr-8" />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Umum
                                    </span>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="mt-5 text-gray-500 mb-10"
                                >
                                    Dokter-dokter berlisensi kami memberikan perawatan
                                    medis terbaik untuk membantu menjaga Anda tetap
                                    sehat.
                                </motion.p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                        className="flex items-center"
                                    >
                                        <span className="mr-3">Selengkapnya</span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="col col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="rounded-3xl overflow-hidden shadow bg-[#1580EB] w-[350px] px-6 py-4"
                            >
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon32} alt="" className="mr-8" />
                                    <span className="text-[#fff] font-bold text-xl">
                                        Poli PTM
                                    </span>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.9 }}
                                    className="mt-5 text-[#fff] mb-12"
                                >
                                    Pelayanan perawatan penyakit tidak menular
                                    tercanggih oleh dokter dan fasilitas terbaik di
                                    daerah ini terjadi di Lifecare
                                </motion.p>
                                <Link
                                    href="/layanan"
                                    className="text-[#fff] decoration-transparent font-semibold"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.0 }}
                                        className="flex items-center"
                                    >
                                        <span className="mr-3">Selengkapnya</span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="col col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4"
                            >
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
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    className="mt-5 text-gray-500 mb-14"
                                >
                                    Dokter anak kami berdedikasi untuk memberikan
                                    perawatan kesehatan yang terpusat pada pasien
                                    anak-anak
                                </motion.p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.3 }}
                                        className="flex items-center"
                                    >
                                        <span className="mr-3">Selengkapnya</span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="row mt-5 justify-center">
                        <div className="col col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                                className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4"
                            >
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon34} alt="" className="mr-8" />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Gigi
                                    </span>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 }}
                                    className="mt-5 text-gray-500 mb-10"
                                >
                                    Bicaralah dengan dokter gigi kami untuk menjaga
                                    penampilan gigi Anda tetap indah setiap hari.
                                </motion.p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.6 }}
                                        className="flex items-center"
                                    >
                                        <span className="mr-3">Selengkapnya</span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                        <div className="col col-lg-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.7 }}
                                className="rounded-3xl overflow-hidden shadow bg-white w-[350px] px-6 py-4"
                            >
                                <div className="flex px-6 py-2 items-center">
                                    <img src={icon35} alt="" className="mr-8" />
                                    <span className="text-[#1580EB] font-bold text-xl">
                                        Poli Ibu & Anak
                                    </span>
                                </div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.8 }}
                                    className="mt-5 text-gray-500 mb-10 leading-[2.5]"
                                >
                                    Tersedia perawatan kesehatan terbaik untuk ibu
                                    dan anak
                                </motion.p>
                                <Link
                                    href="/layanan"
                                    className="text-blue-500 decoration-transparent font-semibold"
                                >
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.9 }}
                                        className="flex items-center"
                                    >
                                        <span className="mr-3">Selengkapnya</span>
                                        <FontAwesomeIcon
                                            icon={["fas", "arrow-right"]}
                                            size="1x"
                                            className="mr-4"
                                        />
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-36"
                >
                    <div className="relative w-1/2 mr-40">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            src={group}
                            alt="Doctors"
                            className="w-full"
                        />
                    </div>
                    <div className="w-1/2 pt-16">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-md text-[#1580EB] font-semibold"
                        >
                            Testimony
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-4xl font-semibold text-black leading-relaxed"
                        >
                            Pasien Memberi Ulasan <br /> Tentang Kami
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-xl text-gray-800 leading-loose w-full mb-10"
                        >
                            Pengalaman yang luar biasa! Saya tidak bisa cukup
                            berterima kasih kepada Puskesmas Blang Cut.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-black font-bold text-xl mb-0"
                        >
                            Olivia Skyler
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="text-gray-800"
                        >
                            Bank Staff
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-36"
                >
                    <p className="text-md text-[#1580EB] font-semibold text-center">
                        Tim Dokter
                    </p>
                    <h2 className="text-4xl font-semibold text-center leading-relaxed mb-5">
                        Temui <span className="text-[#1580EB] ">Spesialis</span> Kami
                    </h2>
                    <div className="row">
                        {data.map((item) => (
                            <div key={item.id} className="col">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-3"
                                >
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        src={item.foto_url}
                                        alt="Card image"
                                        className="rounded-lg"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="px-2 pt-4 text-center"
                                    >
                                        <div className="font-bold text-md mb-2">
                                            {item.nama}
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            Poli {item.poli}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-1/2 px-10"
                    >
                        <p className="text-md text-[#1580EB] font-semibold">
                            Frequently Asked Question
                        </p>
                        <h2 className="text-4xl font-semibold text-black leading-relaxed mb-20">
                            Kami{" "}
                            <span className="text-[#1580EB]">Melindungi</span> Anda
                        </h2>
                        {""}
                        <Accordion></Accordion>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-1/2"
                    >
                        <img
                            src={group2}
                            alt="Doctors"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </div>
            <Footer></Footer>
        </GuestLayout>
    );
};

export default LandingPage;

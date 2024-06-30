import { useEffect } from "react";
import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../css/style.css";
import "../../../css/main.css";

import Umum from "../../../images/section3/icon1.png";
import Praktik from "../../../images/section3/icon4.png";
import Bg from "../../../images/tentang/chef/bg2.jpg";

import Doctors from "@/Components/main/Doctor";
import DoctorList from "@/Components/main/DoctorList";
import { TDokter } from "@/types/dokter";

interface TentangProps {
    dokter: TDokter[];
    dokters: TDokter[];
}

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const TentangPage: React.FC<TentangProps> = ({ dokter }) => {
    const page = {
        props: {
            url: "/tentang",
        },
    };

    const data = dokter.map((item) => ({
        ...item,
        id: item.id,
        nama: item.nama,
        poli: item.poli,
        foto: item.foto,
        foto_url: item.foto_url,
    }));

    const [refAboutTitle, inViewAboutTitle] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    // Inisialisasi controls dengan useAnimation
    const controlsAboutTitle = useAnimation();

    useEffect(() => {
        if (inViewAboutTitle) {
            controlsAboutTitle.start("visible");
        } else {
            controlsAboutTitle.start("hidden");
        }
    }, [controlsAboutTitle, inViewAboutTitle]);

    const controlsAboutContent = useAnimation();
    const [refAboutContent, inViewAboutContent] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inViewAboutContent) {
            controlsAboutContent.start("visible");
        } else {
            controlsAboutContent.start("hidden");
        }
    }, [controlsAboutContent, inViewAboutContent]);

    // Animasi untuk bagian Gambar
    const controlsImage = useAnimation();
    const [refImage, inViewImage] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inViewImage) {
            controlsImage.start("visible");
        } else {
            controlsImage.start("hidden");
        }
    }, [controlsImage, inViewImage]);

    // Inisialisasi controls untuk judul "Tim Dokter"
    const controlsDoctors = useAnimation();
    const [refDoctors, inViewDoctors] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inViewDoctors) {
            controlsDoctors.start("visible");
        } else {
            controlsDoctors.start("hidden");
        }
    }, [controlsDoctors, inViewDoctors]);

    // Inisialisasi controls untuk DoctorList
    const controlsDoctorList = useAnimation();
    const [refDoctorList, inViewDoctorList] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    useEffect(() => {
        if (inViewDoctorList) {
            controlsDoctorList.start("visible");
        } else {
            controlsDoctorList.start("hidden");
        }
    }, [controlsDoctorList, inViewDoctorList]);

    return (
        <GuestLayout>
            <Head title="Tentang" />
            <Header page={page} />
            <motion.section
                id="hero"
                className="hero section"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
            >
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>
                                Puskesmas <span>Blang Cut</span>
                            </h1>
                            <p>
                                Periksakan Kesehatan Keluarga Anda dengan Tim
                                Dokter Profesional dan Fasilitas Modern yang
                                Lengkap
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
            <section id="about" className="about section">
                <div className="container section-title" ref={refAboutTitle}>
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        animate={controlsAboutTitle}
                        transition={{ duration: 0.5 }}
                    >
                        Tentang
                    </motion.h2>
                    <p>
                        <span>Sekilas Tentang Puskesmas</span>{" "}
                        <span className="description-title">Blang Cut</span>
                    </p>
                </div>

                <div className="container" ref={refAboutContent}>
                    <div className="row gy-3">
                        <div className="col-lg-6">
                            <motion.img
                                src={Bg}
                                alt=""
                                className="img-fluid"
                                variants={fadeUp}
                                initial="hidden"
                                animate={controlsAboutTitle}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                ref={refAboutTitle}
                            />
                        </div>

                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="about-content ps-0 ps-lg-3">
                                <motion.h3 variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.2 }}>
                                    Desa
                                </motion.h3>
                                <motion.p variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.3 }} className="fst-italic text-justify">
                                    Puskesmas Blang Cut, salah satu dari dua
                                    puskesmas di Desa Punteut, Kota Lhokseumawe,
                                    berperan penting dalam meningkatkan
                                    kesehatan masyarakat. Terletak di Provinsi
                                    Aceh, provinsi terbesar di Indonesia dengan
                                    luas wilayah 57.365,57 km², Kota Lhokseumawe
                                    adalah salah satu dari 5 kota di Aceh yang
                                    terdiri dari beberapa desa, termasuk Desa
                                    Punteut.
                                </motion.p>
                                <motion.ul variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.4 }}>
                                    <motion.li variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.5 }}>
                                        <i className="bi bi-diagram-3">
                                            <img
                                                src={Praktik}
                                                alt=""
                                                className="w-10"
                                            />
                                        </i>
                                        <div>
                                            <motion.h4 variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.6 }}>Pemeriksaan Rutin</motion.h4>
                                            <motion.p variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.7 }}>Puskesmas ini melayani pemeriksaan kesehatan umum untuk masyarakat.</motion.p>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.8 }}>
                                        <i className="bi bi-fullscreen-exit">
                                            <img
                                                src={Umum}
                                                alt=""
                                                className="w-10"
                                            />
                                        </i>
                                        <div>
                                            <motion.h4 variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 0.9 }}>Pengobatan Umum</motion.h4>
                                            <motion.p variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 1.0 }}>Meliputi diagnosis dan pengobatan berbagai penyakit umum.</motion.p>
                                        </div>
                                    </motion.li>
                                    <motion.li variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 1.1 }}>
                                        <i className="bi bi-fullscreen-exit">
                                            <FontAwesomeIcon icon={["fas", "house-medical"]} size="1x" />
                                        </i>
                                        <div>
                                            <motion.h4 variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 1.2 }}>Poliklinik Spesialis</motion.h4>
                                            <motion.p variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 1.3 }}>Terdapat 6 poli yang melayani masyarakat.</motion.p>
                                        </div>
                                    </motion.li>
                                </motion.ul>
                                <motion.p variants={fadeUp} initial="hidden" animate={controlsAboutContent} transition={{ duration: 0.5, delay: 1.4 }} className="text-justify">
                                    Puskesmas Blang Cut tidak hanya fokus pada
                                    layanan kesehatan primer tetapi juga
                                    menyediakan upaya kesehatan wajib seperti
                                    Kesehatan Ibu dan Anak (KIA), Kelahiran
                                    Berencana (KB), dan kesehatan lingkungan.
                                    Selain itu, puskesmas ini juga mengatasi
                                    masalah kesehatan lokal melalui upaya
                                    kesehatan pengembangan seperti kesehatan
                                    gigi, kesehatan jiwa, kesehatan mata,
                                    pengobatan tradisional, dan perawatan
                                    masyarakat.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-5" ref={refDoctors}>
                <motion.p
                    className="text-md text-[#1580EB] font-semibold text-center mb-0"
                    variants={fadeUp}
                    initial="hidden"
                    animate={controlsDoctors}
                    transition={{ duration: 0.5 }}
                >
                    Tim Dokter
                </motion.p>
                <motion.h2
                    className="text-4xl font-semibold text-center leading-relaxed mb-5"
                    variants={fadeUp}
                    initial="hidden"
                    animate={controlsDoctors}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Temui{" "}
                    <span className="text-[#1580EB] ">Spesialis</span> Kami
                </motion.h2>
                <Doctors />
            </div>
            <DoctorList dokters={data} />
            <Footer />
        </GuestLayout>
    );
};

export default TentangPage;

import { useEffect, useRef } from "react";
import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../../css/style.css";

import Bg from "../../../images/layanan/Bg.jpg";
import Bg2 from "../../../images/layanan/Bg4.jpg";
import Bg3 from "../../../images/layanan/bg3.jpg";
import Bg5 from "../../../images/layanan/bg5.jpg";
import Bg4 from "../../../images/layanan/bg2.jpg";

import CustomCarousel from "@/Components/main/Caraousel";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const fadeZoom = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const slideIn = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export default function LayananPage(): any {
    const page = {
        props: {
            url: "/layanan",
        },
    };

    // Refs and controls for animations
    const controls1 = useAnimation();
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });
    const animation1 = useRef(false);

    useEffect(() => {
        if (inView1) {
            controls1.start("visible");
            animation1.current = true;
        } else {
            if (animation1.current) {
                controls1.start("hidden");
                animation1.current = false;
            }
        }
    }, [controls1, inView1]);

    const controls2 = useAnimation();
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });
    const animation2 = useRef(false);

    useEffect(() => {
        if (inView2) {
            controls2.start("visible");
            animation2.current = true;
        } else {
            if (animation2.current) {
                controls2.start("hidden");
                animation2.current = false;
            }
        }
    }, [controls2, inView2]);

    const controls3 = useAnimation();
    const [ref3, inView3] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });
    const animation3 = useRef(false);

    useEffect(() => {
        if (inView3) {
            controls3.start("visible");
            animation3.current = true;
        } else {
            if (animation3.current) {
                controls3.start("hidden");
                animation3.current = false;
            }
        }
    }, [controls3, inView3]);

    const controls4 = useAnimation();
    const [ref4, inView4] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });
    const animation4 = useRef(false);

    useEffect(() => {
        if (inView4) {
            controls4.start("visible");
            animation4.current = true;
        } else {
            if (animation4.current) {
                controls4.start("hidden");
                animation4.current = false;
            }
        }
    }, [controls4, inView4]);

    const controls5 = useAnimation();
    const [ref5, inView5] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });
    const animation5 = useRef(false);

    useEffect(() => {
        if (inView5) {
            controls5.start("visible");
            animation5.current = true;
        } else {
            if (animation5.current) {
                controls5.start("hidden");
                animation5.current = false;
            }
        }
    }, [controls5, inView5]);

    return (
        <GuestLayout>
            <Head title="Layanan" />
            <Header page={page}></Header>
            <CustomCarousel></CustomCarousel>
            <motion.div
                className="mt-20"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
            >
                <p className="text-md text-[#1580EB] font-semibold text-center mb-0">
                    MANFAAT SPESIAL BUAT KAMU
                </p>
                <h2 className="text-4xl font-semibold text-center leading-relaxed mb-5">
                    PELAYANAN
                </h2>
            </motion.div>
            <motion.section
                id="about"
                className="about section mb-20"
                initial="hidden"
                animate={controls1}
                variants={staggerContainer}
                ref={ref1}
            >
                <motion.div
                    className="container"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className="row gx-0">
                        <motion.div
                            className="col-lg-6 d-flex align-items-center"
                            variants={fadeZoom}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={Bg} className="img-fluid" alt="" />
                        </motion.div>
                        <motion.div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            variants={slideIn}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="content">
                                <h3>Poli Umum</h3>
                                <h2>Poli Umum</h2>
                                <p>
                                    Dokter-dokter berlisensi kami memberikan
                                    perawatan medis terbaik untuk membantu
                                    menjaga Anda tetap sehat.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
            <motion.section
                id="about"
                className="about section mb-20"
                initial="hidden"
                animate={controls2}
                variants={staggerContainer}
                ref={ref2}
            >
                <motion.div
                    className="container"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className="row gx-0">
                        <motion.div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            variants={fadeUp}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="content">
                                <h3>Poli Gigi</h3>
                                <h2>Poli Gigi</h2>
                                <p>
                                    Bicaralah dengan dokter gigi kami untuk
                                    menjaga penampilan gigi Anda tetap indah
                                    setiap hari.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-lg-6 d-flex align-items-center"
                            variants={fadeZoom}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={Bg2} className="img-fluid" alt="" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
            <motion.section
                id="about"
                className="about section mb-20"
                initial="hidden"
                animate={controls3}
                variants={staggerContainer}
                ref={ref3}
            >
                <motion.div
                    className="container"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className="row gx-0">
                        <motion.div
                            className="col-lg-6 d-flex align-items-center"
                            variants={fadeZoom}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={Bg3} className="img-fluid" alt="" />
                        </motion.div>
                        <motion.div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            variants={slideIn}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="content">
                                <h3>Poli Anak</h3>
                                <h2>Poli Anak</h2>
                                <p>
                                    Dokter anak kami berdedikasi untuk
                                    memberikan perawatan kesehatan yang terpusat
                                    pada pasien anak-anak
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
            <motion.section
                id="about"
                className="about section mb-20"
                initial="hidden"
                animate={controls4}
                variants={staggerContainer}
                ref={ref4}
            >
                <motion.div
                    className="container"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className="row gx-0">
                        <motion.div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            variants={slideIn}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="content">
                                <h3>Poli Ibu Dan Anak</h3>
                                <h2>Poli Ibu Dan Anak</h2>
                                <p>
                                    Tersedia perawatan kesehatan terbaik untuk
                                    ibu dan anak
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-lg-6 d-flex align-items-center"
                            variants={fadeZoom}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={Bg5} className="img-fluid" alt="" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
            <motion.section
                id="about"
                className="about section mb-20"
                initial="hidden"
                animate={controls5}
                variants={staggerContainer}
                ref={ref5}
            >
                <motion.div
                    className="container"
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                >
                    <div className="row gx-0">
                        <motion.div
                            className="col-lg-6 d-flex align-items-center"
                            variants={fadeZoom}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={Bg4} className="img-fluid" alt="" />
                        </motion.div>
                        <motion.div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            variants={slideIn}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="content">
                                <h3>Poli Penyakit Tidak Menular</h3>
                                <h2>Poli Penyakit Tidak Menular</h2>
                                <p>
                                    Pelayanan perawatan penyakit tidak menular
                                    tercanggih oleh dokter dan fasilitas terbaik
                                    di daerah ini terjadi di Lifecare
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
            <Footer></Footer>
        </GuestLayout>
    );
}

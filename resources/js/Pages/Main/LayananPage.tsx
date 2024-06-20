import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

import "../../../css/style.css";

import Bg from "../../../images/layanan/Bg.jpg";
import Bg2 from "../../../images/layanan/Bg4.jpg";
import Bg3 from "../../../images/layanan/bg3.jpg";
import Bg5 from "../../../images/layanan/bg5.jpg";
import Bg4 from "../../../images/layanan/bg2.jpg";

import CustomCarousel from "@/Components/main/Caraousel";

export default function LayananPage(): any {
    const page = {
        props: {
            url: "/layanan",
        },
    };

    return (
        <GuestLayout>
            <Head title="Layanan" />
            <Header page={page}></Header>
            <CustomCarousel></CustomCarousel>
            <div className="mt-20">
                <p className="text-md text-[#1580EB] font-semibold text-center mb-0">
                    MANFAAT SPESIAL BUAT KAMU
                </p>
                <h2 className="text-4xl font-semibold text-center leading-relaxed mb-5">
                    PELAYANAN
                </h2>
            </div>
            <section id="about" className="about section mb-20">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={Bg} className="img-fluid" alt="" />
                        </div>
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="content ">
                                <h3>Poli Umum</h3>
                                <h2>Poli Umum</h2>
                                <p>
                                    Dokter-dokter berlisensi kami memberikan
                                    perawatan medis terbaik untuk membantu
                                    menjaga Anda tetap sehat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about section mb-20">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="content ">
                                <h3>Poli Gigi</h3>
                                <h2>Poli Gigi</h2>
                                <p>
                                    Bicaralah dengan dokter gigi kami untuk
                                    menjaga penampilan gigi Anda tetap indah
                                    setiap hari.
                                </p>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={Bg2} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about section mb-20">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={Bg3} className="img-fluid" alt="" />
                        </div>
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="content ">
                                <h3>Poli Anak</h3>
                                <h2>Poli Anak</h2>
                                <p>
                                    Dokter anak kami berdedikasi untuk
                                    memberikan perawatan kesehatan yang terpusat
                                    pada pasien anak-anak
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about section mb-20">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="content ">
                                <h3>Poli Ibu Dan Anak</h3>
                                <h2>Poli Ibu Dan Anak</h2>
                                <p>
                                    Tersedia perawatan kesehatan terbaik untuk
                                    ibu dan anak
                                </p>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={Bg5} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about section mb-20">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                        <div
                            className="col-lg-6 d-flex align-items-center"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={Bg4} className="img-fluid" alt="" />
                        </div>
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="content ">
                                <h3>Poli Penyakit Tidak Menular</h3>
                                <h2>Poli Penyakit Tidak Menular</h2>
                                <p>
                                    Pelayanan perawatan penyakit tidak menular
                                    tercanggih oleh dokter dan fasilitas terbaik
                                    di daerah ini terjadi di Lifecare
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </GuestLayout>
    );
}

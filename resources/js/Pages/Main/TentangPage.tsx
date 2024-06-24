import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
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
    }));

    return (
        <GuestLayout>
            <Head title="Tentang" />
            <Header page={page}></Header>
            <section id="hero" className="hero section">
                <div className="container">
                    <div className="row gy-4">
                        <div
                            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
                            data-aos="zoom-out"
                        >
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
            </section>
            <section id="about" className="about section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Tentang</h2>
                    <p>
                        <span>Sekilas Tentang Puskesmas</span>{" "}
                        <span className="description-title">Blang Cut</span>
                    </p>
                </div>

                <div className="container">
                    <div className="row gy-3">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img src={Bg} alt="" className="img-fluid " />
                        </div>

                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="about-content ps-0 ps-lg-3">
                                <h3>Des</h3>
                                <p className="fst-italic text-justify">
                                    Puskesmas Blang Cut, salah satu dari dua
                                    puskesmas di Desa Punteut, Kota Lhokseumawe,
                                    berperan penting dalam meningkatkan
                                    kesehatan masyarakat. Terletak di Provinsi
                                    Aceh, provinsi terbesar di Indonesia dengan
                                    luas wilayah 57.365,57 km², Kota Lhokseumawe
                                    adalah salah satu dari 5 kota di Aceh yang
                                    terdiri dari beberapa desa, termasuk Desa
                                    Punteut.
                                </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-diagram-3">
                                            <img
                                                src={Praktik}
                                                alt=""
                                                className="w-10 "
                                            />
                                        </i>
                                        <div>
                                            <h4>Pemeriksaan Rutin</h4>
                                            <p>
                                                Puskesmas ini melayani
                                                pemeriksaan kesehatan umum untuk
                                                masyarakat.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bi bi-fullscreen-exit">
                                            <img
                                                src={Umum}
                                                alt=""
                                                className="w-10 "
                                            />
                                        </i>
                                        <div>
                                            <h4>Pengobatan Umum</h4>
                                            <p>
                                                Meliputi diagnosis dan
                                                pengobatan berbagai penyakit
                                                umum.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="bi bi-fullscreen-exit">
                                            <FontAwesomeIcon
                                                icon={["fas", "house-medical"]}
                                                size="1x"
                                            />
                                        </i>
                                        <div>
                                            <h4>Poliklinik Spesialis</h4>
                                            <p>
                                                Terdapat 6 poli yang melayani
                                                masyarakat.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <p className="text-justify">
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
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-5">
                <p className="text-md text-[#1580EB] font-semibold text-center mb-0">
                    Tim Dokter
                </p>
                <h2 className="text-4xl font-semibold text-center leading-relaxed mb-5">
                    Temui <span className="text-[#1580EB] ">Spesialis</span>{" "}
                    Kami
                </h2>
                <Doctors></Doctors>
            </div>
            <DoctorList dokters={data}></DoctorList>
            <Footer></Footer>
        </GuestLayout>
    );
};

export default TentangPage;

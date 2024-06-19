import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

import "../../../css/style.css";
import "../../../css/main.css";

import Doctors from "@/Components/main/Doctor";

export default function LandingPage(): any {
    const page = {
        props: {
            url: "/tentang",
        },
    };

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
                                We are team of talented designers making
                                websites with Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container  my-5">
                <p className="text-md text-[#1580EB] font-semibold text-center mb-0">
                    Tim Dokter
                </p>
                <h2 className="text-4xl font-semibold text-center leading-relaxed mb-5">
                    Temui <span className="text-[#1580EB] ">Spesialis</span>{" "}
                    Kami
                </h2>
                <Doctors></Doctors>
            </div>
            <Footer></Footer>
        </GuestLayout>
    );
}

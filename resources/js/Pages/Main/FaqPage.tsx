import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../css/style.css";
import "../../../css/main.css";

import Accordion from "@/Components/main/Accordion";
import group2 from "../../../images/section5/img.png";

export default function LandingPage(): any {
    const page = {
        props: {
            url: "/faq",
        },
    };

    return (
        <GuestLayout>
            <Head title="Tentang" />
            <Header page={page}></Header>
            <div className="container">
                <div className="text-center mt-10">
                    <p className="text-md text-[#1580EB] font-semibold ">
                        Frequently Asked Question
                    </p>
                    <h2 className="text-4xl font-semibold text-black  leading-relaxed mb-20">
                        Kami <span className="text-[#1580EB]">Melindungi</span>{" "}
                        Anda
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/2 px-10">
                        <Accordion></Accordion>
                    </div>
                    <div className="relative w-1/2">
                        <img src={group2} alt="Doctors" className="w-full" />
                    </div>
                </div>
            </div>
            <div className="container mt-10">
                <div className="row">
                    <div className="col">
                        <div className="card !border-none !bg-[#1580EB] p-3">
                            <div className="card-body flex justify-between items-center">
                                <h2 className="!text-white">
                                    Masih Bingung? Chat Personal Admin Kami!
                                </h2>
                                <button className="btn !bg-[#1580EB] !text-white">
                                    Call Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </GuestLayout>
    );
}

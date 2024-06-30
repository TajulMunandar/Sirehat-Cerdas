import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
            <motion.div 
                className="container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="text-center mt-10">
                    <motion.p 
                        className="text-md text-[#1580EB] font-semibold "
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Frequently Asked Question
                    </motion.p>
                    <motion.h2 
                        className="text-4xl font-semibold text-black  leading-relaxed mb-20"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Kami <span className="text-[#1580EB]">Melindungi</span>{" "}
                        Anda
                    </motion.h2>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/2 px-10">
                        <Accordion></Accordion>
                    </div>
                    <motion.div 
                        className="relative w-1/2"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={group2} alt="Doctors" className="w-full" />
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
                className="container mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <div className="row">
                    <div className="col">
                        <motion.div 
                            className="card !border-none !bg-[#1580EB] p-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="card-body flex justify-between items-center">
                                <h2 className="!text-white">
                                    Masih Bingung? Chat Personal Admin Kami!
                                </h2>
                                <button className="btn !bg-[#1580EB] !text-white">
                                    Call Contact
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <Footer></Footer>
        </GuestLayout>
    );
}

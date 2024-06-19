import Footer from "@/Components/main/Footer";
import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

import shield from "../../../images/tentang/chef/shield.png";
import Location from "../../../images/tentang/chef/Location.png";
import Mamang from "../../../images/tentang/chef/mamang.png";
import Toko from "../../../images/tentang/chef/toko5.png";

import "../../../css/style.css";
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

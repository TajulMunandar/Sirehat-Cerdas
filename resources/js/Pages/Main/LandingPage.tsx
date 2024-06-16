import Header from "@/Components/main/NavBar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

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
                <div className="row mb-5">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" p-4">
                        <h2 className="text-xl font-bold text-[#1580EB] mb-5">
                            Keunggulan Kami
                        </h2>
                        <ul className="list-disc">
                            <li className="mb-5">Pendaftaran Online</li>
                            <li className="mb-5">Konsultasi Online</li>
                            <li className="mb-5">Antar-Jemput Obat</li>
                            <li className="mb-5">Pengingat Kesehatan</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <img
                            src="https://i.imgur.com/t0u2b89.jpg"
                            alt="Doctors"
                            className="w-full rounded-lg shadow-md"
                        />
                        <div className="absolute bottom-4 left-4 bg-blue-500 text-white rounded-lg p-2">
                            <p className="mb-1">
                                <i className="fas fa-phone-alt mr-2"></i>
                                (330) 718-8699
                            </p>
                            <p className="mb-1">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                65 Cummings Dr
                            </p>
                            <p>Walton, KY</p>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-blue-500 text-white rounded-lg p-2">
                            <p className="mb-1">
                                <i className="fas fa-envelope mr-2"></i>
                                admin@hospi.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

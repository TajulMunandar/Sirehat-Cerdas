export default function Footer(): any {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-8 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <h2 className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="mb-5 text-2xl font-semibold">
                                SIREHAT{" "}
                                <span className="text-[#1580EB]">CERDAS</span>
                            </span>
                        </h2>
                        <p className="mt-2 mb-5 text-md text-gray-400 text-left leading-7">
                            Kami akan selalu memberikan pelanggan kami yang
                            terbaik untuk mendapatkan pengalaman terbaik.
                        </p>
                        <p className="mt-2 mb-5 text-md text-gray-400 text-left leading-7">
                            Lokasi:
                            <br /> Jl. Meuraksa, Blang Cut, Kec. Blang Mangat,
                            Kota Lhokseumawe
                        </p>
                        <p className="mt-2 text-md text-gray-400 text-left leading-7">
                            Follow kami di social :
                            <br />
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a className="text-blue-500">
                                    <svg
                                        fill="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-5 text-blue-500">
                                    <svg
                                        fill="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-5 text-blue-500">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-5 text-blue-500">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="0"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                        ></path>
                                        <circle
                                            cx="4"
                                            cy="4"
                                            r="2"
                                            stroke="none"
                                        ></circle>
                                    </svg>
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="w-1/2 flex-grow flex flex-wrap md:pl-0 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-between">
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <h5 className="title-font mb-5 font-semibold text-[#1580EB] tracking-widest text-md text-left">
                                Tentang
                            </h5>
                            <nav className="list-none mt-16 text-left">
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Dokter
                                    </p>
                                </li>
                                <li className="mb-3">
                                    <a
                                        href="https://profilkes.acehprov.go.id/puskesmas?page=35"
                                        target="_blank"
                                        className="text-gray-400 hover:text-gray-800 decoration-transparent"
                                    >
                                        Puskesmas
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a
                                        href="https://maps.app.goo.gl/KoPmQtiR1YJfvy8o7"
                                        target="_blank"
                                        className="text-gray-400 hover:text-gray-800 decoration-transparent"
                                    >
                                        Maps
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <h5 className="title-font mb-5 font-semibold text-[#1580EB] tracking-widest text-md text-left">
                                Pelayanan
                            </h5>
                            <nav className="list-none mt-16 text-left">
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Poli Umum
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Poli Penyakit Tidak Menular
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Poli Anak
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Poli Gigi
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Poli Ibu & Anak
                                    </p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full ">
                            <h5 className="title-font mb-5 font-semibold text-[#1580EB] tracking-widest text-md text-left">
                                Links
                            </h5>
                            <nav className="list-none mt-16 text-left">
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Beranda
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Tentang
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        Layanan
                                    </p>
                                </li>
                                <li>
                                    <p className="text-gray-400 hover:text-gray-800">
                                        FAQ
                                    </p>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="text-center py-3">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2024 Developer Dadakan, All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    );
}

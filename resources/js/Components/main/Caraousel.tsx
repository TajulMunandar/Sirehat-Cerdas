import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Bg from "../../../images/layanan/Bg.jpg";
import Bg2 from "../../../images/layanan/Bg4.jpg";
import Bg3 from "../../../images/layanan/bg3.jpg";
import Bg5 from "../../../images/layanan/bg5.jpg";
import Bg4 from "../../../images/layanan/bg2.jpg";
import { Link } from "@inertiajs/react";

interface CarouselItem {
    img: string;
    title: string;
    visitors: string;
    doctors: string;
    info: string;
}

const CustomCarousel: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number, e: any): void => {
        setIndex(selectedIndex);
    };

    const carouselData: CarouselItem[] = [
        {
            img: Bg,
            title: "Poli Umum",
            visitors: "5.2k+",
            doctors: "3 Tersedia",
            info: "Pelayanan Terbaik",
        },
        {
            img: Bg2,
            title: "Poli Gigi",
            visitors: "8.1k+",
            doctors: "5 Tersedia",
            info: "Pelayanan Terbaik",
        },
        {
            img: Bg3,
            title: "Poli Anak",
            visitors: "8.1k+",
            doctors: "5 Tersedia",
            info: "Pelayanan Terbaik",
        },
        {
            img: Bg5,
            title: "Poli Ibu Dan Anak",
            visitors: "8.1k+",
            doctors: "5 Tersedia",
            info: "Pelayanan Terbaik",
        },
        {
            img: Bg4,
            title: "Poli Penyakit Tidak Menular",
            visitors: "8.1k+",
            doctors: "5 Tersedia",
            info: "Pelayanan Terbaik",
        },
    ];

    const activeData: CarouselItem = carouselData[index];

    return (
        <div className="container my-3">
            <div className="position-absolute card-slider">
                <div className="card card-sliders shadow-lg">
                    <div className="card-body slider-body">
                        <p className="text-rating ml-2">
                            Pengunjung{" "}
                            <span className=""> ({activeData.visitors}) </span>
                        </p>
                        <div className="texts-card">
                            <h5 className="fw-bold ">{activeData.title}</h5>
                            <p className="cost fw-bold">Jumlah Dokter</p>
                            <p className="mb-4 text-location">
                                <img src="img/Location.png" alt="" />{" "}
                                <span className="cost">
                                    {" "}
                                    {activeData.doctors}{" "}
                                </span>
                            </p>
                            <Link href="/login">
                                <button className="btn !bg-[#1580EB] text-white fw-bold">
                                    Berobat{" "}
                                    <img
                                        src="img/panahkanan.svg"
                                        alt=""
                                        className="panah"
                                    />
                                </button>
                            </Link>
                            <p className="py-2">
                                {" "}
                                <img src="img/info.png" alt="" />{" "}
                                <span className="cost">{activeData.info}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                data-bs-theme="dark"
            >
                {carouselData.map((item, idx) => (
                    <Carousel.Item
                        key={idx}
                        className="h-[564px;]"
                        interval={2000}
                    >
                        <img
                            src={item.img}
                            className="img-c d-block w-100 "
                            alt={`Slide ${idx}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;

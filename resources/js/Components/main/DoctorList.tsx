import Dropdown from "react-bootstrap/Dropdown";
import Bg from "../../../images/tentang/chef/bg.jpg";
import { TDokter } from "@/types/dokter";

interface DoctorProps {
    dokters: TDokter[];
}

const DoctorList: React.FC<DoctorProps> = ({ dokters }) => {
    const data = dokters.map((item) => ({
        ...item,
        id: item.id,
        nama: item.nama,
        poli: item.poli,
        foto: item.foto,
    }));

    return (
        <>
            <div className="container mt-0">
                <div className="row">
                    <div className="col">
                        <p className="text-[#1580EB]">
                            Dokter Berdasarkan Poli
                        </p>
                        <h3 className="">Daftar Dokter</h3>
                    </div>
                    <div className="col-md-4 text-end ">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                                className="!bg-slate-100"
                            >
                                Semua Poli
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    Poli Gigi
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    Poli Anak
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Poli Umum
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Poli Anak dan Ibu
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Poli PTM
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="row row-img-restaurant row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-md-4">
                    {data.map((item) => (
                        <div className="col" key={item.id}>
                            <div className="card card-restaurant p-0 ">
                                <img
                                    src={item.foto}
                                    className="rounded-[24px] h-[100%] max-h-[400px] object-cover aspect-[9/16]"
                                    alt=""
                                />
                                <div className="absolute bg-white rounded-[24px] p-4 w-[95%] items-center justify-center top-[69%] right-[2%]">
                                    <div className="row">
                                        <div className="col col-lg-10">
                                            <p className=" text-black font-bold text-md mb-2">
                                                {item.nama}
                                            </p>
                                            <p className=" text-gray-500 mb-0">
                                                Poli {item.poli}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DoctorList;

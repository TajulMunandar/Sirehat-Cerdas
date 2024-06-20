import Dropdown from "react-bootstrap/Dropdown";
import Bg from "../../../images/tentang/chef/bg.jpg";
export default function DoctorList(): any {
    return (
        <>
            <div className="container mt-0">
                <div className="row">
                    <div className="col ">
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
                                Poli
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Something else
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="row row-img-restaurant row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-md-4">
                    <div className="col">
                        <div className="card card-restaurant p-0 ">
                            <img
                                src={Bg}
                                className="rounded-[24px] h-[100%] max-h-[400px] object-cover aspect-[9/16]"
                                alt=""
                            />
                            <div className="absolute bg-white rounded-[24px] p-4 w-[95%] items-center justify-center top-[69%] right-[2%]">
                                <div className="row">
                                    <div className="col col-lg-10">
                                        <p className=" text-black font-bold text-xl mb-2">
                                            Dokter Asep
                                        </p>
                                        <p className=" text-gray-500 mb-0">
                                            Poli Gigi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-restaurant p-0 ">
                            <img
                                src={Bg}
                                className="rounded-[24px] h-[100%] max-h-[400px] object-cover aspect-[9/16]"
                                alt=""
                            />
                            <div className="absolute bg-white rounded-[24px] p-4 w-[95%] items-center justify-center top-[69%] right-[2%]">
                                <div className="row">
                                    <div className="col col-lg-10">
                                        <p className=" text-black font-bold text-xl mb-2">
                                            Dokter Asep
                                        </p>
                                        <p className=" text-gray-500 mb-0">
                                            Poli Gigi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-restaurant p-0 ">
                            <img
                                src={Bg}
                                className="rounded-[24px] h-[100%] max-h-[400px] object-cover aspect-[9/16]"
                                alt=""
                            />
                            <div className="absolute bg-white rounded-[24px] p-4 w-[95%] items-center justify-center top-[69%] right-[2%]">
                                <div className="row">
                                    <div className="col col-lg-10">
                                        <p className=" text-black font-bold text-xl mb-2">
                                            Dokter Asep
                                        </p>
                                        <p className=" text-gray-500 mb-0">
                                            Poli Gigi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

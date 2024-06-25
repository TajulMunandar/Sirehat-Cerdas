import React from "react";

const RegisterListEmp = () => {
    return (
        <div className="row">
            <div className="col col-lg-4">
                <p>Total Patiens: 0</p>
                <div className="h-screen p-2 flex items-center justify-center">
                    <p className="text-center text-gray-500 mt-4">
                        No data available
                    </p>
                </div>
            </div>

            <div className="col col-lg-8">
                <div className="card border-0 mb-3 h-screen">
                    <div className="card-body flex items-center justify-center h-screen p-4">
                        <p className="text-center text-gray-500 mt-4">
                            No patient selected
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterListEmp;

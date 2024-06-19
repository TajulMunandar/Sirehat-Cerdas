import React, { useState } from "react";

type AccordionItemProps = {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    content,
    isOpen,
    onClick,
}) => {
    return (
        <div className="border-b-2 border-gray-200">
            <button
                className="flex justify-between items-center w-full py-3 text-left text-[#1580EB] font-bold text-lg focus:outline-none"
                onClick={onClick}
            >
                {title}
                <span className="transform transition-transform duration-200">
                    {isOpen ? (
                        <span className="bg-blue-300 text-white rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-200">
                            -
                        </span>
                    ) : (
                        <span className="transition-colors duration-200">
                            +
                        </span>
                    )}
                </span>
            </button>
            {isOpen && <div className="p-4 text-gray-600">{content}</div>}
        </div>
    );
};

const Accordion: React.FC = () => {
    // Inisialisasi state dengan index accordion pertama yang terbuka
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
        0
    );

    const toggleAccordion = (index: number) => {
        setOpenAccordionIndex(openAccordionIndex === index ? null : index);
    };

    const accordionItems = [
        {
            title: "Bisakah keluarga saya mengakses portal saya?",
            content:
                "Iya, Anda dapat memberikan akses kepada anggota keluarga Anda. Hal ini memerlukan formulir persetujuan yang harus diisi oleh Anda dan anggota keluarga Anda. Temukan instruksinya di sini.",
        },
        {
            title: "Bisakah Keluarga saya mengakses portal saya?",
            content:
                "Portal versi web hanya dapat diakses oleh pihak puskesmas. Jika Anda ingin mengaksesnya, silakan gunakan aplikasi Sirehat Cerdas yang tersedia di Play Store.",
        },
        {
            title: "Apakah Informasi Pribadi Saya Aman?",
            content: (
                <div>
                    Keamanan informasi pribadi Anda adalah prioritas kami. Kami
                    menerapkan langkah-langkah keamanan yang ketat untuk
                    melindungi data Anda dari akses yang tidak sah atau
                    penggunaan yang tidak diizinkan. Tim kami terus memantau dan
                    memperbarui sistem keamanan untuk memastikan bahwa informasi
                    Anda tetap aman.
                </div>
            ),
        },
        {
            title: "Bagaimana saya masuk kedalam aplikasi?",
            content: (
                <div>
                    Untuk masuk ke aplikasi Sirehat, Anda perlu melakukan
                    langkah-langkah berikut:
                    <ol className="list-decimal pl-6">
                        <li>Buka aplikasi Sirehat dari perangkat Anda.</li>
                        <li>
                            Pilih opsi untuk mendaftar atau masuk dengan akun
                            yang sudah ada.
                        </li>
                        <li>
                            Isi formulir pendaftaran dengan informasi yang
                            diperlukan.
                        </li>
                        <li>
                            Setelah berhasil mendaftar atau masuk, Anda dapat
                            mengakses fitur-fitur aplikasi seperti jadwal,
                            informasi kesehatan, dan lainnya.
                        </li>
                    </ol>
                    Pastikan untuk mengikuti petunjuk yang diberikan pada
                    aplikasi Sirehat untuk memastikan pengalaman masuk yang
                    lancar dan aman.
                </div>
            ),
        },
    ];

    return (
        <div className="overflow-hidden">
            {accordionItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openAccordionIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;

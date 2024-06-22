import React from "react";

interface BadgeProps {
    text: string;
    type: string;
}

const badgeStyles: { [key: string]: string } = {
    // for inventory
    MAINTENANCE: "bg-red-100 text-red-800",
    READY: "bg-green-100 text-green-800",

    // for user role
    PASIEN: "bg-blue-100 text-blue-800",
    "SUPER ADMIN": "bg-purple-100 text-purple-800",
    PIMPINAN: "bg-yellow-100 text-yellow-800",
    DOKTER: "bg-teal-100 text-teal-800",
    APOTEKER: "bg-rose-100 text-rose-800",
    OPERATOR: "bg-stone-100 text-stone-800",
    KURIR: "bg-orange-100 text-orange-800",

    // for loan
    PENDING: "bg-yellow-100 text-yellow-800",
    APPROVED: "bg-green-100 text-green-800",
    REJECTED: "bg-red-100 text-red-800",
    COMPLETED: "bg-blue-100 text-blue-800",
};

const Badge: React.FC<BadgeProps> = ({ text, type }) => {
    const className = badgeStyles[type] || "bg-gray-100 text-gray-800";
    return (
        <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${className}`}
        >
            {text}
        </span>
    );
};

export default Badge;

import React from "react";
import { motion } from 'framer-motion';
import Logo from "./logo";
import ListItems from "./ListItems";

const Sidebar: React.FC = () => {
    return (
        <>
            <motion.aside
                id="layout-menu"
                className="layout-menu menu-vertical menu bg-menu-theme"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                <Logo />
                <ListItems />
            </motion.aside>
        </>
    );
};

export default Sidebar;

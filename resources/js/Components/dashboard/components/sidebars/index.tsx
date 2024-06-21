import React from "react";

import Logo from "./logo";
import ListItems from "./ListItems";

const Sidebar: React.FC = () => {
    return (
        <>
            <aside
                id="layout-menu"
                className="layout-menu menu-vertical menu bg-menu-theme"
            >
                <Logo />
                <ListItems />
            </aside>
        </>
    );
};

export default Sidebar;

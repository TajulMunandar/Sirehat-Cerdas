import "./bootstrap";
import "../css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Utils/fontawsome";
import "react-perfect-scrollbar/dist/css/styles.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useMediaQuery } from "react-responsive";
import React from "react";

const appName = import.meta.env.VITE_APP_NAME || "Sirehat Cerdas";

interface AppWrapperProps {
    App: React.ComponentType<any>;
    props: any;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ App, props }) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

    if (isTabletOrMobile) {
        const PageNotAvailable = React.lazy(
            () => import("./Error/PageNotAvailable")
        );
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <PageNotAvailable />
            </React.Suspense>
        );
    }

    return (
        <PerfectScrollbar>
            <App {...props} />
        </PerfectScrollbar>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<AppWrapper App={App} props={props} />);
    },
    progress: {
        color: "#4B5563",
    },
});

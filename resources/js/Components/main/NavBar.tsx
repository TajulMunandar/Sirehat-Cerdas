import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "@inertiajs/react";
import Button from "react-bootstrap/Button";

interface HeaderProps {
    page: {
        props: {
            url: string;
        };
    };
}

const Header: React.FC<HeaderProps> = ({ page }) => {
    const currentPath = page.props.url;

    const linkStyle = (path: string) => ({
        color: currentPath === path ? "#1580EB" : "black",
        textDecoration: "none",
        fontSize: "1rem",
        marginRight: "1rem",
    });

    return (
        <Navbar className="px-5 py-4">
            <Navbar.Brand>
                <Link href="/" className="navbar-brand font-bold ">
                    SIREHAT <span style={{ color: "#1580EB" }}>CERDAS</span>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="float-end" id="basic-navbar-nav">
                <Nav className="me-auto w-full flex justify-end">
                    <Nav.Link className="me-2">
                        <Link
                            href="/"
                            className="text-md decoration-transparent font-semibold hover:!text-[#1580EB] transition-colors duration-200"
                            style={linkStyle("/")}
                        >
                            Beranda
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="me-2 ">
                        <Link
                            href="/tentang"
                            className="text-md decoration-transparent font-semibold hover:!text-[#1580EB] transition-colors duration-200"
                            style={linkStyle("/tentang")}
                        >
                            Tentang
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="me-2">
                        <Link
                            href="/layanan"
                            className="text-md decoration-transparent font-semibold hover:!text-[#1580EB] transition-colors duration-200"
                            style={linkStyle("/layanan")}
                        >
                            Layanan
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="me-5">
                        <Link
                            href="/faq"
                            className="text-md decoration-transparent font-semibold hover:!text-[#1580EB] transition-colors duration-200"
                            style={linkStyle("/faq")}
                        >
                            FAQ
                        </Link>
                    </Nav.Link>
                    <Link
                        href="/login"
                        className="text-md decoration-transparent text-white font-semibold"
                    >
                        <Button
                            className="px-5 py-2 !text-sm"
                            style={{
                                fontFamily: "Poppins",
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

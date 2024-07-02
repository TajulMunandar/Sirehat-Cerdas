import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import LoginImage from "../../../images/login.jpg";

// mui
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const defaultTheme = createTheme();

    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: "100vh" }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={2}
                        md={7}
                        sx={{
                            backgroundImage: `url(${LoginImage})`,
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        item
                        xs={13}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        sx={{
                            padding: "16px",
                        }}
                        square
                    >
                        <Box
                            sx={{
                                my: 18,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "left",
                            }}
                        >
                            <Typography className="!font-bold !text-2xl !mb-5">
                                Login
                            </Typography>
                            <Typography className="text-gray-400 !mb-5">
                                Login Into Your Account
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={submit}
                                sx={{ mt: 1 }}
                            >
                                <div className="mb-3">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-400"
                                    >
                                        Username
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3 pr-3">
                                            <span className="text-gray-500">
                                                <AccountCircleIcon></AccountCircleIcon>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={data.username}
                                            onChange={(e) => setData('username', e.target.value)}
                                            className="block w-full rounded-md border-0 py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="enter your username"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-400"
                                    >
                                        Password
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="text-gray-500 sm:text-sm">
                                                <LockOpenIcon></LockOpenIcon>
                                            </span>
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            className="block w-full rounded-md border-0 py-3 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="enter your password"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, padding: "16px" }}
                                    className="!rounded-full !bg-cyan-600 !font-semibold"
                                >
                                    Log In
                                </Button>
                                <Grid
                                    container
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* <Grid item display={"flex"}>
                                        <Typography
                                            className="text-gray-400"
                                            sx={{
                                                mr: 1,
                                            }}
                                        >
                                            Don't have an account?
                                        </Typography>
                                        <Link
                                            href="/register"
                                            className="text-blue-500"
                                        >
                                            {"Register"}
                                        </Link>
                                    </Grid> */}
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </GuestLayout>
    );
}

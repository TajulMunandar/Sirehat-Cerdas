import { ReactElement } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import logo from "../../images/logo.png";
import error404 from "../../images/404.jpg";
import Image from "./Image";

const PageNotAvailable = (): ReactElement => {
    const renderHeader: ReactElement = (
        <Box
            component="header"
            sx={{
                position: "fixed",
                top: 20,
                left: 20,
                width: 1,
                lineHeight: 0,
            }}
        >
            <Image src={logo} width={82.6} />
        </Box>
    );
    return (
        <>
            {renderHeader}
            <Container>
                <Stack
                    textAlign="center"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                    mx="auto"
                    maxWidth={480}
                    py={12}
                >
                    <Typography variant="h2" sx={{ mb: 3 }}>
                        Sorry, page not available!
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "text.secondary" }}
                    >
                        Web ini belum tersedia untuk perangkat mobile dan
                        tablet. Harap akses menggunakan perangkat desktop untuk
                        pengalaman yang optimal.
                    </Typography>
                    <Image
                        src={error404}
                        sx={{
                            mx: "auto",
                            width: 1,
                            height: "auto",
                            my: { xs: 5, sm: 10 },
                        }}
                    />
                </Stack>
            </Container>
        </>
    );
};

export default PageNotAvailable;

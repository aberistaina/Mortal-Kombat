import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container,
    Button,
    Box,
} from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

import { useEffect, useState } from "react";

export const CardPersonajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const Img = styled("img")({
        width: 80,
    });

    const getData = async () => {
        let response = await fetch("http://localhost:3000/api/v1/mortalkombat");
        let data = await response.json();
        setPersonajes(data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = personajes.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(personajes.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container sx={{ mt: 10 }}>
            <Grid container spacing={3}>
                {currentItems.map((personaje) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={personaje.id}>
                        <Card>
                            <Link to={`/${personaje.id}/${personaje.nombre}`}>
                                <CardMedia
                                    component="img"
                                    alt={`Imagen de ${personaje.nombre}`}
                                    height="350"
                                    image={`../../public/img/${personaje.nombre}.png`}
                                />
                            </Link>
                            <CardContent
                                sx={{
                                    backgroundColor: "#BBC8DC",
                                    minHeight:"550px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    align="center"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {personaje.nombre}
                                </Typography>
                                <Typography
                                    sx={{ marginTop: "10px", fontSize: "18px" }}
                                >
                                    <b>Reino:</b> {personaje.reino}
                                </Typography>
                                <Typography
                                    sx={{ marginTop: "10px", fontSize: "18px" }}
                                >
                                    <b>Raza:</b> {personaje.raza}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            marginTop: "10px",
                                            marginBottom: "10px",
                                            fontSize: "20px",

                                        }}
                                    >
                                        <b>Primera Aparición</b>
                                    </Typography>

                                    <Img
                                        src={`../public/img/${personaje.apariciones}.png`}
                                        alt={personaje.nombre}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        marginTop: "10px",
                                        fontSize: "15px",
                                        overflow: "auto",
                                    }}
                                >
                                    "{personaje.descripcion}"
                                </Typography>

                                    <Link
                                        to={`/${personaje.id}/${personaje.nombre}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            sx={{
                                                backgroundColor: "#961C1C",
                                                "&:hover": {
                                                    backgroundColor: "#ff5722",
                                                },
                                                color: "white",
                                                width: "100%",
                                            }}
                                        >
                                            Ver Más
                                        </Button>
                                    </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li
                            key={number}
                            onClick={() => handlePageChange(number)}
                            style={{
                                cursor: "pointer",
                                margin: "5px",
                                padding: "10px",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "50px",
                                backgroundColor:
                                    currentPage === number
                                        ? "#ccc"
                                        : "transparent",
                            }}
                        >
                            {number}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

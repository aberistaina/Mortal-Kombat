import "./formCreate.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

import { Container, TextField, Button, Box, Typography } from "@mui/material";

export const FormUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [personaje, setPersonaje] = useState({});
    const [formData, setFormData] = useState({
        nombre: "",
        reino: "",
        raza: "",
        apariciones: "",
        imagen: "",
        descripcion: "",
        historia: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getData = async () => {
        let response = await fetch(
            `http://localhost:3000/api/v1/mortalkombat/${id}/luchador`
        );
        let data = await response.json();
        setPersonaje(data.data);
        setFormData({
            nombre: data.data.nombre,
            reino: data.data.reino,
            raza: data.data.raza,
            apariciones: data.data.apariciones,
            imagen: data.data.imagen,
            descripcion: data.data.descripcion,
            historia: data.data.historia,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = await fetch(`http://localhost:3000/api/v1/mortalkombat/${id}`,{
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            }
        );
        let data = await response.json();

        if (data.code == 200) {
            enqueueSnackbar(`${data.message}`, { variant: "success" });
            setTimeout(function () {
                navigate("/personajes");
            }, 1000);
        } else {
            enqueueSnackbar(`${data.message}`, { variant: "error" });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container
            sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                width: "400px",

                borderRadius: "10px",
                padding: "10px",
            }}
        >
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2em",
                        marginBottom: "30px",
                        marginTop: "20px",
                    }}
                >
                    Editar Personaje Mortal Kombat
                </Typography>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Nombre"
                    multiline
                    maxRows={4}
                    onChange={handleChange}
                    name="nombre"
                    value={formData.nombre}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                        marginBottom: "15px",
                    }}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Reino"
                    multiline
                    maxRows={4}
                    onChange={handleChange}
                    name="reino"
                    value={formData.reino}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                    }}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Raza"
                    multiline
                    maxRows={4}
                    onChange={handleChange}
                    name="raza"
                    value={formData.raza}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                    }}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Primera Aparición"
                    multiline
                    maxRows={4}
                    onChange={handleChange}
                    name="apariciones"
                    value={formData.apariciones}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                    }}
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Imagen"
                    multiline
                    maxRows={3}
                    onChange={handleChange}
                    name="imagen"
                    value={formData.imagen}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                    }}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                    }}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Historia"
                    name="historia"
                    value={formData.historia}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    sx={{
                        backgroundColor: "white",
                        minWidth: "350px",
                    }}
                />

                <Box>
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{ width: "100px", marginBottom: "20px" }}
                    >
                        Modificar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

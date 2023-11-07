import "./formCreate.css";
import { useState } from "react";

import { Container, TextField, Button, Box, Typography} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useSnackbar } from "notistack";

export const FormCreate = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        reino: "",
        raza: "",
        apariciones: "",
        imagen: "",
        descripcion: "",
        historia: "",
    });

    const [mostrarForm, setMostrarForm] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await fetch("http://localhost:3000/api/v1/mortalkombat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        let data = await response.json()

        if(data.code == 201){
            enqueueSnackbar(`${data.message}`, { variant: "success" });
            setTimeout(function () {
                location.reload();
            }, 1000);
        }else{
            enqueueSnackbar(`${data.message}`, { variant: "error" });
        }
        
    };
    return (
        <>
            <Box sx={{display: mostrarForm ? "none" : "flex", justifyContent:"center"}} >
                <Button 
                variant="contained" 
                startIcon={<PersonAddAltIcon />} 
                sx={{width:"15%"}}
                onClick={() => setMostrarForm(!mostrarForm)}
                >
                    Crear Personaje
                </Button>
            </Box>
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
                style={{ display: mostrarForm ? "block" : "none" }}
                
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
                        Crear Personaje Mortal Kombat
                    </Typography>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Nombre"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                        name="nombre"
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
                        sx={{
                            backgroundColor: "white",
                            minWidth: "350px",
                        }}
                    />

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Primera Aparicion"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                        name="apariciones"
                        sx={{
                            backgroundColor: "white",
                            minWidth: "350px",
                        }}
                    />

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Imagen"
                        multiline
                        maxRows={4}
                        onChange={handleChange}
                        name="imagen"
                        sx={{
                            backgroundColor: "white",
                            minWidth: "350px",
                        }}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Descripcion"
                        multiline
                        name="descripcion"
                        onChange={handleChange}
                        rows={4}
                        sx={{
                            backgroundColor: "white",
                            minWidth: "350px",
                        }}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Historia"
                        multiline
                        name="historia"
                        onChange={handleChange}
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
                            Crear
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

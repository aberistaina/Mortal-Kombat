import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./tablaPersonajes.css";
import { Link } from "react-router-dom";
import * as React from "react";
import { useSnackbar } from "notistack";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

import { useEffect, useState } from "react";

export const TablaPersonajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const { enqueueSnackbar } = useSnackbar();


    const getData = async () => {
        let response = await fetch("http://localhost:3000/api/v1/mortalkombat");
        let data = await response.json();
        setPersonajes(data.data);
    };
    useEffect(() => {
        getData();
    }, []);

    const deleteCharacter = async (event) => {
        let id = event.target.value;
        let response = await fetch(`http://localhost:3000/api/v1/mortalkombat/${id}`, { method: "DELETE" }
        );
        let data = await response.json()

        if (data.code == 200) {
            enqueueSnackbar(`${data.message}`, { variant: "success" });
            getData();

        } else {
            enqueueSnackbar(`${data.message}`, { variant: "error" });
        }
        
    };

    return (
        <>
            <TableContainer
                className="tabla"
                component={Paper}
                sx={{ maxWidth: "90%", margin: "50px auto" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ fontWeight: "bold", fontSize: "1.2em" }}
                            >
                                Nombre
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold", fontSize: "1.2em" }}
                            >
                                Reino
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold", fontSize: "1.2em" }}
                            >
                                Raza
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold", fontSize: "1.2em" }}
                            >
                                Apariciones
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold", fontSize: "1.2em" }}
                            >
                                Modificar
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold", fontSize: "1.2em" }}
                            >
                                Eliminar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {personajes.map((personaje) => (
                            <TableRow
                                key={personaje.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {personaje.nombre}
                                </TableCell>
                                <TableCell align="right">
                                    {personaje.reino}
                                </TableCell>
                                <TableCell align="right">
                                    {personaje.raza}
                                </TableCell>
                                <TableCell align="right">
                                    {personaje.apariciones}
                                </TableCell>
                                <TableCell align="right">
                                    <Link to={`/update/${personaje.id}`}>
                                        <Button
                                            variant="contained"
                                            size="medium"
                                            sx={{
                                                backgroundColor: "green",
                                                fontWeight: "bold",
                                            }}
                                            onClick={handleOpen}
                                        >
                                            Modificar
                                        </Button>
                                    </Link>
                                </TableCell>
                                <TableCell
                                align="right"
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "red",
                                            fontWeight: "bold",
                                        }}
                                        size="medium"
                                        onClick={deleteCharacter}
                                        value={personaje.id}
                                    >
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

import {
    Box,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../public/img/mkbackground.jpg";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const RegisterUserForm = () => {
    const [usuario, setUsuario] = useState();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [showPassword, setShowPassword] = useState(true);

    const [repeatPassword, setrepeatPassword] = useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    const Img = styled("img")({
        margin: "0 auto",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (usuario.password != usuario.repeatPassword) {
            setrepeatPassword(false);
            return;
        } else {
            let response = await fetch(
                "http://localhost:3000/api/v1/usuarios",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(usuario),
                }
            );
            let data = await response.json();

            if (data.code == 201) {
                enqueueSnackbar(`${data.message}`, { variant: "success" });

                navigate("/login");
            } else {
                enqueueSnackbar(`${data.message}`, { variant: "error" });
            }
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                width: "100%",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "30px",
                }}
            >
                <Img src={"../../public/img/registro.png"} alt="login" />
            </Box>

            <Box
                component={"form"}
                onSubmit={handleSubmit}
                sx={{ display: "grid", gap: "2em", marginTop: "70px" }}
            >
                <TextField
                    label="nombre"
                    name="nombre"
                    variant="outlined"
                    size="small"
                    required
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                />

                <TextField
                    label="email"
                    name="email"
                    variant="outlined"
                    size="small"
                    required
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                />

                <TextField
                    label="Contraseña"
                    name="password"
                    variant="outlined"
                    size="small"
                    required
                    onChange={handleChange}
                    type={showPassword ? "password" : "text"}
                    sx={{ backgroundColor: "white" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: "-70%",
                                        left: "70%",
                                    }}
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    label="Repite tu Contraseña"
                    name="repeatPassword"
                    variant="outlined"
                    size="small"
                    required
                    onChange={handleChange}
                    type={showPassword ? "password" : "text"}
                    sx={{ backgroundColor: "white" }}
                    helperText={
                        !repeatPassword ? "Las Contraseñas No Coinciden" : ""
                    }
                    FormHelperTextProps={{
                        sx: {
                            color: "red",
                            backgroundColor: "inherit",
                            margin: 0,
                            padding: 0,
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: "-70%",
                                        left: "70%",
                                    }}
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button type="submit" variant="contained" fullWidth>
                    Crear usuario
                </Button>
            </Box>
        </Box>
    );
};

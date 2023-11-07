import {
    Box,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import backgroundImage from "../../public/img/mkbackground.jpg";
import { useSnackbar } from "notistack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const LoginUserForm = () => {
    const [usuario, setUsuario] = useState();
    const { enqueueSnackbar } = useSnackbar();

    const [showPassword, setShowPassword] = useState(true);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const Img = styled("img")();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch(
            "http://localhost:3000/api/v1/usuarios/login",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            }
        );
        let data = await response.json();

        if (data.code == 200) {
            enqueueSnackbar(`${data.message}`, { variant: "success" });
            localStorage.setItem("token", data.token);
            localStorage.setItem("usuario", JSON.stringify(data.usuario));
            setTimeout(function () {
                window.location.href = "/";
            }, 1000);
        } else {
            enqueueSnackbar(`${data.message}`, { variant: "error" });
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
                <Img src={"../../public/img/login.png"} alt="login" />
            </Box>

            <Box
                component={"form"}
                onSubmit={handleSubmit}
                sx={{
                    display: "grid",
                    gap: "28px",
                    maxWidth: "sm",
                    marginX: "auto",
                    paddingY: 10,
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="email"
                    name="email"
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    required
                    sx={{ backgroundColor: "white", width:"100%" }}
                />

                <TextField
                    label="Contraseña"
                    name="password"
                    variant="outlined"
                    type= {showPassword ? "password": "text"}
                    size="small"
                    required
                    onChange={handleChange}
                    sx={{ backgroundColor: "white" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    sx={{position: "absolute", top: "-70%", left: "70%"}}
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
                    Login
                </Button>

                <NavLink
                    to={"/register"}
                    style={{ color: "#0000FF", fontWeight: "bold" }}
                >
                    ¿No tienes cuenta?, ¡Regístrate Aquí!
                </NavLink>
            </Box>
        </Box>
    );
};

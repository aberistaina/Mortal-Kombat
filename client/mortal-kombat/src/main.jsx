import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SnackbarProvider
        maxSnack={4}
        autoHideDuration={3000}>
            <App />
        </SnackbarProvider>
    </React.StrictMode>
);

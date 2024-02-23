import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Login } from "./pages/login";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Register from "./pages/register";
import Perfil from "./pages/perfil";
import CalculoGastoCalorico from "./pages/calculogastocalorico"
import CalculoPlanAlimenticio from "./pages/calculoplanalimenticio"
import BusquedadeRecetas from "./pages/busquedaderecetas"


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ToastContainer } from "react-toastify";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Perfil />} path="/perfil" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<CalculoGastoCalorico />} path="/gastocalorico" />
                        <Route element={<CalculoPlanAlimenticio />} path="/calculoplanalimenticio" />
                        <Route element={<BusquedadeRecetas />} path="/busquedareceta" />
                    </Routes>
                    <Footer />
                    <ToastContainer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

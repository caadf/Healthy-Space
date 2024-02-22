import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Perfil = () => {
    const { store, actions } = useContext(Context);

    if (store.user == null) return <Navigate to="/" replace />

    return (
        <>
            <h1>Perfil</h1>
        </>
    );

};
export default Perfil
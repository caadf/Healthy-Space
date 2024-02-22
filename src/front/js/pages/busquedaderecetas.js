import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const BusquedadeRecetas = () => {
    const { store, actions } = useContext(Context);
    if (!!store.user) return <Navigate to="/" replace />

    return (
        <>

        </>
    );
};

export default BusquedadeRecetas
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const BusquedadeRecetas = () => {
    const { store, actions } = useContext(Context);
    if (store.user == null) return <Navigate to="/" replace />

    return (
        <>
            <div className="w-50 mx-auto m-5 text-center">
                <div className="controls fs-3">
                    <input type="number" placeholder="Inserte Calorias" className="rounded-3" onChange="" />
                    <button className="bg-primary text-light rounded-3" onClick="">Buscar Receta</button>
                </div>

                {/*{mealData && <MealList mealData={mealData} />}*/}
            </div>
        </>
    );
};

export default BusquedadeRecetas
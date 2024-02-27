import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ComidaList from "../component/listadecomida";

const BusquedadeRecetas = () => {
    const { store, actions } = useContext(Context);
    const [recetaData, setRecetaData] = useState(null);



    const [calorias, setCalorias] = useState(200);
    let minCalorias = calorias - 50



    function handleCambio(e) {
        setCalorias(e.target.value);

    }
    function getRecetaData() {
        fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=c46803008c304195bf0a87661a0ecf06&minCalories=${minCalorias}&maxCalories=${calorias}&number=3`)
            .then((response) => response.json())
            .then((data) => {
                setRecetaData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error")
            });

    }
    if (store.user == null) return <Navigate to="/" replace />
    return (
        <>
            <div className="w-50 mx-auto m-5 text-center">
                <div className="controls fs-3">
                    <input type="number" placeholder="Inserte Calorias" className="rounded-3" onChange={handleCambio} />
                    <button className="bg-primary text-light rounded-3" onClick={getRecetaData}>Buscar Receta</button>
                </div>

                {recetaData && <ComidaList recetaData={recetaData} />}
            </div>
        </>
    );
};

export default BusquedadeRecetas
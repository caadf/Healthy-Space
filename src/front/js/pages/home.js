import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Home = () => {
    return (

        <>
            <div className="card  w-25 mx-auto m-5 text-center">
                <img src="https://www.recetasnestlecam.com/sites/default/files/inline-images/importancia-cocinar-en-casa.jpg" alt="..." />
                <div className="card-body">
                    <h5 class="card-title">Bienvenido Healthy Space</h5>
                    <p class="card-text">En este espacio podras conocer tu gasto calorico diario y con ello tendras la posibilidad de acceder a un plan de alimentacion con informacion de calorias, proteinas, y grasas junto con sus recetas respectivas   </p>
                    <p>Quieres interntarlo?</p>
                    <a href="#" class="btn btn-secondary">Haz click aqui</a>
                </div>
            </div>




        </>


    )
}

export default Home
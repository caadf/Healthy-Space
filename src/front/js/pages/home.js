import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Home = () => {
    return (

        <>
            <div className="card  w-25 mx-auto m-5 text-center bg-primary">
                <img src="https://www.recetasnestlecam.com/sites/default/files/inline-images/importancia-cocinar-en-casa.jpg" alt="..." />
                <div className="card-body">
                    <h5 class="card-title text-light">Bienvenido Healthy Space</h5>
                    <p class="card-text text-light">En este espacio podras conocer tu gasto calorico diario y con ello tendras la posibilidad de acceder a un plan de alimentacion con informacion de calorias, proteinas, y grasas junto con sus recetas respectivas   </p>
                    <p className="text-light">Quieres interntarlo?
                        Create una cuenta y empieza calculando tus gasto calorico diario, despues de eso utiliza esa informacion para calcular tu plan alimenticio y si deseas buscar recetas especificas puedes hacerlo, solo debes ir a la pestaña correspondiente y buscar la receta por la cantidad de calorias que deseas que tenga.
                    </p>
                </div>
            </div>




        </>


    )
}

export default Home
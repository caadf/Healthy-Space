import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Home = () => {
    return (

        <>

            <div className="card text-bg-dark">
                <img src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img opacity-50 " alt="..." />
                <div className="card-img-overlay text-center">
                    <h1 class="card-title">Bienvenido a Healthy Space</h1>
                    <p class="card-text">En este espacio podras conocer tu gasto calorico diario y con ello tendras la posibilidad de acceder a un plan de alimentacion <br></br> con informacionde calorias, proteinas, y grasas junto con sus recetas respectivas</p>
                    
                </div>
            </div>












            {/* <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5>BIENVENIDO A HEALTHY SPACE</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}



        </>


    )
}

export default Home
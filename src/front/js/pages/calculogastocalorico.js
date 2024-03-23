import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const CalculoGastoCalorico = () => {
    const { store, actions } = useContext(Context);
    if (store.user == null) return <Navigate to="/" replace />
    return (
        <>
            <form onSubmit={actions.calcularCalorias} className='w-50 mx-auto py-5 my-5'>
                <div className="form-group mb-3">
                    <label htmlFor="peso" className="form-label">Peso en Kg</label>
                    <input className='form-control' type="number" name="peso" id="peso" placeholder='Insertar Peso en Kg' value={store.peso} onChange={actions.handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="altura" className="form-label">Altura en Cm</label>
                    <input className='form-control' type="number" name="altura" id="altura" placeholder='Insertar altura en cm' value={store.altura} onChange={actions.handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input className='form-control' type="number" name="edad" id="edad" placeholder='Insertar edad en años' value={store.edad} onChange={actions.handleChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="genero" className="form-label">Genero</label>
                    <select class="form-select form-select-sm mt-2" aria-label="Small select example" name="genero" id="genero" value={store.genero} onChange={actions.handleChange}>
                        <option selected value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                </div>
                <button className="btn btn-primary btn-sm w-100">Calculate</button>
            </form>
            <div className='w-50 mx-auto py-5 my-5 bg-success text-light text-center rounded-3'>
                <h3>Calorías totales: {store.calorias}</h3>
            </div>
        </>
    );
};
export default CalculoGastoCalorico
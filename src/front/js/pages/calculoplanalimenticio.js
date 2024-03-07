import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import MealList from "../component/mealList";

const CalculoPlanAlimenticio = () => {
    const { store, actions } = useContext(Context);

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e) {
        setCalories(e.target.value);

    }
    function getMealData() {
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=c46803008c304195bf0a87661a0ecf06&timeFrame=day&targetCalories=${calories}`)
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
                console.log(data);
            })
            .catch(() => {
                console.log("error")
            });

    }
    if (store.user == null) return <Navigate to="/" replace />
    return (

        <div className="w-50 mx-auto m-5 text-center">
            <div className="controls fs-3">
                <input type="number" placeholder="Inserte Calorias" className="rounded-3" onChange={handleChange} />
                <button className="btn btn-outline-primary text-dark rounded-3" onClick={getMealData}>Buscar Plan alimenticio</button>
            </div>

            {mealData && <MealList mealData={mealData} />}



        </div>
    );
};

export default CalculoPlanAlimenticio
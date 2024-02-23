import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import MealList from "../component/mealList";

function CalculoPlanAlimenticio() {
    /*  const { store, actions } = useContext(Context);
     if (!!store.user) return <Navigate to="/" replace /> */
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e) {
        setCalories(e.target.value);

    }

    
    return (

        <>
            <div className="controls">
                <input type="number" placeholder="calorias" onChange={handleChange} />

            </div>
            <button onClick={getMealData}>Plan alimenticio</button>
            {mealData && <MealList mealData={mealData}/> }
        </>
    );
};

export default CalculoPlanAlimenticio
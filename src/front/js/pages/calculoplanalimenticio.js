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
    function getMealData ()  {
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

    return (

        <>
            <div className="controls">
                <input type="number" placeholder="calorias" onChange={handleChange} />

            </div>
            <button onClick={getMealData}>Plan alimenticio</button>
            {mealData && <MealList mealData={mealData} />}
        </>
    );
};

export default CalculoPlanAlimenticio
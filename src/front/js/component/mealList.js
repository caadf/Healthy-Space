import React from "react";
import Meal from "./meal";

const MealList = ({ mealData }) => {
    const nutrients = mealData.nutrients;

    return (
        <>
            <div className="nutrientes">
                <h1>Macros</h1>
                <ul>
                    <li>Calories:{nutrients.calories}</li>
                    <li>Carbohydrates:{nutrients.carbohydrates}</li>
                    <li>Fat:{nutrients.fat}</li>
                    <li>Protein:{nutrients.protein}</li>
                </ul>
            </div>
            <div className="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal}/>;

                })}

            </div>
        </>

    )
}

export default MealList
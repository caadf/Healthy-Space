import React from "react";
import Meal from "./meal";

const MealList = ({ mealData }) => {
    const nutrients = mealData.nutrients;

    return (
        <>
            <div className="card text-white bg-success m-3 ">
                <div class="card-header fs-1">Macros</div>
                <div class="card-body fs-3 ">
                    <div>Calories:{nutrients.calories}</div>
                    <div>Carbohydrates:{nutrients.carbohydrates}</div>
                    <div>Fat:{nutrients.fat}</div>
                    <div>Protein:{nutrients.protein}</div>
                </div>

            </div>
            <div className="meals d-flex flex-xl-row flex-column m-3">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;

                })}

            </div>
        </>

    )
}

export default MealList
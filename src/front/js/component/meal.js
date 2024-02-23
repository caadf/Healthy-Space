import React, { useState, useEffect } from "react";

const Meal = ({ meal }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c46803008c304195bf0a87661a0ecf06`)
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log("error")
            })
    }, [meal.id]
    )

    return (
        <>
            <div class="card mx-2 bg-success text-light">
                <img src={imageUrl} alt="recipe" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{meal.title}</h5>
                    <ul>
                        <li>Preparation time:{meal.readyInMinutes}minutes</li>
                        <li>Number of servings: {meal.servings}</li>
                    </ul>
                    <a href={meal.sourceUrl} class="btn btn-primary" target="_blank">Go to receipe</a>
                </div>
            </div>
        </>
    )

}
export default Meal
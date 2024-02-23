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
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul>
                <li>Preparation time:{meal.readyinMinutes}minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
       
        </article>
    )

}
export default Meal
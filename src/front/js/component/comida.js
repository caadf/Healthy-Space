import React, { useState, useEffect } from "react";

const Comida = ({ receta }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${receta.id}/information?apiKey=c46803008c304195bf0a87661a0ecf06`)
            .then((response) => response.json())
            .then((data) => {
                setUrl(data.spoonacularSourceUrl);
            })
            .catch(() => {
                console.log("error")
            })
    }, [receta.id]
    )

    return (
        <>
            <div class="card mx-2 bg-success text-light">
                <img src={receta.image} alt="recipe" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{receta.title}</h5>
                    <ul>
                        <li>Calories: {receta.calories}kcal</li>
                        <li>Fat: {receta.fat}g</li>
                        <li>Protein: {receta.protein}g</li>
                        <li>Carbs: {receta.carbs}g</li>
                    </ul>
                    <a href={url} class="btn btn-primary" target="_blank">Go to receipe</a>
                </div>
            </div>
        </>
    )

}
export default Comida
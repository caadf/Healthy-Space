import React from "react";
import Comida from "./comida";

const ComidaList = ({ recetaData }) => {


    return (
        <>
            <div className="meals d-flex">
                {recetaData.map((receta) => {
                    return <Comida key={receta.id} receta={receta} />;

                })}

            </div>
        </>

    )
}

export default ComidaList
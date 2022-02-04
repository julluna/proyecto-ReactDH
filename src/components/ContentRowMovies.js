import React from "react";
import SmallCard from './SmallCard';

let peliculas = {
    titulo: 'Movies in Data Base',
    color: 'primary',
    cantidad: 21,
    icono: 'film',
}

let cantidad = {
    titulo: 'Total awards',
    color: 'success',
    cantidad: 79,
    icono: 'award',
}

let actores = {
    titulo: 'Actors quantity',
    color: 'warning',
    cantidad: 49,
    icono: 'user',
}

let cardProps = [peliculas, cantidad, actores];

function ContentRowMovies() {
    return (
        <React.Fragment>
            {/*<!-- Movies in Data Base -->*/}

            {
                cardProps.map((cardDato, index) => {
                    // return <SmallCard cardDatos = {cardDato}  key = {cardDato+index} />
                    return <SmallCard {...cardDato} key={cardDato + index} />
                })
            }


        </React.Fragment>
    )
}

export default ContentRowMovies;

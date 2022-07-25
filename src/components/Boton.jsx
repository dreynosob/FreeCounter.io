import React from 'react';
import '../styles/Boton.css'

//Componente Boton
//Se usa la sintaxis de destructuracion con los props texto, esBotonClicks y la funcion manejarClicks
const Boton = ({texto, esBotonClick, manejarClicks}) => {

    return (  
        //Usamos JS para aplicar una clase u otra dependiendo si es true o no la respuesta
        <button
        className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClicks}>
            {texto}
        </button>
    );
}
 
export default Boton;
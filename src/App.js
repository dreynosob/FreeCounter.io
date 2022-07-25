import logo from './logo.svg';
import freeCodeCamLogo from './imagenes/FreeCodeCamp.png'
import './App.css';
import Contador from './components/Contador'

import Boton from './components/Boton'
//Hook para poder actualizar e usar los estados en un componente funcional
import { useState } from 'react';

function App() {
  //un array con el numsClicks que pasamos al componente contador como prop y una funcion para actualizarlo
  const [numClicks, setNumClicks] = useState(0);

  const manejarClicks = () => {
    //funcion que aumenta el contador en 1
     setNumClicks(numClicks + 1)
  };

  const reiniciarContador = () => {
    //funcion que reiniciar el contador
    setNumClicks(0)
  };
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 
        src={freeCodeCamLogo} 
        alt='freeCodeCamp Logo'
        />

      </div>

      <div className='contenedor-principal-contador'>
        <Contador 
        //Props que actualizan el Contador
        numClicks={numClicks}/>
        <Boton
        //Props que dan dinamismo al componente Boton, el texto, esBtonClick para aplicar la clase y la funcion
        texto='Click'
        esBotonClick={true}
        manejarClicks={manejarClicks}
        />

        <Boton
        texto='Reset'
        esBotonClick={false}
        manejarClicks={reiniciarContador}/>


      </div>
    </div>
  );
}

export default App;

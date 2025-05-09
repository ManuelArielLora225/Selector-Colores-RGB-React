import React, { useState } from 'react';   
import '../hojas-estilo/styles.css'



const ColoresAleatorios = () => {
    const [rojo, setRojo] = useState(23);
    const [verde, setVerde] = useState(41);
    const [azul, setAzul] = useState(56);

   const ColorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

    return (
        <div style={{backgroundColor: ColorRGB}}>
        <div className='contenedor-principal'>
            <div className='color'>
                <label htmlFor='rojo'>Rojo (R)</label>
                    <input
                    id='rojo'
                    type='range'
                    min='0'
                    max='255'
                    step='1'
                    onChange={(e) => setRojo(Number(e.target.value))}
                    />
                <p id='texto-rojo'>{rojo}</p>
            </div>
                <div className='color'>
                <label htmlFor='verde'>Verde (G)</label>
                    <input
                    id='verde'
                    type='range'
                    min='0'
                    max='255'
                    step='1'
                    onChange={(e) => setVerde(Number(e.target.value))}
                    />
                 <p id='texto-rojo'>{verde}</p>
            </div>
                <div className='color'>
                <label htmlFor='azul'>Azul (B)</label>
                    <input
                    id='azul'
                    type='range'
                    min='0'
                    max='255'
                    step='1'
                    onChange={(e) => setAzul(Number(e.target.value))}
                    />
                 <p id='texto-rojo'>{azul}</p>
            </div>
        </div>
        </div>
      
    )
}

export default ColoresAleatorios
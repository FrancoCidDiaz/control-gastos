import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, gastos}) => {

const [disponible, setDisponible] = useState(0)
const [gastado, setGastado] = useState(0)
const [porcentaje, setPorcentaje] = useState(0)



useEffect(() => {

  
 const totalGastado = gastos.reduce( (total, gasto) =>   Number(gasto.cantidad) + Number(total), 0 );

 

const totalDisponible = presupuesto - totalGastado;


const nuevoPorcentaje = (( ( presupuesto - totalDisponible) / presupuesto  ) *100).toFixed(2);

setDisponible(totalDisponible)
setGastado(totalGastado)

setTimeout(() => {
   setPorcentaje(nuevoPorcentaje) 
}, 1500);

}, [gastos])


    

const formatearCantidad = (cantidad) => {
return cantidad.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD'
})

}

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
           <CircularProgressbar
           styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6'
           } )}
           value={porcentaje}
           text={ `${porcentaje} Gastado` }/>
        </div>
<div className='contenido-presupuesto'>
<p>
    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
</p>
</div>

<div className='contenido-presupuesto'>
<p>
    <span>Disponible:</span> {formatearCantidad(disponible)}
</p>
</div>

<div className='contenido-presupuesto'>
<p>
    <span>Gastado:</span> {formatearCantidad(gastado)}
</p>
</div>


    </div>
  )
}

export default ControlPresupuesto
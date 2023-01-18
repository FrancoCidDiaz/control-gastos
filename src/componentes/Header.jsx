import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'
import { useEffect } from 'react'


const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, gastoEditar }) => {
  return (
    <header>
        <h1>Control de Gastos</h1>
        
        {isValidPresupuesto ? ( <ControlPresupuesto
        presupuesto={presupuesto}
        gastos={gastos}
        /> )
      : (<NuevoPresupuesto
       
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}/>)  
      }

        
    </header>
  )
}

export default Header
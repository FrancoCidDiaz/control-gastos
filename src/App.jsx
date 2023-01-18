import { useState } from 'react'
import { useEffect } from 'react'
import Header from './componentes/Header'
import {generarId} from './helpers/index'
import IconoNuevoGasto from '../src/img/nuevo-gasto.svg'
import Modal from './componentes/Modal'
import ListadoGastos from './componentes/ListadoGastos'


function App() {
const [presupuesto, setPresupuesto] = useState(0)
const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
const [modal, setModal] = useState(false)
const [animarModal, setAnimarModal] = useState(false)
const [gastos, setGastos] = useState([])
const [gastoEditar, setGastoEditar] = useState({})
// const [editar, setEditar] = useState(false)


useEffect(() => {
  if( Object.keys(gastoEditar).length > 0 ) {
      setModal(true)

      setTimeout(() => {
          setAnimarModal(true)
      }, 500);
  }
}, [ gastoEditar ])


// const modificarEditar = () => {setEditar(false)}






const handleNuevoGasto = () => {
  setModal(true);
  setGastoEditar({})

  setTimeout(() => {
    setAnimarModal(true)
  }, 500);

}

const guardarGasto = gasto => {
if(gasto.id){
const gastosActualizados = gastos.map( gastoState => gastoState.id ===
   gasto.id ? gasto : gastoState)
   setGastos(gastosActualizados)
   setGastoEditar({})
   }
else{
  gasto.id = generarId();
  gasto.fecha = Date.now();
setGastos([...gastos, gasto ])

}




}

const eliminarGasto = id => {

  const gastosActualizados = gastos.filter( gasto => gasto.id !== id  )
setGastos(gastosActualizados)

}

  return (
    <div className= {modal ? 'fijar' : ''}>
     <Header
     gastos={gastos}
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     isValidPresupuesto={isValidPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}
     gastoEditar={gastoEditar}
     />
  
  {isValidPresupuesto && (

    <>
    <main>

<ListadoGastos
gastos={gastos}
setGastoEditar={setGastoEditar}
gastoEditar={gastoEditar}
eliminarGasto={eliminarGasto}
/>


    </main>
<div className='nuevo-gasto'>
<img onClick={handleNuevoGasto} src={IconoNuevoGasto} alt= "icono nuevo gasto" />


</div>

</> )}


{modal && <Modal
setModal= {setModal}
animarModal= {animarModal}
setAnimarModal= {setAnimarModal}
guardarGasto= {guardarGasto}
gastoEditar={gastoEditar}
setGastoEditar={setGastoEditar}

/>}
    </div>
  )
}

export default App

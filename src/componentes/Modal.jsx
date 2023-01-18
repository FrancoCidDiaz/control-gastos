import React from 'react'
import CerrarBtn from '../img/cerrar.svg'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import Gasto from './Gasto'
const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

const [nombre, setNombre] = useState('')
const [cantidad, setCantidad] = useState('')
const [categoria, setCategoria] = useState('')
const [mensaje, setMensaje] = useState('')
const [id, setId] = useState('')
const [fecha, setFecha] = useState('')
// const [editar, setEditar] = useState(false)


useEffect(() => { 
  
  if(Object.keys(gastoEditar).length > 0){

   setNombre(gastoEditar.nombre)
   setCantidad(gastoEditar.cantidad)
   setCategoria(gastoEditar.categoria)
   setId(gastoEditar.id)
   setFecha(gastoEditar.fecha)
  //  setEditar(true)
  }

 
}, [])


const handleSubmit = (e) => {
    e.preventDefault();
  if([nombre, cantidad, categoria].includes('')){
    setMensaje('Todos los campos son obligatorios')
    setTimeout(() => {
        setMensaje('')
    }, 3000);
    return
  }
  guardarGasto({nombre, cantidad, categoria,id, fecha})
  setModal(false)
}

   const ocultarModal = () => {
   
    setAnimarModal(false);
    setGastoEditar(false)
    setTimeout(() => {
        setModal(false);
       }, 500);
   } 
   

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img  src= {CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
            
        </div>

<form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} >
<legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>
{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
<div className='campo'>
    <label htmlFor="nombre">Nombre Gasto</label>
    <input value={nombre} id='nombre' type="text" placeholder='Añade el nombre de el gasto'
      onChange={e => setNombre(e.target.value)} />
</div>

<div className='campo'>
    <label  htmlFor="cantidad">Cantidad</label>
    <input onChange={e => setCantidad(e.target.value)} value={cantidad} id='cantidad' type="number" placeholder='Añade la cantidad del gasto'  />
</div>

<div className='campo'>
    <label htmlFor="categoria">Categoria</label>
    <select value={categoria} onChange={e => setCategoria(e.target.value)} id="categoria">
        <option value="">-- Seleccione --</option>
        <option value="ahorro">Ahorro</option>
        <option value="comida">Comida</option>
        <option value="casa">Casa</option>
        <option value="gastos">Gastos Varios</option>
        <option value="ocio">Ocio</option>
        <option value="salud">Salud</option>
        <option value="suscripciones">Suscripciones</option>
    </select>
</div>


<input type="submit"
       value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
 />

</form>

    </div>
  )
}

export default Modal
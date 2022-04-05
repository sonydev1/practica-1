import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {collection, getDocs,getDoc, deleteDoc} from 'firebase/firestore'
import {db} from'../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util';
const MySwal = withReactContent(Swal)


function Show (){
  //configuracion de los hooks
  const [clients, setClients] = useState([])
  //referenciar a al abase de datos
  const clientesCollection = collection(db,"clientes")
  //mostar los clientes
  const getClients = async() =>{
    const data = await getDocs(clientesCollection)
    //console.log(data.docs)
    setClients(
      data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
    )
    console.log(clients)
  }
  //eliminar un cliente

  //usamos useeffect
  useEffect(()=>{
    getClients()
  }, [])
  return (
  
    
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-primary mt-2 mb-2'>New Client</Link>
          </div>
        </div>
      </div>
    </div>
      
    
     
  )
}

export default Show;
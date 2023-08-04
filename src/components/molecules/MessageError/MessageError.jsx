import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export const MessageError = ({title, text, redirect}) => {

    const navigate = useNavigate();

    const showError = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Ups, ocurrio un error en el servidor',
            text: 'Disculpanos, estamos trabajando en solucionarlo',
            confirmButtonColor: '#DF013A',
            confirmButtonText: 'Cerrar',
        }).then(() => {
            redirect && navigate('/404')
        })
    }

  return (
   <>{showError()}</>
  )
}

import Swal from "sweetalert2";

const messageApiError = (
    title='Ups, ocurrio un error en el servidor',
    text='Disculpanos, estamos trabajando en solucionarlo'
    ) => {
    Swal.fire({
        icon: 'warning',
        title: title,
        text: text,
        confirmButtonColor: '#DF013A',
        confirmButtonText: 'Cerrar',
    }) 
}

export default messageApiError;
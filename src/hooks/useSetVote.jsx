import Swal from 'sweetalert2';
const urlApi = import.meta.env.VITE_BACKEND_API_URL;

const useSetVote = async (body, name) => {
  try {
    const response = await fetch(`${urlApi}/submit-webform`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      const data = await response.json();
      Swal.fire({
        icon: 'success',
        title: 'Gracias',
        text: `Tu voto fue registrado exitosamente. Ahora tu amigo ${name} está más cerca de ganar.`,
        confirmButtonColor: '#DF013A',
        confirmButtonText: 'Cerrar',
      })
      return { data, serviceStatus: true }
    } else {
      const errorData = await response.json();
      console.log(errorData.error);
      if(errorData.error == 'You have already submitted the form.') {
        Swal.fire({
          icon: 'warning',
          title: 'No se ha creado tu voto porque ya has participado en el proceso',
          text: '¡Solo puedes participar una vez!',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
        })
      }

    }
  } catch (error) {
    console.error(error);
  }
};

export default useSetVote;

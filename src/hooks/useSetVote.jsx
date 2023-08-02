import Swal from 'sweetalert2';

const useSetVote = async (body, name) => {
  try {
    const response = await fetch('https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/submit-webform', {
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
          title: 'Tu voto ya fue registrado',
          text: '¡Gracias por participar!',
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

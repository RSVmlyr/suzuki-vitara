import Swal from 'sweetalert2';

const useSetForm = async (body) => {
  console.log(body);
  try {
    const response = await fetch('https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/register-photo', {
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
        title: 'Tú foto ha pasado a revisión',
        text: 'Una vez sea aprobada, recibirás una notificación vía correo electrónico para que compartas la foto con tus amigos y voten por ti.',
        confirmButtonColor: '#DF013A',
        confirmButtonText: 'Cerrar',
        customClass: {
          body: 'custom-swal-body',
        }
      })
      return data; // Devolvemos los datos si la solicitud es exitosa
    } else {
      const errorData = await response.json();
      if (errorData.error === 'User with the provided email already exists.') {
        Swal.fire({
          icon: 'warning',
          title: 'Correo electrónico',
          text: 'El usuario con el correo electrónico proporcionado ya existe.',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
          customClass: {
            body: 'custom-swal-body',
          }
        })
      } else if (errorData.error === 'User with the provided email already exists.') {

      }
    }
  } catch (error) {
    console.error(error);
  }
};

export default useSetForm;

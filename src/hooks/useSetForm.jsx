import Swal from 'sweetalert2';
const urlApi = import.meta.env.VITE_BACKEND_API_URL;

const useSetForm = async (body) => {
  try {
    const response = await fetch(`${urlApi}/register-photo`, {
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
        title: 'Tu foto y tu información han pasado a revisión',
        text: 'Una vez sea aprobado el registro, recibirás una notificación vía correo electrónico y/o mensaje de texto para que compartas la foto con tus amigos y voten por ti.',
        confirmButtonColor: '#DF013A',
        confirmButtonText: 'Cerrar',
      })
      return { data, serviceStatus: true }
    } else {
      const errorData = await response.json();
      // console.log(errorData.error);
      if (errorData.error === 'User with the provided email already exists.') {
        Swal.fire({
          icon: 'warning',
          title: 'Tu Correo Electrónico ya se encuentra registrado',
          // text: '',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
        })
      } else if (errorData.error === 'Number id is already used by another user.') {
        Swal.fire({
          icon: 'warning',
          title: 'Tu Cédula ya se encuentra registrada',
          // text: '',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
        })
      } else if (errorData.error === 'User with the provided vin or car plate, does not exist.') {
        Swal.fire({
          icon: 'warning',
          title: 'Tu código VIN no ha sido activado',
          text: 'Este podrá ser activado hasta 3 días hábiles después de la entrega del vehículo.',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
        })
      } else if (errorData.error === 'it was already used.') {
        Swal.fire({
          icon: 'warning',
          title: 'Tu código VIN ya está registrado',
          text: 'Para registrarte debes usar un nuevo código VIN.',
          confirmButtonColor: '#DF013A',
          confirmButtonText: 'Cerrar',
        })
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export default useSetForm;

import Swal from 'sweetalert2';

const useSetVote = async (body) => {
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
        title: 'Tu foto y tu información han pasado a revisión',
        text: 'Una vez sea aprobado el registro, recibirás una notificación vía correo electrónico y/o mensaje de texto para que compartas la foto con tus amigos y voten por ti.',
        confirmButtonColor: '#DF013A',
        confirmButtonText: 'Cerrar',
      })
      return { data, serviceStatus: true }
    } else {
      const errorData = await response.json();
      // console.log(errorData.error);
    }
  } catch (error) {
    console.error(error);
  }
};

export default useSetVote;
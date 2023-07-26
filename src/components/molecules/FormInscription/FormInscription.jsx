import useGetDealers from '../../../hooks/useGetDealers'
import UploadImage from '../../atoms/UploadImage/UploadImage'
import './FormInscription.scss'

const FormInscription = () => {
  const { data } = useGetDealers('https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/list-dealers')

  return (
  
    <div className='form--inscription'>
      <form className='form--inscription__container'>
        <h2 className='title'>Formulario de inscripción</h2>
        <div className='form--inscription__elements'>

          <div className='form--inscription__item'>
            <label htmlFor="nombreCompleto">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              placeholder="Nombre Completo"
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="cedula">
              Cédula:
            </label>
            <input
              type="text"
              id="cedula"
              name="cedula"
              placeholder="123456789"
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="celular">
              Celular:
            </label>
            <input
              type="tel"
              id="celular"
              name="celular"
              placeholder='000 000 0000'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="correoElectronico">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              placeholder='ejemplo@dominio.com'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="ciudad">
              Ciudad:
            </label>
            <select
              id="ciudad"
              name="ciudad"
              required
            >
              <option value="">Seleccionar</option>
              <option value="ciudad1">Ciudad 1</option>
              <option value="ciudad2">Ciudad 2</option>
              {/* Agrega más opciones de ciudades aquí */}
            </select>
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="direccionDomicilio">
              Dirección de domicilio:
            </label>
            <input
              type="text"
              id="direccionDomicilio"
              name="direccionDomicilio"
              placeholder='...'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="placaVehiculo">
              Placa del vehículo:
            </label>
            <input
              type="text"
              id="placaVehiculo"
              name="placaVehiculo"
              placeholder='XXX 000'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="codigoVIN">
              Código VIN del vehículo:
            </label>
            <input
              type="text"
              id="codigoVIN"
              name="codigoVIN"
              placeholder='00X00X00XX 00'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="concesionario">
              Concesionario donde compró el vehículo:
            </label>
            <select
              id="concesionario"
              name="concesionario"
              required
            >
              <option value="">Seleccionar</option>
              {data && data.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="placaVehiculo">
              Subir fotografía:
            </label>
            <UploadImage />
          </div>

        </div>

        <div className='form--inscription__terms'>
          <input
            type="checkbox"
            id="terminosYCondiciones"
            name="terminosYCondiciones"
            required
          />
          <label htmlFor="terminosYCondiciones">
            Confirmo que he leído la política de protección de datos personales, acepto recibir información con fines de seguimiento a mi cotización, autorizo el tratamiento de mis datos personales conforme los siguientes términos y condiciones.
          </label>
        </div>

        <div className='form--inscription__actions'>
          <button type="submit" className='btn__red'>Registrarse</button>
        </div>
      
      </form>
    </div>
  )
}

export default FormInscription
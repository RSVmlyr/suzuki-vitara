import React, { useState } from 'react';
import useGetDealers from '../../../hooks/useGetDealers'
import useCities from '../../../hooks/useCities';

import UploadImage from '../../atoms/UploadImage/UploadImage'
import { Link } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';
import './FormInscription.scss'

const FormInscription = () => {
  const { data } = useGetDealers('https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/list-dealers')
  const cities = useCities();

  const [isVerified, setIsVerified] = useState(false);

  const handleFormSubmit = (e) => {
    const formInscription = document.querySelector('.form--inscription')
    let srcUploadImageFile
    if (formInscription) {
      const uploadImageFile = formInscription.querySelector('.upload--image__file')
      srcUploadImageFile = uploadImageFile.getAttribute('src')
    }
    const body = {
      "field_names": e.target.name.value,
      "field_dealers": e.target.dealer.value,
      "field_number_id": e.target.identification.value,
      "field_cellphone": e.target.phoneNumber.value,
      "email": e.target.email.value,
      "field_city": e.target.city.value,
      "field_address": e.target.address.value,
      "field_vin": e.target.codeVin.value,
      "car_plate": e.target.vehiclePlate.value,
      "imagen": srcUploadImageFile
    }
    console.log( body );

    e.preventDefault();
    if (isVerified) {
      // Realizar el envío del formulario
      console.log('Formulario enviado con éxito!');
    } else {
      console.log('Por favor, verifica el captcha antes de enviar el formulario.');
    }

  };

  const handleRecaptchaChange = (value) => {
    // El valor "value" indica si el captcha ha sido verificado correctamente.
    setIsVerified(!!value);
  };

  return (
  
    <div className='form--inscription'>
      <form className='form--inscription__container' onSubmit={handleFormSubmit}>
        <h2 className='title'>Formulario de inscripción</h2>
        <div className='form--inscription__elements'>

          <div className='form--inscription__item'>
            <label htmlFor="name">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre Completo"
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="identification">
              Cédula:
            </label>
            <input
              type="text"
              id="identification"
              name="identification"
              placeholder="0000000000"
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="phoneNumber">
              Celular:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder='000 000 0000'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="email">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='ejemplo@dominio.com'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="city">
              Ciudad:
            </label>
            <select
              id="city"
              name="city"
              required
            >
              <option value="">Seleccionar</option>
              {cities && cities.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="address">
              Dirección de domicilio:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder='...'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="vehiclePlate">
              Placa del vehículo:
            </label>
            <input
              type="text"
              id="vehiclePlate"
              name="vehiclePlate"
              placeholder='XXX 000'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="codeVin">
              Código VIN del vehículo:
            </label>
            <input
              type="text"
              id="codeVin"
              name="codeVin"
              placeholder='00X00X00XX 00'
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="dealer">
              Concesionario donde compró el vehículo:
            </label>
            <select
              id="dealer"
              name="dealer"
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
            id="terms"
            name="terms"
            required
          />
          <label htmlFor="terms">
            Confirmo que he leído la política de protección de datos personales, acepto recibir información con fines de seguimiento a mi cotización, autorizo el tratamiento de mis datos personales conforme los siguientes <Link to="/condiciones">términos y condiciones</Link>.
          </label>
        </div>

        {/* <div className='form--inscription__captcha'>
          <ReCAPTCHA
            sitekey="TU_CLAVE_DEL_SITIO"
            onChange={handleRecaptchaChange}
          />
        </div> */}

        <div className='form--inscription__actions'>
          <button type="submit" className='btn__red'>Registrarse</button>
        </div>
      
      </form>
    </div>
  )
}

export default FormInscription
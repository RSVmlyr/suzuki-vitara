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
    const body = {
      "field_names": "Edwin Mesa",
      "field_type_id": "cc",
      "field_number_id": "1111107",
      "field_cellphone": "1111111",
      "email": "ejemplo02@example.com",
      "field_city": "b",
      "field_address": "aaa",
      "field_vin": "JS3TE944274204712",
      "car_plate": "ebs074",
      "imagen": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACgCAYAAABkDQwTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARmSURBVHgB7d0xTxRBGIfx92QRiJErKCgIIpWEBr6AhaGA1ljZQGFDYY2fAWsKWmjstNXOjtaKXOcBIYZCOGngBA7ZgkRihL13l/nf7D6/REpF78nM3fA6W7NIDIxMXxoyq110Jk9bjaZF4IEBYkQIucQidPK53/CvqaVz2zmI710LKyHkiBByRAg5IoQcEUKOCCFHhJCL8pxwaOHMUB6shJAjQsjVLDDvNMxh48iQ3exc3Xb3u19jFNM3rISQI0LIST8d3zUNw6fgYjQ2EpsY/f87L/X0DSsh5IgQckQIOSKEHBFCjgghR4SQk54Tcg4YRnoO2MtYCSFHhJBzT9EwDdPb+luPLLn61S3vj/DyTN9EOVkd2t6+b8MYH+sY7kaEGczM1c2DVT+bQiJkGqacQk3f8MEEckQIOSKEHBFCjgghR4SQI0LIFXJOyDlgOYWavmElhBwRQi5hGgZ/S39U5/HsTfv7bt+0dSudvqnUAMP65oD9Og53B9Tq2qDlsbzUtvrjOJ5LUjvvu/rq+16rFeHGoOumKq/VtSHL4/XL39FEmMeNCJmGQRG6nb7hgwnkiBByRAg5IoQcEUKOCCFHhJAjQsgRIeSIEHJECDmuAclgebFt9eHw98rUh8s/vJAiwgyWl07tCZcb3Ru2Y8gRIeSIEHJECDkihBwRQo4IIUeEkCNCyBEh5IgQckQIuUoNMKSDCJ67aD58emgeMd0lo1StCBfb5jE7V3fdYVOVu2TyYjuGHBFCjgghR4SQI0LIESHkiBByRAg5IoQcEUKOCCFHhJDjGpAMmL65X0SYAdM394vtGHJECDkihBwRQo4IIUeEkCNCyBEh5IgQckQIOSKEHBFCrhIDDOubA64pmLwUf2aMqhHhxqBrmgVh8MpAjgghR4SQI0LIESHkiBByRAg5IoQcEUKOCCFHhJAjQshVYoDBe5fMtdW1IfN49/bEPOrD1XoAz40Idw7K+Zf33iVzzR/hqVXRzkH6NXtLNyKcWjo3IK/5le464j0h5NKVsGkOe/sPnprD+FjH0Lu8b8lG6ta62oZb5pC0f25PmsPM3LTruz1sHBl61/zKhSvEV8/txdbW9jdzYDtGIT5+7bhWwVQhRzQTo7cff5T1U3fZhXpdC4mwsXH7bzO0cGaIz5f3fbeGmJ6mFBEi2zHkiBByRAg5IoQcEUKOh+lk4J2GQTaFRFj2c0CmYe5XIREyfVNO3U7DePGeEHJ5VsKmOTB9E8bOj5olx91vpUnie13zCH6L48AI0zcheJ8wWrvoTJ62Gk0LiO0YctIjGqZvwuj1f2dphEzfhBFqGsaL7RhyRAg5IoQcEUKOCCFHhJCTHtFwDhhGqGkYL2mETN+EEWoaxovtGHKKlbBpDt7pm6pKksumRSKaZ6F6p2+qSjEN48V2DLko/6PTXVMhVRXraUOUEd41fVNV6mkYL7ZjyBEh5IgQckQIOSKEHBFCLsqzDqZvyiXKCJm+KRe2Y8jFtBI2DaX0By0JLczGkB58AAAAAElFTkSuQmCC="
    }

    console.dir(e.target.name);
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
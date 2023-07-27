import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
// import { useForm } from 'react-hook-form';
import useGetDealers from '../../../hooks/useGetDealers'
import useCities from '../../../hooks/useCities';

import UploadImage from '../../atoms/UploadImage/UploadImage'
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './FormInscription.scss'
import useSetForm from '../../../hooks/useSetForm';

const FormInscription = () => {
  const { data } = useGetDealers('https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/list-dealers')
  // const endPointPhoto = 'https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/register-photo'
  const [uniqueCities, setUniqueCities] = useState([]);
  const [selectedValueCity, setSelectedValueCity] = useState('');
  const [selectedDealers, setSelectedDealers] = useState([]);
  const [dataDealers, setDataDealers] = useState([])

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const citiesSet = new Set(data.map((item) => item.city.toLowerCase().trim()));
      const sortedCities = Array.from(citiesSet).sort();
      setUniqueCities(sortedCities);
    }
  }, [data]);

  const handleSelectChangeDealers = (event) => {
    const selectedDealer = event.target.value;
    setSelectedDealers(selectedDealer);
  };

  const [isVerified, setIsVerified] = useState(false);
  // const formRef = useRef(null);

  const formInscription = document.querySelector('.form--inscription')

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let srcUploadImageFile
    if (formInscription) {
      const uploadImageFile = formInscription.querySelector('.upload--image__file')
      srcUploadImageFile = uploadImageFile.getAttribute('src')
    }
    const bodyForm = {
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

    const response = await useSetForm(bodyForm);
    
    // if (isVerified) {
    //   console.log('Formulario enviado con éxito!');
    // } else {
    //   console.log('Por favor, verifica el captcha antes de enviar el formulario.');
    // }

    // formRef.current.reset();

  };

  const handleRecaptchaChange = (value) => {
    // El valor "value" indica si el captcha ha sido verificado correctamente.
    setIsVerified(!!value);
  };

  const handleSelectChangeCity = (event) => {
    const selectedOption = event.target.value;
    // console.log('C', selectedOption);
    let dealerSelect = formInscription.querySelector('#dealer');
    // console.log('D', data);
    const filteredData = data && Array.isArray(data)
    ? data.filter((item) => item.city.toLowerCase() === selectedOption)
    : [];
    setDataDealers(filteredData)
    // console.log(dataDealers);
    if (formInscription) {
      dealerSelect.removeAttribute('disabled');
      if (selectedOption === '') {
        dealerSelect.setAttribute('disabled', 'true');
      }
    }

    setSelectedValueCity(selectedOption);

  };

  return (
    // ref={formRef}
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
              onChange={handleSelectChangeCity}
            >
              <option value="">Seleccionar</option>
              {uniqueCities && uniqueCities.map((city) => (
                <option key={city} value={city}>{city}</option>
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
              disabled={selectedValueCity === ""}
              onChange={handleSelectChangeDealers}
            >
              <option value="">Seleccionar</option>
              {dataDealers.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
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

        <div className='form--inscription__captcha'>
          <ReCAPTCHA
            sitekey="TU_CLAVE_DEL_SITIO"
            onChange={handleRecaptchaChange}
          />
        </div>

        <div className='form--inscription__actions'>
          <button className='btn__red'>Registrarse</button>
        </div>
      
      </form>
    </div>
  )
}

export default FormInscription
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import useGetDealers from '../../../hooks/useGetDealers'
import UploadImage from '../../atoms/UploadImage/UploadImage'
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './FormInscription.scss'
import useSetForm from '../../../hooks/useSetForm';
import Swal from 'sweetalert2';

const FormInscription = () => {
  const { data } = useGetDealers('https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/list-dealers')
  // const endPointPhoto = 'https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter/register-photo'
  const [uniqueCities, setUniqueCities] = useState([]);
  const [selectedValueCity, setSelectedValueCity] = useState('');
  const [selectedDealers, setSelectedDealers] = useState([]);
  const [dataDealers, setDataDealers] = useState([])

  const formInscription = document.querySelector('.form--inscription')

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

  const formRef = useRef(null)
  const captcha = useRef(null)
  const [uploadImageKey, setUploadImageKey] = useState(Date.now());
  const [captchaKey, setCaptchaKey] = useState(Date.now());
  const onChangeCaptcha = () => {
    if (captcha.current.getValue()) {
      console.log('El usuario NO es un ROBOT.');
    }
  }

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

  const [name, setName] = useState('');
  const handleNameChange = (e) => {
    const filteredName = e.target.value.replace(/\d/g, '');
    setName(filteredName);
  };

  const [identification, setIdentification] = useState('');
  const handleIdentificationChange = (e) => {
    const filteredIdentification = e.target.value.replace(/\D/g, '');
    setIdentification(filteredIdentification);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumber = (e) => {
    const inputPhoneNumber = e.target.value;
    const filteredPhoneNumber = inputPhoneNumber.replace(/\D/g, '');
    setPhoneNumber(filteredPhoneNumber);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (captcha.current && captcha.current.getValue()) {
      console.log('El usuario NO es un ROBOT.');
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
        "field_vin": e.target.codeVin.value.toUpperCase(),
        "car_plate": e.target.vehiclePlate.value.toUpperCase(),
        "imagen": srcUploadImageFile
      }

      console.log(bodyForm);

      const response = await useSetForm(bodyForm);
      if (response && response.serviceStatus) {
        setName('');
        setIdentification('');
        setPhoneNumber('');
        setEmail('');
        setSelectedValueCity('');
        setDataDealers([]);
        captcha.current = ''
        response.serviceStatus && formRef.current.reset();
      }
      setUploadImageKey(Date.now());
      setCaptchaKey(Date.now());
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'reCAPTCHA!',
        text: 'Acepta el captcha para enviar el formulario.',
        confirmButtonColor: '#DF013A',
        confirmButtonText: 'Cerrar',
      })
    }
  };

  return (
    <div className='form--inscription'>
      <form ref={formRef} id="form--inscription__container" className='form--inscription__container' onSubmit={handleFormSubmit}>
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
              value={name}
              onChange={handleNameChange}
              pattern="^[^\d]+$"
              title="El nombre no debe contener números."
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
              value={identification}
              onChange={handleIdentificationChange}
              pattern="^\d+$"
              title="Ingresa solo números en la cédula."
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
              maxLength={10}
              minLength={10}
              value={phoneNumber}
              onChange={handlePhoneNumber}
              pattern="[0-9]{10}"
              title="Ingresa solo 10 dígitos en el celular."
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
              value={email}
              onChange={handleEmailChange}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Ingresa un correo electrónico válido."
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
              placeholder='XXX000'
              maxLength={6}
              minLength={6}
              required
            />
          </div>

          <div className='form--inscription__item'>
            <label htmlFor="codeVin">
              Últimos 6 dígitos del VIN del vehículo:
            </label>
            <input
              type="text"
              id="codeVin"
              name="codeVin"
              placeholder='00X00X'
              maxLength={6}
              minLength={6}
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
            <UploadImage key={uploadImageKey}/>
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
            Confirmo que he leído la política de protección de datos personales, acepto recibir información con fines de seguimiento a mi cotización, autorizo el tratamiento de mis datos personales conforme los siguientes <Link to="/condiciones" target="_blank" rel="noopener noreferrer">términos y condiciones</Link>.
          </label>
        </div>

        <div className='form--inscription__captcha'>
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LeGwWEnAAAAAJOkAEBu5t3fs4rd0ATWBGgHTlDJ"
            onChange={onChangeCaptcha}
            key={captchaKey}
            required
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
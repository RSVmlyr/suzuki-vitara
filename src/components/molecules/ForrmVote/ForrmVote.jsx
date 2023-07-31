
import { useState } from 'react';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import useCities from '../../../hooks/useCities';
import useSetVote from '../../../hooks/useSetVote';
import Swal from 'sweetalert2';

import './ForrmVote.scss'

const FormVote = () => {
  const cities = useCities();
  const formRef = useRef(null)
  const captcha = useRef(null)
  const [captchaKey, setCaptchaKey] = useState(Date.now());

  const onChangeCaptcha = () => {
    if (captcha.current.getValue()) {
      console.log('El usuario NO es un ROBOT.');
    }
  }

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
      const bodyForm = {
        "field_names": e.target.name.value,
        "field_number_id": e.target.identification.value,
        "field_cellphone": e.target.phoneNumber.value,
        "email": e.target.email.value,
        "field_city": e.target.city.value,
      }

      console.log(bodyForm);

      // const response = await useSetForm(bodyForm);
      // if (response && response.serviceStatus) {
      //   setName('');
      //   setIdentification('');
      //   setPhoneNumber('');
      //   setEmail('');
      //   setSelectedValueCity('');
      //   captcha.current = ''
      //   response.serviceStatus && formRef.current.reset();
      // }

      setName('');
      setIdentification('');
      setPhoneNumber('');
      setEmail('');
      // setSelectedValueCity('');
      captcha.current = ''
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
      <form ref={formRef} id='form--vote' className='form--vote' onSubmit={handleFormSubmit}>
        <h2 className='title'>Ingresa la siguiente información para que tu voto sea válido.</h2>
        <div className='form--vote__elements'>

          <div className='form--vote__item'>
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

          <div className='form--vote__item'>
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

          <div className='form--vote__item'>
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

          <div className='form--vote__item'>
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

          <div className='form--vote__item'>
            <label htmlFor="city">
              Ciudad:
            </label>
            <select
              id="city"
              name="city"
              required
            >
            <option value="">Seleccionar</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
            </select>
          </div>

        </div>

        <div className='form--vote__captcha'>
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LeGwWEnAAAAAJOkAEBu5t3fs4rd0ATWBGgHTlDJ"
            onChange={onChangeCaptcha}
            key={captchaKey}
            required
          />
        </div>

        <div className='form--vote__actions'>
          <button className='btn__red'>Votar</button>
        </div>
      
      </form>
  )
}

export default FormVote
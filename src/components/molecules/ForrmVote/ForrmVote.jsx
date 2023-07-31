
import ReCAPTCHA from 'react-google-recaptcha';
import './ForrmVote.scss'

const FormVote = () => {

  return (
      <form  className='form--vote'>
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
            </select>
          </div>

        </div>

        <div className='form--vote__captcha'>
          <ReCAPTCHA
            sitekey="6LeGwWEnAAAAAJOkAEBu5t3fs4rd0ATWBGgHTlDJ"
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
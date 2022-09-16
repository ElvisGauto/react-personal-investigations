import React, { useState } from 'react'

export const AcceptCookies = () => {

    const [cookies, setCookies] = useState(false);

  return (
    <div>
        <label htmlFor="cookieCheckbox">Acepta las cookies</label>
        <input
            type="checkbox"
            id='cookieCheckbox'
            onClick={() => setCookies(!cookies)}
        />
        <article title='confirmación cookies'>
            { cookies ? 'Cookies aceptadas' : 'Debes aceptar las cookies' }
        </article>
    </div>
  )
}

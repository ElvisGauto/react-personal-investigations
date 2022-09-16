import React, { useState } from 'react'

export const TextBox = () => {

  const [bgColor, setBgColor] = useState('indigo'); 

  return (
    <div>
        <article
            title='párrafo principal'
            style={{ backgroundColor: bgColor }}
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sit quod magnam cum earum hic in! Optio animi doloribus
            accusantium pariatur repudiandae harum eveniet quasi fuga,
            qui officiis. Placeat, tempore nihil.
        </article>
        <button
            onClick={() => setBgColor(bgColor === 'indigo' ? 'tomato' : 'indigo')}
        >Pulsa para modificar</button>
    </div>
  )
}

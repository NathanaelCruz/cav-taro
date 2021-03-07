import React, { useEffect, useState } from 'react'
import { CardContainer } from '../styles/components/card/style'
import Cloaths from '../../cloaths.json'


const Card: React.FC = () => {

  const [ listCav, setListCav ] = useState({
    cloth: '',
    type: '',
    image: '',
    name: ''
  })


  useEffect(() => {
    const indice = Math.floor(Math.random() * (Object.keys(Cloaths).length - 1) + 1)
    setListCav(Cloaths[indice])
  }, [])

  return (
    <CardContainer>
      <div className="c-cardContainer__content">

        <div className="c-cardContainer__front"></div>
        <div className="c-cardContainer__back">

          <div className="c-cardContainer__backContent">
            <img src={`${listCav.image}`} alt="" className="c-cardContainer__image"/>
            <p className="c-cardContainer__title">
              {`Armadura de ${listCav.type} de ${listCav.cloth}`}
            </p>
            <p className="c-cardContainer__userCloth">
              {`Já ouviu falar do ${listCav.name} ... ?`}
            </p>
          </div>
        </div>

      </div>
    </CardContainer>
  )
}

export default Card
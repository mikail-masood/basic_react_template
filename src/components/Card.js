import React from 'react'
import Carditems from './Carditems'
import './Card.css'

function Card() {
  return (
    <div className='cards'>
      <h1>Chjeck out this shiz</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Carditems
              src='media/images/img-9.jpg'
              text='explore this stuff'
              label= "Adventure"
              path='/services'
            />
            <Carditems
              src='media/images/img-2.jpg'
              text='travel through this'
              label= "Adventure"
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Carditems
              src='media/images/img-9.jpg'
              text='explore this stuff'
              label= "Adventure"
              path='/services'
            />
            <Carditems
              src='media/images/img-2.jpg'
              text='travel through this'
              label= "Adventure"
              path='/services'
            />
            <Carditems
              src='media/images/img-2.jpg'
              text='travel through this'
              label= "Adventure"
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card

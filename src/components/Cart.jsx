import { useState } from 'react'
import Header from './Header'
import "../styles/Cart.css"
import Icon from '@mdi/react';
import { mdiCartOff } from '@mdi/js';


function Cart({cartNum, cart}) {
  function Card({cart}) {
    return (
      <div className='cartCards'>
        {cart.map((value) => {
          return (
            <div className='cartCard'>
              <h2>{value.title}</h2>
              <img src={value.image} alt={"Image of "+value.title} />
              <h3>{"£" + value.price}</h3>
            </div>
          );
        })}
      </div>
    );
  }
  console.log()
  return (
    <>
      <Header cartNum = {cartNum}></Header>
      {(cartNum === 0)?
      <>
        <h1>Your cart is empty</h1>
        <Icon path={mdiCartOff} size={3} />
      </>: 
      <Card cart={cart}></Card>}
    </>
  )
}

export default Cart
import { useState } from 'react'
import Header from './Header'


function Cart({cartNum}) {

  return (
    <>
      <Header cartNum = {cartNum}></Header>
    </>
  )
}

export default Cart
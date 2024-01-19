import { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'
import Header from './Header';



function Home({cartNum}) {

  return (
    <>
      <Header cartNum = {cartNum}></Header>
    </>
  )
}

export default Home
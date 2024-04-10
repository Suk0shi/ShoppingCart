import { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'
import Header from './Header';
import onlineShop from '../assets/onlineShop.svg'



function Home({cartNum}) {

  return (
    <>
      <Header cartNum = {cartNum}></Header>
      <div className="homePage">
        <h3>Welcome to FakeStore</h3>
        <img src={onlineShop} alt="Graphic of a webstore" />
      </div>
    </>
  )
}

export default Home
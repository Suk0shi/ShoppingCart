import { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'
import Header from './Header';



function Home({cartNum}) {

  return (
    <>
      <Header cartNum = {cartNum}></Header>
      <div className="homePage">
        <h3>Welcome to FakeStore, where style meets sweat – quite literally! What began as a humble venture in my mom's basement has now blossomed into a global phenomenon, threading its way through multiple 'outsourced production centers' and leaving a stylish mark on the world. Our journey is a stitch in time, woven with passion, a touch of hilarity, and a lot of fabric.</h3>
      </div>
    </>
  )
}

export default Home
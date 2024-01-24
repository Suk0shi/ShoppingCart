import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App({cartNum}) {

  return (
    <>
      <Home cartNum={cartNum}></Home>
    </>
  )
}

export default App

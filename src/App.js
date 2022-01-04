import React, { useState } from 'react'
// import Count from './Components/Count/Count'
// import CountFun from './Components/Count/CountFun'
// import style from './Components/PrintOut/print.module.css'
import Home from './Page/Home'

const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
     <Home/>
    </div>
  )
}

export default App

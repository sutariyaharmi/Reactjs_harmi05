import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Task1 from './Challenges/Task1'
// import Task2 from './Challenges/Task2'
// import Task3 from './Challenges/Task3'
import Task4 from './Challenges/Task4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Task1/> */}
     {/* <Task2/> */}
     {/* <Task3/> */}
     <Task4/>
    </>
  )
}

export default App

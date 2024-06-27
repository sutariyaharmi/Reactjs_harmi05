import { useState } from 'react'
import './App.css'
// import Task from './Task'
// import Recipe1 from './Recipe1'
// import Use_Effect from './Use_Effect'
import Use_Effect_Form from './Use_Effect_Form'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
       {/* <Task/> */}
       {/* <Recipe1/> */}
       {/* <Use_Effect/> */}
       <Use_Effect_Form/>
    </>
  )
}

export default App

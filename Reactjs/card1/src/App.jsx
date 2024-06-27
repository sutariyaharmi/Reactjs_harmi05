import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card1 from './Components/Card1'
import img1 from './assets/game.jpeg'
import img2 from './assets/chess.jpg'
import img3 from './assets/game2.jpeg'
import Card3 from './Components/Card3'
import Card2 from './Components/Card2'
import billy from './assets/billy.jpeg'

function App() {

  return (
    <>


    {/* <div className='flex justify-center mt-12'>
    <div style={{}}>
     <Card1 img={img2} name="console"/>
    </div>

    <div style={{}}>
     <Card1 img={img1} name="playground"/>
    </div>

    <div style={{}}>
     <Card1 img={img3} name="Adevanture"/>
    </div>
    </div> */}



     {/* <Card2/> */}

     <div className='flex'>
        <div>
    { <Card3/>}
        </div>

        <div>
    { <Card3 billy={billy}/>
    }
        </div>

        <div>
    { <Card3/>}
        </div>
     </div>
    </>
  )
}

export default App

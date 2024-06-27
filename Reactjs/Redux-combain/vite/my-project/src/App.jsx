
import './App.css'
import {Badge} from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
// import NavBar from './Componetents/NavBar'
// import Services from './Componetents/Services'
// import Blog from './Componetents/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <> 
    //     {/* <NavBar/>
    //     <Services/>
    //     <Blog/> */}

    //        </>

    <>
     <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
    <div className="row">
        <div className="col">1</div>
        <div className="col">1</div>
        <div className="col">1</div>
        <div className="col">1</div>
        <div className="col">1</div>
    </div>
    </>
  )
}

export default App

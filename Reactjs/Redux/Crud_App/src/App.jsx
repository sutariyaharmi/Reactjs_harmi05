import React from "react";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Add from './Pages/Add'
import Edit from "./Pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/Add" element={<Add/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
        {/* <Route path=":id" element={<Edit/>}></Route> */}

        

       </Routes>
    </BrowserRouter>
  );
};

export default App;

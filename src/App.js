
import './App.css';
import Navbar from './components/Navbar'
import Textbox from './components/Textbox'
import Alert from './components/Alert'
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import About from './components/About';


function App() {

  const[theme,newtheme]=useState('light');
  const[alert,newalert] = useState(null);

  function showalert(message)
  {
    newalert(message)
    setTimeout(function(){newalert(null)},2500)

    
  }

  function toggle_theme()
  {
    if(theme==='light')
    {
      newtheme('dark');
      document.body.style.backgroundColor='rgb(12 40 67)'
      showalert("dark mode enabled")
    }
    else
    {
      newtheme('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enabled")
    }
  }
  return (
   <>
    <Router>
    <Navbar  p1="NAVBAR"
             p2="TEXTUTIL"
             p3="HOME"
             p4="ABOUT"
             p5="DROPDOWN"
             p6="BUTTONS"
             mode={theme}
             toggle={toggle_theme}>

    </Navbar>

    <Alert txt={alert}></Alert>

   

    <div className="container my-5">

    <Routes>
          <Route path="/About" element={<About/>}/>
           
        
          <Route path="/" element={<Textbox heading="ENTER YOUR TEXT HERE" mode={theme} showalert={showalert}/>}/>
           
            
         
    </Routes>

    
    </div>
    </Router>

 </>
  



    
    
    
    
    
    
    
    
    );
}

export default App;

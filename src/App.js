import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');    //wheather dark mode enable or not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }) ;
    setTimeout(() => {
      setAlert(null)
    },1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0845a0';
      showAlert("DarkMode has been enabled","success");
      document.title='TextUtils-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode has been enabled","success");
      document.title='TextUtils-LightMode';
    }
  }

  return (
    <>
    <Router>
<Navbar title='TextUtils' about="about" toggleMode={toggleMode} mode={mode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}/>}>
          
          </Route>
</Routes>
 </div>
</Router>
    </> 
  );
}

export default App;

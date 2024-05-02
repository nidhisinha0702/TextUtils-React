import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
{/*import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";*/}

function App() {
        const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
        const [alert, setAlert] = useState(null);
        const showAlert=(message, type)=>{
        setAlert({
          msg: message,
          type: type 
        })
        setTimeout=(()=>{
          setAlert(null);
        },2000);
      }
        const toggleMode=()=> {
        if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#051762';
        showAlert("Dark mode has been enabled","success");
        document.title = 'TextUtils - Dark Mode';
        }
        else {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enabled","success");
          document.title = 'TextUtils - Light Mode';
        }
      }
      return(
        <>
        {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}></Alert>
      <div className='container my-3' >
     {/* <Routes>
          <Route exact path = "/about" element = {<About />}></Route>>
          <Route exact path = "/" element = {<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />}></Route>
      </Routes>*/}
      <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
      </div>
{  /*    </Router>*/}
      </>
);

}

export default App;

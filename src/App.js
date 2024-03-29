
import './App.css';
import Alert from './comonents/Alert';
// import React from 'react'
import Navbar from './comonents/Navbar';
import TextForm from './comonents/TextForm';
import About from './comonents/About';
import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)


  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }
  const toogleMode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been Enabled', 'Success')
      document.title = 'Jayachandra Valusa - Dark Mode'
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'Success')
      document.title = 'Jayachandra Valusa - Light Mode'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Jayachandra" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />}>
            </Route>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>

          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;

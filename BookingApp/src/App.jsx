import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from "./Components/Header.jsx";
import LocationList from "./Components/LocationList.jsx";

function App() {

  return (
    <div className="App">
        <Toaster />
        <Header />
        <LocationList/>
    </div>
  )
}




export default App

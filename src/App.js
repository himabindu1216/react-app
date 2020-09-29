import React, {Component} from 'react'; 
import {useForm} from "react-hook-form";
import firebaseDb from './firebase';
import Register from './components/Register';
import './App.css';

function App() {
   return(
    <Register/>
  );

   }

export default App;
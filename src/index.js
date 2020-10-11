import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom'

// let d = new Date()
// let date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
// let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

// let arr = [{game:"TicTacToe",score:'5:2',date,time},{game:'Guess The Word',score:'3',date,time}]

// localStorage.setItem('record',JSON.stringify(arr))

ReactDOM.render(
	<Router>
   	<App />
   </Router>	,
  document.getElementById('root')
);


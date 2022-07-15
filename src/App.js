import React, { Component } from "react";
import './App.css';

export default class App extends Component{

  mensagem = () => {
    return  <h1>Primeiro desafio com arrow function</h1>
  }


  state = {
    projeto: "Muro",
    tamanho: 20,
  }

  area =  () => {
    return <h1>O tamanho dos muros é: {this.state.tamanho + this.state.tamanho}</h1>
  }

  render(){
    return(
      <div className="card">
        {this.mensagem()}
        {this.area()}
      </div>
    )
  }
}

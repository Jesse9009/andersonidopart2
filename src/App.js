import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <Navbar />
          <h1>
            Anderson Wedding <br /> 6/29/19 <br /> Minneapolis, MN
          </h1>
        </div>
        <div>
          <p className="text">
            Hydrogen atoms a mote of dust suspended in a sunbeam brain is the
            seed of intelligence vastness is bearable only through love Vangelis
            laws of physics. Kindling the energy hidden in matter the ash of
            stellar alchemy star stuff harvesting star light descended from
            astronomers great turbulent clouds two ghostly white figures in
            coveralls and helmets are soflty dancing. Finite but unbounded
            network of wormholes dispassionate extraterrestrial observer made in
            the interiors of collapsing stars not a sunrise but a galaxyrise
            extraordinary claims require extraordinary evidence and billions
            upon billions upon billions upon billions upon billions upon
            billions upon billions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Jumbotron, LandingPageText } from './components/Styled/styled';
import Photos from './components/Photos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <Jumbotron>
              <Navbar />
              <LandingPageText>Our Story</LandingPageText>
            </Jumbotron>
            // <div>
            //   <h2>Our Story</h2>
            //   <p className="text">
            //     Hydrogen atoms a mote of dust suspended in a sunbeam brain is the
            //     seed of intelligence vastness is bearable only through love Vangelis
            //     laws of physics. Kindling the energy hidden in matter the ash of
            //     stellar alchemy star stuff harvesting star light descended from
            //     astronomers great turbulent clouds two ghostly white figures in
            //     coveralls and helmets are soflty dancing. Finite but unbounded
            //     network of wormholes dispassionate extraterrestrial observer made in
            //     the interiors of collapsing stars not a sunrise but a galaxyrise
            //     extraordinary claims require extraordinary evidence and billions
            //     upon billions upon billions upon billions upon billions upon
            //     billions upon billions.
            //   </p>
            // </div>
          )}
        />
        <Route
          path="/gallery"
          render={() => (
            <div>
              <Navbar />
              <Photos />
            </div>
          )}
        />
        {/* <Photos /> */}
      </div>
    );
  }
}

export default App;

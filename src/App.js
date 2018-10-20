import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import {
  Jumbotron,
  LandingPageText,
  OurStory
} from './components/Styled/styled';
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
              <LandingPageText>Home</LandingPageText>
            </Jumbotron>
          )}
        />
        <Route
          path="/ourstory"
          render={() => (
            <div>
              <Jumbotron>
                <Navbar />
                <LandingPageText>Our Story</LandingPageText>
              </Jumbotron>
              <OurStory>
                This is our story!
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at dictum leo. Aliquam rutrum non lorem eget molestie.
                  Vestibulum blandit pulvinar quam, vel venenatis sapien posuere
                  non. Nunc interdum elementum ipsum quis semper. Cras ultrices,
                  ipsum sit amet tincidunt auctor, nisi justo congue tortor, nec
                  commodo lectus dolor vel nisl. Maecenas at tristique eros, ac
                  accumsan lorem. Aliquam in mattis turpis. Curabitur laoreet,
                  sapien vitae suscipit condimentum, enim libero tincidunt
                  libero, ac accumsan arcu tellus eu risus.
                </p>
                <p>
                  Aliquam erat volutpat. Aenean volutpat libero vitae convallis
                  placerat. Aenean blandit, lorem nec lacinia rhoncus, eros
                  felis posuere odio, at porttitor ex nulla in massa. Phasellus
                  dictum porta diam a venenatis. Maecenas libero mauris, tempor
                  eget rutrum eget, egestas id massa. Cras suscipit sapien ac
                  maximus malesuada. Suspendisse sagittis laoreet rutrum.
                </p>
                <p>
                  Ut tempus eget orci faucibus cursus. Curabitur fermentum arcu
                  sit amet consequat imperdiet. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Aliquam tincidunt eget sem eget euismod. Nullam at augue odio.
                  Ut eget sagittis leo. Integer vitae finibus enim. In suscipit
                  enim ut sapien egestas volutpat. Quisque metus sem, commodo
                  vel nulla eu, sagittis eleifend est. Proin posuere tortor sit
                  amet convallis molestie. Pellentesque id arcu vitae libero
                  hendrerit lobortis quis in erat. Integer scelerisque risus sit
                  amet dictum euismod. Curabitur luctus, tortor volutpat semper
                  elementum, nisl diam molestie nulla, semper pharetra metus
                  enim in sem.
                </p>
                <p>
                  Pellentesque et urna euismod, auctor nisl tempus, finibus
                  turpis. Suspendisse potenti. Donec viverra nibh et metus
                  blandit bibendum. Mauris est dui, feugiat vitae dui id,
                  convallis placerat erat. Fusce ex ex, mattis nec imperdiet in,
                  feugiat lacinia lacus. Vestibulum dapibus metus a nisl
                  imperdiet, ac vehicula purus hendrerit. Curabitur tincidunt in
                  odio ut bibendum. Praesent sit amet eros quam. Integer in eros
                  venenatis, sodales nunc sed, congue ex. Cras nec erat mi.
                  Praesent rutrum tincidunt tempus. Praesent in eros facilisis,
                  efficitur ante eu, varius ipsum. Mauris congue tortor ac magna
                  euismod aliquet.
                </p>
                <p>
                  Curabitur at odio a leo cursus maximus id nec erat. Phasellus
                  elementum ante hendrerit dolor cursus, id efficitur nibh
                  venenatis. Praesent fermentum enim non felis pretium
                  elementum. Quisque dapibus nec mi vel auctor. Sed hendrerit
                  velit dolor, at laoreet arcu vestibulum sit amet. Sed in neque
                  a libero dapibus congue quis sed lacus. Etiam fringilla
                  sodales nibh a condimentum. Pellentesque pellentesque maximus
                  velit sit amet tempus. Ut sed libero porta, lacinia est ac,
                  volutpat neque. Mauris egestas quam quis placerat luctus.
                  Morbi dictum commodo tellus a porta. Nullam libero lorem,
                  elementum sed justo et, sollicitudin blandit augue. Aenean a
                  ultricies augue.
                </p>
              </OurStory>
            </div>
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

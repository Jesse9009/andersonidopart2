import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import {
  Jumbotron,
  LandingPageText,
  OurStory,
  Accommodations
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
              <LandingPageText>
                <div className="text">
                  <p>Jesse and Paige's Wedding</p>
                  <p>6/29/19</p>
                  <p>Surly Brewing Company</p>
                </div>
              </LandingPageText>
            </Jumbotron>
          )}
        />
        <Route
          path="/ourstory"
          render={() => (
            <div>
              <Jumbotron>
                <Navbar />
                <LandingPageText>
                  <div className="text">
                    <p>Our Story</p>
                  </div>
                </LandingPageText>
              </Jumbotron>
              <OurStory>
                This is our story!
                <p>
                  It all started in 2015. Jesse and Paige both swiped right on
                  the dating app, Bumble. They chatted for a while before
                  deciding to take their first date to Muddy Pig. After hours of
                  good conversation and pumpkin beers, they knew they’d both hit
                  the jackpot! Fast forward a year and a half: Paige and Jesse
                  started their house hunt. They found the perfect little house
                  blocks from Paige’s family. They moved in March 2017. After
                  years of begging, the two decided it was time to grow their
                  family - enter, Grizzly! In April 2018, Paige and Jesse drove
                  to Bruno, MN and came home with a sweet 12 pound Labradoodle.
                </p>
              </OurStory>
            </div>
          )}
        />
        <Route
          path="/accommodations"
          render={() => (
            <>
              <Navbar />
              <Accommodations>
                More information will be posted soon. Please check back.
              </Accommodations>
            </>
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

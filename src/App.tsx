import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose } from 'grommet-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import Home from '/src/routes/home';
import About from '/src/routes/about';
import Contact from '/src/routes/contact';
import Kittens from '/src/routes/kittens';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const theme = {
  global: {
    colors: {
      brand: '#242424',
    },
    font: {
      family: 'sans-serif',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="transparent"
    pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
    elevation="large"
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <AppBar>
                <Heading level="2" margin="none">
                  My Cute Kittens
                </Heading>

                <Button
                  icon={<GiHamburgerMenu />}
                  onClick={() =>
                    this.setState({ showSidebar: !this.state.showSidebar })
                  }
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  app body
                </Box>
                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      <Box>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/kittens">Kittens</Link>
                        <Link to="/contact">Contact</Link>
                      </Box>
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;

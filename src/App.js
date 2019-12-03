import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Choice from './components/Choice/index';
import Crew from './components/Crew/index';
import Combo from './components/Combo/index';
import GetStart from './components/GetStart/index';
import Footer from './components/Footer/index';
import DesignBy from './components/DesignBy/index';
import ArrowUp from './assets/images/arrowUp.png'
import Navigation from './components/Navigation/index';

import { animateScroll as scroll } from 'react-scroll'

class App extends Component {
  state = {
    hamburgerFlag: false,
    isTop: true,
    offset: 0,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
    document.addEventListener('scroll', () => {
      let offset = window.pageYOffset;
      if (offset !== this.state.offset) {
        this.setState({ offset })
      }
    })
  }

  hamburgerClick = () => {
    this.setState({hamburgerFlag: !this.state.hamburgerFlag})
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="App">
        <Navigation
          scrollY={this.state.isTop}
          hamburgerClick={this.hamburgerClick} 
          hamburgerFlag={this.state.hamburgerFlag}
        />
        <Header 
          id='header'
        />
        <Choice id='services' />
        <Crew offset={this.state.offset} />
        <Combo id='combo' />
        <GetStart id='getStart' />
        <Footer id='footer'/>
        <DesignBy />
        <div className='arrowBox' onClick={this.scrollToTop}>
          <img src={ArrowUp} alt='arrowUp' width='30' />
        </div>
      </div>
    );
  }
}

export default App;

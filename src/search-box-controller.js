import React, {Component} from 'react';

import makeExpanding from './expanding-animation';
import makeShakeAnimation from './shake-animation';
import makeMoveUp from './move-up-animation';
import makeSpringUp from './spring-up-animation';
import {Motion, spring, presets} from 'react-motion';
import logo from './logo.svg';
import './App.css';

const makeSearchBoxShake = (Target) => {
  const WrappedComponent = makeShakeAnimation(makeExpanding(Target));

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = ({query: '', hasError: false, loading: false});
    }

    onQueryUpdate = (value) => {
      this.setState({query: value, hasError: false});
    }

    onSubmit = (value) => {
      if (value === '') {
        this.setState({hasError: true});
      } else {
        this.setState({
          loading: !this.state.loading
        });
        setTimeout(() => this.setState({loading: false}), 2000);
      }
    };

    render() {
      const style = {
        backgroundColor: this.state.loading ? 'none' : 'white'
      };
      let visibleContent = null;
      if (this.state.loading) {
        visibleContent = <img src={logo} style={style} alt="logo" className='App-show'/>
      } else {
        visibleContent =
        <WrappedComponent
          onQueryUpdate={this.onQueryUpdate}
          query={this.state.query}
          onSubmit={this.onSubmit}
          shouldShake={this.state.hasError}
        />
      }
      return (
        <div>
          {visibleContent}
        </div>
      );
    }
  }
};

export default makeSearchBoxShake;

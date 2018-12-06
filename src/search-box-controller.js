import React, {Component} from 'react';

import makeExpanding from './expanding-animation';
import makeShakeAnimation from './shake-animation';
import makeMoveUp from './move-up-animation';
import makeSpringUp from './spring-up-animation';

const makeSearchBoxShake = (Target) => {
  const WrappedComponent = makeShakeAnimation(makeExpanding(Target));

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = ({query: '', hasError: false});
    }

    onQueryUpdate = (value) => {
      this.setState({query: value, hasError: false});
    }

    onSubmit = (value) => {
      if (value === '') {
        this.setState({hasError: true});
      }
    };

    render() {
      return (
        <WrappedComponent
          onQueryUpdate={this.onQueryUpdate}
          query={this.state.query}
          onSubmit={this.onSubmit}
          shouldShake={this.state.hasError}
        />
      );
    }
  }
};

export default makeSearchBoxShake;

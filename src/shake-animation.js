import React, { Component } from 'react';
import { headShake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headShake:  {
    animationName: headShake,
    animationDuration: '.5s' //animation speed
  }
});
const makeValidationErrorAnimation = (Target) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {shouldShake: false};
    }

    onClick = () => {
      this.setState({shouldShake: true}, () => {
        const self = this;
        setTimeout(() => self.setState({shouldShake: false}), 500); //time that animation class remains
      });
    };

    render() {
      return (
        <Target isOpen={true}
          onClick={this.onClick}
          additionalStyles={{text: {}, frame: {}}}
          frameClass={this.state.shouldShake ? css(styles.headShake) : ''}/>
      );
    }
  }
};
export default makeValidationErrorAnimation;

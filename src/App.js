import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// (Make material-ui happy)
import SearchBox from './SearchBox';
import makeSearchBoxShake from './search-box-controller';
import makeMoveUp from './move-up-animation';
import makeSpringUp from './spring-up-animation';
import MenuButton from './MenuButton';
import Menu from './Menu';

const MoveUpSearchBox = makeMoveUp(SearchBox);
const WobblySearchBox = makeSpringUp(SearchBox);
const AnimatedSearchBox = makeSearchBoxShake(SearchBox);

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const style = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '80vh'
    };

    return (
      <div>
        <MenuButton handleMouseDown={this.handleMouseDown}/>
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
        <MuiThemeProvider>
          <div style={style}>
            <AnimatedSearchBox/>
            <WobblySearchBox/>
            <MoveUpSearchBox/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;

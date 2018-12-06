import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// (Make material-ui happy)
import SearchBox from './SearchBox';
import makeSearchBoxShake from './search-box-controller';
import makeMoveUp from './move-up-animation';
import makeSpringUp from './spring-up-animation';

// const MoveUpSearchBox = makeMoveUp(SearchBox);
// const WobblySearchBox = makeSpringUp(SearchBox);
const MoveUpSearchBox = makeMoveUp(SearchBox);
const WobblySearchBox = makeSpringUp(SearchBox);
const AnimatedSearchBox = makeSearchBoxShake(SearchBox);

class App extends Component {
    render() {
        //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
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
            <MuiThemeProvider>
                <div style={style}>
                    <AnimatedSearchBox/>
                    <WobblySearchBox/>
                    <MoveUpSearchBox/>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;

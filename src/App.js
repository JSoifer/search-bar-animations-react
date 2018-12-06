import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// (Make material-ui happy)
import SearchBox from './SearchBox';
import makeMoveUp from './move-up-animation';
import makeExpanding from './expanding-animation';
import makeSpringUp from './spring-up-animation';
import makeValidationErrorAnimation from './shake-animation';

const MoveUpSearchBox = makeMoveUp(SearchBox);
const ExpandingSearchBox = makeExpanding(SearchBox);
const WobblySearchBox = makeSpringUp(SearchBox);
const ErrorBox = makeValidationErrorAnimation(SearchBox);

class App extends Component {
    render() {
        //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
        const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        return (
            <MuiThemeProvider>
                <div style={style}>
                    <ErrorBox/>
                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;

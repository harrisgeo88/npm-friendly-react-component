import ReactDOM from 'react-dom';
import React from 'react';
// import {App} from './index';

class App extends React.Component {
    render() {
        return (
            <div>This is a Test App!</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
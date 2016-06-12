import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <Link to="signup">Signup</Link>
                {this.props.children}
            </div>
        )
    }
}

import Signup from './pages/Signup';
const routes = (
    <Router>
        <Route path="/" component={App}/>
        <Route path="/signup" component={Signup}/>
    </Router>
)

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));

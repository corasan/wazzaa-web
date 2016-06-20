import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <Link to="signup"><h2>Signup!</h2></Link>
                {this.props.children}
            </div>
        )
    }
}

import Signup from './pages/Signup';
import Login from './pages/Login';
const routes = (
    <Router>
        <Route path="/" component={App}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
    </Router>
)

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));

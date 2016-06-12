import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            f_name: ''
        }
    }
    handleChange = (e) => {
        this.setState({f_name: e.target.value});
    }
    render() {
        return (
            <div>
                <h1>Hello!</h1>
            </div>
        )
    }
}

const routes = (
    <Router>
        <Route path="/" component={App}/>
    </Router>
)

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));

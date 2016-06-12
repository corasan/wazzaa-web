import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
                <form method="POST" action="/">
                    <input type="text" name="fname" placeholder="First name" value={this.state.f_name} onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

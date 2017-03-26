import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TimerDisplay from './components/TimerDisplay'

class App extends Component {
    render() {
        return (
            <div className="App">
                <table className="App-header">
                    <tr>
                        <td><img src={logo} className="App-logo" alt="logo"/></td>
                        <td><h2>Simple Timer</h2></td>
                    </tr>
                </table>
                <TimerDisplay/>
            </div>
        );
    }
}

export default App;

/**
 * Created by Administrator on 3/25/2017.
 */
import React from "react"
import TimerButton from './TimerButton'
import formatTime from '../utils/formatTime'
import RecordDisplay from './RecordDisplay'

class TimerDisplay extends React.Component {
    constructor(props) {
        super(props);
        //不能调用state
        this.state = {
            timerNumber: 0,
            isStart: false,
            recordHistory: []
        };
    }

    onTimerButtonClick = (key, event)=> {
        console.log("onTimerButtonClick , " + key);
        if (key === "start") {
            if (this.state.isStart) {
                clearInterval(this.interval);
            } else {
                this.interval = setInterval(()=>this.setState({timerNumber: this.state.timerNumber + 1}), 10);
            }
            this.setState({isStart: !this.state.isStart});
        } else if (key === "rest") {
            clearInterval(this.interval);
            this.setState({timerNumber: 0});
            this.setState({isStart: false});
        } else if (key === "record") {
            if (this.state.isStart) {
                this.state.recordHistory.push(formatTime(this.state.timerNumber))
            }
        } else if (key === "clear") {
            if (this.state.recordHistory.length > 0) {
                this.setState({recordHistory: []});
            }
        }

    };

    render() {
        let time = formatTime(this.state.timerNumber);
        return (
            <div>
                <h1>{time}</h1>
                <div className="controlMenu">
                    <TimerButton name={this.state.isStart?"startButtonClick":"startButton"}
                                 text={this.state.isStart?"Stop":"Start"}
                                 onClick={this.onTimerButtonClick.bind(this,'start')}/>
                    <TimerButton name="restButton" text="Rest" onClick={this.onTimerButtonClick.bind(this,'rest')}/>
                    <TimerButton name="recordButton" text="Record"
                                 onClick={this.onTimerButtonClick.bind(this,'record')}/>
                    <TimerButton name="clearButton" text="Clear" onClick={this.onTimerButtonClick.bind(this,'clear')}/>
                </div>
                <RecordDisplay recordHistory={this.state.recordHistory}/>
            </div>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
        window.addEventListener('keydown', event=>event.preventDefault());
        window.addEventListener('keyup', event=> {
            event.preventDefault();
            switch (event.keyCode) {
                case 32:
                    this.onTimerButtonClick("start");
                    break;
                case 82:
                    this.onTimerButtonClick("rest");
                    break;
                case 13:
                    this.onTimerButtonClick("record");
                    break;
                case 67:
                    this.onTimerButtonClick("clear");
                    break;
            }
        });
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        window.removeEventListener('keydown');
        window.removeEventListener('keyup');

    }
}
export default TimerDisplay;
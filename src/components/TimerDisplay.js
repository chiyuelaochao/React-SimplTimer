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
            isStart: false
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
            this.recordNumber = formatTime(this.state.timerNumber);
            // console.log(this.recordNumber);
        } else if (key === "clear") {

        }

    }

    render() {
        let time = formatTime(this.state.timerNumber);
        return (
            <div>
                <h1>{time}</h1>
                <div className="controlMenu">
                    <TimerButton name="one" text={this.state.isStart?"Stop":"Start"}
                                 onClick={this.onTimerButtonClick.bind(this,'start')}/>
                    <TimerButton name="two" text="Rest" onClick={this.onTimerButtonClick.bind(this,'rest')}/>
                    <TimerButton name="three" text="Record" onClick={this.onTimerButtonClick.bind(this,'record')}/>
                    <TimerButton name="four" text="Clear" onClick={this.onTimerButtonClick.bind(this,'clear')}/>
                </div>
                <RecordDisplay recordItem={this.recordNumber}/>
            </div>
        )
    }
}
export default TimerDisplay;
/**
 * Created by Administrator on 3/25/2017.
 */
import React from "react"

class TimerButton extends React.Component {
    render() {
        return (
            <button className={`timerButton ${this.props.name}`} onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}
export default TimerButton;
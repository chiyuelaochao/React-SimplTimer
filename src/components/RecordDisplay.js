/**
 * Created by Administrator on 3/25/2017.
 */
import React from 'react'

export default class RecordDisplay extends React.Component {

    /* static defaultProps = {
     recordItem: 'No Record!'
     }*/

    render() {
        return (
            <ul>
                <span>
                    {this.props.recordItem}
                </span>
            </ul>
        )
    }

}

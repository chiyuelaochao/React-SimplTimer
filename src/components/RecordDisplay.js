/**
 * Created by Administrator on 3/25/2017.
 */
import React from 'react'

export default class RecordDisplay extends React.Component {

    /* static defaultProps = {
     recordItem: 'No Record!'
     }*/

    getEmptyItem = ()=> {
        return <li> No Record!</li>
    };

    getRecordItem = ()=> {
        /*return this.props.recordHistory.map((content, i)=> {
         return <li className="recordItem">{i + 1}. {content} </li>
         });*/
        return this.props.recordHistory.map(function (content, i) {
            return <li className="recordItem" key={i}>{i + 1}. {content} </li>
        })
    };

    render() {
        return (
            <ul>
                {this.props.recordHistory.length < 1 ? this.getEmptyItem : this.getRecordItem()}
            </ul>
        )
    }

}

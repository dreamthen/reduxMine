/**
 * Created by yinwk on 2017/5/31.
 */
import React from "react";
import {countDoublePlus} from "../actions/counterAction";
import {connect} from "react-redux";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    addDoubleCountHandler() {
        const {dispatch} = this.props;
        dispatch(countDoublePlus({count: 2}));
    }

    render(){
        const {count} = this.props;
        const {addDoubleCountHandler} = this;
        return (
            <div>
                <h1>
                    计数器
                </h1>
                <span>
                    {count}
                </span>
                <div>
                    <input
                        type="button"
                        value="累加"
                        onClick={addDoubleCountHandler.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

function select(state){
    return {
        ...state.addDoubleCount
    }
}

export default connect(select)(Counter);


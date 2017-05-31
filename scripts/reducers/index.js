/**
 * Created by yinwk on 2017/5/30.
 */
import {combineReducers} from "redux";
import {addDoubleCount} from "./counterReducer";

const reducers = combineReducers({
    addDoubleCount
});

export default reducers;
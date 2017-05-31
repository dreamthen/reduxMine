/**
 * Created by yinwk on 2017/5/30.
 */
import {createStore} from "redux";
import reducers from "../reducers";

const store = createStore(reducers);

export default store;
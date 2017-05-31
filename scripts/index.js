/**
 * Created by yinwk on 2017/5/30.
 */
import React from "react";
import {render} from "react-dom";
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import store from "./config/storeConfig";

render(<Provider store={store}>
    <Counter />
</Provider>,document.getElementById("reduxMine_container"));
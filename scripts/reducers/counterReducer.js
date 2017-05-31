/**
 * Created by yinwk on 2017/5/30.
 */
const defaultState = {
    count: 0
};

export function addDoubleCount(state = defaultState, action) {
    let type = action.type,
        payload = action.payload,
        count = state.count;
    switch (type) {
        case "ADD_COUNT":
            return Object.assign({}, state, {
                count: count + payload.count
            });
        default:
            return state;
    }
}
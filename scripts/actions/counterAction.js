/**
 * Created by yinwk on 2017/5/30.
 */
export function countPlus(payload) {
    return {
        type: "ADD_COUNTER",
        payload
    }
}
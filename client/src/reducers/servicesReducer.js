export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_SERVICE':
            return {
                selected: action.payload
            };
        default:
            return state
    }
}
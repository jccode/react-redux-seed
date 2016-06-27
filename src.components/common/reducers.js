
export default function optimistic_update(state = {}, action) {
    const isPending = /.*\_PENDING(.*?)$/;

    if(action.type.match(isPending)) {
        console.log(action);
    }

    return state;
}
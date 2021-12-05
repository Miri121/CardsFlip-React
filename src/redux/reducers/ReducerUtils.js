function convertActionTypeToName(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}

export  function createReducer(state, action, handlers) {
    const key = convertActionTypeToName(action.type);
    const u = handlers[key]
    if (u) {
        u(state, action);
    }
}


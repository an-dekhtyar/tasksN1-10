const initState = {
    loadingProcess: false
};
type initialStateType = {
    loadingProcess:boolean
}
type loadingActionType = ReturnType<typeof loading>

export const loadingReducer = (state:initialStateType = initState, action: loadingActionType): initialStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state,
                loadingProcess:action.loadingProcess
            };
        }
        default: return state;
    }
};

export const loading = (loadingProcess:boolean) => ({
    type: 'LOADING', loadingProcess
} as const)


const initState:StateType = {
    theme: 'blue'
};

export const themeReducer = (state = initState, action: ActionTypes): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme:action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string) => ({
    type:'CHANGE-THEME', theme
} as const);


// types

type ActionTypes = ReturnType<typeof changeThemeC>
export type StateType = { theme:string }
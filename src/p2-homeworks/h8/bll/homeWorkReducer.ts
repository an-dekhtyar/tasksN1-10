import { ActionType, initialPeople, PeopleType } from "../HW8";

export const homeWorkReducer = (state: Array<PeopleType> = initialPeople, action: ActionType): Array<PeopleType> => {
    switch (action.type) {
        case "sort": {
            let stateCopy = [...state]
            if (action.payload === 'up') {
                return stateCopy.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1
                        }
                        if (a.name < b.name) {
                            return -1
                        } else {
                            return 0
                        }
                    }
                )
            }
            if (action.payload === 'down') {
                return stateCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }
        }
        case "check":
            let newState = state.filter(p => p.age > action.payload)

            return newState.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    } else {
                        return 0
                    }
                }
            )

        default: return state
    }
};
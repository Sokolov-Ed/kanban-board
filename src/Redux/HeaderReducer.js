const SET_MAIN_PAGE = 'SET_MAIN_PAGE';
const SET_LIST_ROOMS_PAGE = 'SET_LIST_ROOMS_PAGE';
const SET_LIST_TASKS_PAGE = 'SET_LIST_TASKS_PAGE';
const SET_TASK_PAGE = 'SET_TASK_PAGE';
const SET_NAME_ROOM = 'SET_NAME_ROOM';

let initialState = {
    isMainPage: false,
    isListRoomsPage: false,
    isListTasksPage: false,
    isTaskPage: false,
    nameRoom: ''
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_PAGE:
            return {
                ...state,
                isMainPage: true,
                isListRoomsPage: false,
                isListTasksPage: false,
                isTaskPage: false,
            }
        case SET_LIST_ROOMS_PAGE:
            return {
                ...state,
                isMainPage: false,
                isListRoomsPage: true,
                isListTasksPage: false,
                isTaskPage: false,
            }
        case SET_LIST_TASKS_PAGE:
            return {
                ...state,
                isMainPage: false,
                isListRoomsPage: false,
                isListTasksPage: true,
                isTaskPage: false,
            }
        case SET_TASK_PAGE:
            return {
                ...state,
                isMainPage: false,
                isListRoomsPage: false,
                isListTasksPage: false,
                isTaskPage: true
            }
        case SET_NAME_ROOM:
            return {
                ...state,
                nameRoom: action.nameRoom
            }
        default:
            return state;
    }
}

export const setMainPage = () => ({
    type: SET_MAIN_PAGE
})
export const setListRoomsPage = () => ({
    type: SET_LIST_ROOMS_PAGE
})
export const setListTasksPage = () => ({
    type: SET_LIST_TASKS_PAGE
})
export const setTaskPage = () => ({
    type: SET_TASK_PAGE
})
export const setNameRoom = (nameRoom) => ({
    type: SET_NAME_ROOM,
    nameRoom
})

export default headerReducer;
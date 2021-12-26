const ADD_ROOM = 'ADD_ROOM';
const SET_SHOW_CREATE_ROOM = 'SET_SHOW_CREATE_ROOM';

let initialState = {
    listRooms: [
        { idRoom: 1, idUser: 2, nameRoom: "Архітектура комп'ютерів", authorRoom: "Дужий В. Ю." },
        { idRoom: 2, idUser: 3, nameRoom: "Комп'ютерна схемотехніка", authorRoom: "Куланов В. О." },
        { idRoom: 3, idUser: 4, nameRoom: "МСД", authorRoom: "Шостак А. В." },
        { idRoom: 4, idUser: 5, nameRoom: "Технології програмування", authorRoom: "Бабешко Є. В." },
        { idRoom: 5, idUser: 6, nameRoom: "ТІК", authorRoom: "Колісник М. О." }
    ],
    isShowCreateRoom: false,
}

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROOM: {
            let newRoom = {
                idRoom: state.listRooms.length + 1,
                nameRoom: action.nameRoom,
                authorRoom: action.author,
                idUser: action.idAuthor
            }
            return {
                ...state,
                listRooms: [...state.listRooms, newRoom]
            }
        }
        case SET_SHOW_CREATE_ROOM: {
            return {
                ...state,
                isShowCreateRoom: action.boolValue ? true : false
            }
        }
        default:
            return state;
    }
}

export const addRoom = (nameRoom = "NoName", author = "NoName", idAuthor) => ({
    type: ADD_ROOM,
    nameRoom,
    author,
    idAuthor
})
export const setShowCreateRoom = (boolValue) => ({
    type: SET_SHOW_CREATE_ROOM,
    boolValue
})

export default roomsReducer;
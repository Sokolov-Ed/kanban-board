const ADD_ROOM = 'ADD_ROOM';

let initialState = {
    listRooms: [
        { idRoom: 1, nameRoom: "Архітектура комп'ютерів", authorRoom: "Дужий В. Ю." },
        { idRoom: 2, nameRoom: "Комп'ютерна схемотехніка", authorRoom: "Куланов В. О." },
        { idRoom: 3, nameRoom: "МСД", authorRoom: "Шостак А. В." },
        { idRoom: 4, nameRoom: "Технології програмування", authorRoom: "Бабешко Є. В." },
        { idRoom: 5, nameRoom: "ТІК", authorRoom: "Колісник М. О." }
    ]
}

const roomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROOM: {
            let newRoom = {
                idRoom: state.listRooms.length + 1,
                nameRoom: action.nameRoom,
                authorRoom: action.author
            }
            return {
                ...state,
                listRooms: [...state.listRooms, newRoom]
            }
        }
        default:
            return state;
    }
}

export const addRoom = (nameRoom = "NoName", author = "NoName") => ({
    type: ADD_ROOM,
    nameRoom,
    author
})

export default roomsReducer;
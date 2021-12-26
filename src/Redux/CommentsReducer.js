const ADD_COMMENT = 'ADD_COMMENT';

let initialState = {
    listComments: []
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            let newDate = new Date();
            let currentDate = `${newDate.getFullYear()}-${(newDate.getMonth() + 1)}-${newDate.getDate()}`;
            let newComment = {
                idRoom: action.idRoom,
                idTask: action.idTask,
                idComment: state.listComments.length + 1,
                authorComment: action.authorComment,
                dateAdd: currentDate,
                textComment: action.textComment
            }
            return {
                ...state,
                listComments: [...state.listComments, newComment]
            }
        }
        default:
            return state;
    }
}

export const addComment = (idRoom, idTask, authorComment, textComment = "No text") => ({
    type: ADD_COMMENT,
    idRoom,
    idTask,
    authorComment,
    textComment
})

export default commentsReducer;
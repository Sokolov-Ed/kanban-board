const ADD_TASK = 'ADD_TASK';
const UPDATE_LIST_TASKS = 'UPDATE_LIST_TASKS';
const SET_SHOW_CREATE_TASK = 'SET_SHOW_CREATE_TASK';

let initialState = {
    listTasks: [
        {id: 1, title: "Пріоритетні", items: [
        ]},
        {id: 2, title: "В процесі", items: [
        ]},
        {id: 3, title: "Перевірка", items: [
        ]},
        {id: 4, title: "Виконано", items: [
            { idRoom: 1, id: 1, author: "Дужий В. Ю.", date: "2021-11-01", nameTask: "Практика", description: "Робота над ЛР №4 і №6.", file: '' },
            { idRoom: 1, id: 2, author: "Дужий В. Ю.", date: "2021-11-03", nameTask: "Лекція", description: "Лекція №12.", file: '' },
            { idRoom: 1, id: 3, author: "Дужий В. Ю.", date: "2021-11-08", nameTask: "Лекція", description: "Лекція №13.", file: '' },
            { idRoom: 2, id: 4, author: "Куланов В. О.", date: "2021-11-10", nameTask: "Лекція", description: "Підготовка до модулю.", file: '' }
        ]},
    ],
    isShowCreateTask: false
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            let newDate = new Date();
            let currentDate = `${newDate.getFullYear()}-${(newDate.getMonth() + 1)}-${newDate.getDate()}`;
            let newtask = {
                idRoom: action.idRoom,
                id: (state.listTasks[0].items.length 
                    + state.listTasks[1].items.length 
                    + state.listTasks[2].items.length 
                    + state.listTasks[3].items.length) + 1,
                author: action.author,
                date: currentDate,
                nameTask: action.nameTask,
                description: action.description,
                file: action.file
            }
            let stateCopy = {...state};
            stateCopy.listTasks = [...state.listTasks];
            stateCopy.listTasks[0].items = [...state.listTasks[0].items];
            stateCopy.listTasks[0].items.push(newtask);
            return stateCopy;
        }
        case UPDATE_LIST_TASKS: {
            return {
                ...state,
                listTasks: action.newListTasks
            }
        }
        case SET_SHOW_CREATE_TASK: {
            return {
                ...state,
                isShowCreateTask: action.boolValue ? true : false
            }
        }
        default:
            return state;
    }
}

export const addTask = (idRoom, author = "NoName", nameTask = "NoName", description = "Not description", file) => ({
    type: ADD_TASK,
    idRoom,
    author,
    nameTask,
    description,
    file
})
export const updateListTasks = (newListTasks) => ({
    type: UPDATE_LIST_TASKS,
    newListTasks
})
export const setShowCreateTask = (boolValue) => ({
    type: SET_SHOW_CREATE_TASK,
    boolValue
})

export default tasksReducer;
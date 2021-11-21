import { createStore, combineReducers, compose } from "redux";
import commentsReducer from "./CommentsReducer";
import roomsReducer from "./RoomsReducer";
import tasksReducer from "./TasksReducer";

const reducers = combineReducers({
    roomsPage: roomsReducer,
    tasksPage: tasksReducer,
    commentsPage: commentsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
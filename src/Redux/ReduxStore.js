import { createStore, combineReducers, compose } from "redux";
import accountsReducer from "./AccountsReducer";
import commentsReducer from "./CommentsReducer";
import headerReducer from "./HeaderReducer";
import roomsReducer from "./RoomsReducer";
import tasksReducer from "./TasksReducer";

const reducers = combineReducers({
    roomsPage: roomsReducer,
    tasksPage: tasksReducer,
    commentsPage: commentsReducer,
    header: headerReducer,
    authorization: accountsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
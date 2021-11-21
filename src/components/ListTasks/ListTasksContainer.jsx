import { connect } from "react-redux";
import { addTask, updateListTasks } from "../../Redux/TasksReducer";
import ListTasks from "./ListTasks";

let mapstateToProps = (state) => {
    return {
        listTasks: state.tasksPage.listTasks,
        listRooms: state.roomsPage.listRooms
    }
}

export default connect(mapstateToProps, {addTask, updateListTasks})(ListTasks);
import React from 'react';
import { connect } from "react-redux";
import { setListTasksPage } from "../../Redux/HeaderReducer";
import { addTask, setShowCreateTask, updateListTasks } from "../../Redux/TasksReducer";
import ListTasks from "./ListTasks";

class ListTasksContainer extends React.Component {
    componentDidMount() {
        this.props.setListTasksPage();
    }
    render() {
        return (
            <ListTasks listTasks={this.props.listTasks} listRooms={this.props.listRooms}
                addTask={this.props.addTask} updateListTasks={this.props.updateListTasks}
                authorization={this.props.authorization} setShowCreateTask={this.props.setShowCreateTask}
                isShowCreateTask={this.props.isShowCreateTask}/>
        )
    }
}

let mapstateToProps = (state) => {
    return {
        listTasks: state.tasksPage.listTasks,
        isShowCreateTask: state.tasksPage.isShowCreateTask,
        listRooms: state.roomsPage.listRooms,
        authorization: state.authorization
    }
}

export default connect(mapstateToProps, {addTask, updateListTasks, setListTasksPage, setShowCreateTask})(ListTasksContainer);
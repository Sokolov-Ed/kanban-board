import React from 'react';
import { connect } from "react-redux";
import { addComment } from "../../Redux/CommentsReducer";
import { setNameRoom, setTaskPage } from '../../Redux/HeaderReducer';
import TaskPage from "./TaskPage";

class TaskPageContainer extends React.Component {
    componentDidMount() { 
        this.props.setTaskPage();
    }

    render() {
        return (
            <TaskPage listTasks={this.props.listTasks} listComments={this.props.listComments}
                addComment={this.props.addComment} authorization={this.props.authorization}
                setNameRoom={this.props.setNameRoom} listRooms={this.props.listRooms}/>
        )
    }
}

let mapstateToProps = (state) => {
    return {
        listRooms: state.roomsPage.listRooms,
        listTasks: state.tasksPage.listTasks,
        listComments: state.commentsPage.listComments,
        authorization: state.authorization
    }
}

export default connect(mapstateToProps, {addComment, setTaskPage, setNameRoom})(TaskPageContainer);
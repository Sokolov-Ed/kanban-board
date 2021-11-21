import { connect } from "react-redux";
import { addComment } from "../../Redux/CommentsReducer";
import TaskPage from "./TaskPage";

let mapstateToProps = (state) => {
    return {
        listTasks: state.tasksPage.listTasks,
        listComments: state.commentsPage.listComments
    }
}

export default connect(mapstateToProps, {addComment})(TaskPage);
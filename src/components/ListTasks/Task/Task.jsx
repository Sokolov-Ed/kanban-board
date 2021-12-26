import classes from './Task.module.css';
import { NavLink } from 'react-router-dom';

const Task = (props) => {
    return (
        <NavLink to={`/list-rooms/room/${props.idRoom}/task/${props.id}`}>
            {(props.authorization.authorized.isTeacher || props.authorization.authorized.isAdmin) ?
                <div onDragOver={e => props.dragOverHandler(e)}
                    onDragLeave={e => props.dragLeaveHandler(e)}
                    onDragStart={e => props.dragStartHandler(e, props.column, props.tasks)}
                    onDragEnd={e => props.dragEndHandler(e)}
                    onDrop={e => props.dropHandler(e, props.column, props.tasks)}
                    draggable={true}>
                    <div
                        className={classes.fieldTask}>
                        <div className={classes.whoAuthorTask}>
                            <div className={classes.authorTask}>{props.author}</div>-<div className={classes.dateAdd}>{props.date}</div>
                        </div>
                        <div className={classes.nameTask}>{props.nameTask}</div>
                        <div className={classes.taskDescription}>{props.description}</div>
                    </div>
                </div>
                :
                <div className={classes.fieldTask}>
                    <div className={classes.whoAuthorTask}>
                        <div className={classes.authorTask}>{props.author}</div>-<div className={classes.dateAdd}>{props.date}</div>
                    </div>
                    <div className={classes.nameTask}>{props.nameTask}</div>
                    <div className={classes.taskDescription}>{props.description}</div>
                </div>
            }
        </NavLink>
    )
}

export default Task;
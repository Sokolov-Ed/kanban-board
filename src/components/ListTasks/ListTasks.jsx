import classes from './ListTasks.module.css';
import classesTask from './Task/Task.module.css';
import Task from './Task/Task';
import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CreateTask from '../OtherPages/CreateTask';

const ListTasks = (props) => {
    const [items, setItems] = useState(props.listTasks);
    const [currentColumn, setCurrentColumn] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
    let id = useParams().idRoom;
    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.target.className == classesTask.fieldTask) {
            e.target.style.boxShadow = '0 3px 5px black';
        }
    }
    const dragLeaveHandler = (e) => {
        e.target.style.boxShadow = 'none';
    }
    const dragStartHandler = (e, column, task) => {
        setCurrentColumn(column);
        setCurrentTask(task);
    }
    const dragEndHandler = (e) => {
        e.target.style.boxShadow = 'none';
    }
    const dropHandler = (e, column, task) => {
        e.preventDefault();
        const currentIndex = currentColumn.items.indexOf(currentTask);
        currentColumn.items.splice(currentIndex, 1);
        const dropIndex = column.items.indexOf(task);
        column.items.splice(dropIndex + 1, 0, currentTask);
        setItems(items.map(i => {
            if (i.id === column.id) {
                return column
            }
            if (i.id === currentColumn.id) {
                return currentColumn
            }
            return i
        }));
        props.updateListTasks(items);
    }
    const dropTaskHandler = (e, column) => {
        const currentId = column.items.map(item => item.id);
        if (!currentId.includes(currentTask.id)) {
            column.items.push(currentTask);
            const currentIndex = currentColumn.items.indexOf(currentTask);
            currentColumn.items.splice(currentIndex, 1);
            setItems(items.map(i => {
                if (i.id === column.id) {
                    return column
                }
                if (i.id === currentColumn.id) {
                    return currentColumn
                }
                return i
            }));
            props.updateListTasks(items);
        }
    }
    const filteredRoom = props.listRooms.filter(i => i.idRoom == id);
    const isTeacher = props.authorization.authorized.isTeacher;
    if(!filteredRoom[0]) {
        return <Navigate replace to='*' />
    }
    if(isTeacher && filteredRoom[0].idUser != props.authorization.authorized.idUser) {
        return <Navigate replace to='*' />
    }
    if(!props.authorization.isAuth){
        return <Navigate replace to="/login" />
    }
    const showFieldCreateTask = () => {
        props.setShowCreateTask(true);
    }
    return (
        <div className={classes.listTaskPages}>
            {props.isShowCreateTask && <CreateTask setShowCreateTask={props.setShowCreateTask}
                                            idRoom={id} author={props.authorization.authorized.userName}
                                            addTask={props.addTask}/>}
            <div className={classes.fieldNameRoom}>
                <div className={classes.nameRoom}>{filteredRoom[0].nameRoom}</div>
                {(filteredRoom[0].idUser == props.authorization.authorized.idUser || props.authorization.authorized.isAdmin)
                    && <button className={classes.button} onClick={showFieldCreateTask}>Додати завдання</button>}
            </div>
            <div className={classes.fieldTasks}>
                {items.map(column =>
                    <div className={classes.fieldColumn}
                        onDragOver={(props.authorization.authorized.isTeacher || props.authorization.authorized.isAdmin) ? e => dragOverHandler(e) : null}
                        onDrop={(props.authorization.authorized.isTeacher || props.authorization.authorized.isAdmin) ? e => dropTaskHandler(e, column) : null} >
                        <div className={classes.nameColumn}>{column.title}</div>
                        {column.items.filter(i => i.idRoom == id).map(task => (
                            <Task dragOverHandler={dragOverHandler} dragLeaveHandler={dragLeaveHandler}
                                dragStartHandler={dragStartHandler} dragEndHandler={dragEndHandler}
                                dropHandler={dropHandler} column={column} tasks={task}
                                key={task.id} idRoom={task.idRoom} id={task.id} author={task.author} date={task.date}
                                nameTask={task.nameTask} description={task.description} addTask={props.addTask} 
                                authorization={props.authorization}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListTasks;
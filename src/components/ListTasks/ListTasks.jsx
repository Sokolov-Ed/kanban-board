import classes from './ListTasks.module.css';
import classesTask from './Task/Task.module.css';
import Task from './Task/Task';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ListTasks = (props) => {
    let id = useParams().idRoom;
    const [items, setItems] = useState(props.listTasks);
    const [currentColumn, setCurrentColumn] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
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
    console.log(items);
    return (
        <div>
            {props.listRooms.filter(i => i.idRoom == id).map(filteredRoom => (
                <div>
                    <button className={classes.button} onClick={() => props.addTask(id, filteredRoom.authorRoom)}>Add task</button>
                    <div className={classes.nameRoom}>{filteredRoom.nameRoom}</div>
                </div>
            ))}
            <div className={classes.fieldTasks}>
                {items.map(column =>
                    <div className={classes.fieldColumn}
                        onDragOver={e => dragOverHandler(e)}
                        onDrop={e => dropTaskHandler(e, column)} >
                        <div className={classes.nameColumn}>{column.title}</div>
                        {column.items.filter(i => i.idRoom == id).map(task => (
                            <Task dragOverHandler={dragOverHandler} dragLeaveHandler={dragLeaveHandler}
                                dragStartHandler={dragStartHandler} dragEndHandler={dragEndHandler}
                                dropHandler={dropHandler} column={column} tasks={task}
                                key={task.id} idRoom={task.idRoom} id={task.id} author={task.author} date={task.date}
                                nameTask={task.nameTask} description={task.description} addTask={props.addTask} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ListTasks;
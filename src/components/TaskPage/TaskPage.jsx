import Comment from './Comment/Comment';
import classes from './TaskPage.module.css';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form, resetForm } from 'formik';
import { useState } from 'react';

const TaskPage = (props) => {
    let idRoom = useParams().idRoom;
    let idTask = useParams().idTask;
    let filtredIdRoom = props.listTasks.map(item => item.items.filter(f => f.idRoom == idRoom && f.id == idTask)).filter(el => el.length > 0).flat();
    filtredIdRoom = filtredIdRoom[0];
    const addComment = (text) => {
        props.addComment(idRoom, idTask, "Noname", text);
    }
    return (
        <div>
            {filtredIdRoom &&
                <div>
                    <div className={classes.jobField}>
                        <div className={classes.whoAuthorTask}>
                            <div className={classes.authorTask}>{filtredIdRoom.author}</div>-<div className={classes.dateAdd}>{filtredIdRoom.date}</div>
                        </div>
                        <div className={classes.nameTask}>{filtredIdRoom.nameTask}</div>
                        <div className={classes.taskDescription}>{filtredIdRoom.description}</div>
                        <div classNameme={classes.fieldDocuments}>
                        </div>
                    </div>
                    <div className={classes.fieldForComments}>
                        <div className={classes.fieldComments}>
                            {props.listComments.filter(f => f.idRoom == idRoom && f.idTask == idTask).map(com =>
                                <Comment key={com.idComment} idComment={com.idComment}
                                    authorComment={com.authorComment} dateAdd={com.dateAdd}
                                    textComment={com.textComment} />
                            )}
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <Formik
                            initialValues={{text: ''}}
                            onSubmit={(values, {setSubmiting, resetForm}) => {
                                addComment(values.text);
                                resetForm({
                                    values: {
                                        text: ''
                                    }
                                })
                                setSubmiting(false);
                            }}>
                            <Form>
                                <div className={classes.fieldWriting}>
                                    <Field className={classes.textarea} name="text" autocomplete="off"
                                        type="text" placeholder="Додати коментар" />
                                </div>
                                <button className={classes.input} type="submit">Відправити</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            }
        </div>
    )
}

export default TaskPage;
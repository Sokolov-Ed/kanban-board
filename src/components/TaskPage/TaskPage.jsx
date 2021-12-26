import Comment from './Comment/Comment';
import classes from './TaskPage.module.css';
import { useParams, Navigate } from 'react-router-dom';
import { Formik, Field, Form, resetForm } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    text: Yup.string()
        .min(2, 'Занадто короткий коментар!')
        .max(250, 'Занадто довгий коментар!')
        .required('Поле порожнє'),
});

const TaskPage = (props) => {
    let idRoom = useParams().idRoom;
    let idTask = useParams().idTask;
    const filteredNameRoom = props.listRooms.filter(i => i.idRoom == idRoom);
    let filtredIdRoom = props.listTasks.map(item => item.items.filter(f => f.idRoom == idRoom && f.id == idTask)).filter(el => el.length > 0).flat();
    if (!(filteredNameRoom[0] && filtredIdRoom[0])) {
        return <Navigate replace to='*' />
    }
    props.setNameRoom(filteredNameRoom[0].nameRoom);
    filtredIdRoom = filtredIdRoom[0];
    const addComment = (text) => {
        props.addComment(idRoom, idTask, props.authorization.authorized.userName, text);
    }
    if (!props.authorization.isAuth) {
        return <Navigate replace to="/login" />
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
                            initialValues={{ text: '' }}
                            validationSchema={SignupSchema}
                            onSubmit={(values, { setSubmiting, resetForm }) => {
                                addComment(values.text);
                                resetForm({
                                    values: {
                                        text: ''
                                    }
                                })
                                setSubmiting(false);
                            }}>
                            {({ errors, touched }) => (
                                <Form>
                                    <div className={classes.fieldWriting}>
                                        <Field className={classes.textarea} name="text"
                                            type="text" placeholder="Додати коментар" as="textarea" />
                                        {errors.text && touched.text ? <div className={classes.error}>{errors.text}</div> : null}
                                    </div>
                                    <button className={classes.input} type="submit">Відправити</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            }
        </div>
    )
}

export default TaskPage;
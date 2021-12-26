import classes from './OtherPage.module.css';
import { Formik, Field, Form, resetForm } from 'formik';
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    nameRoom: Yup.string()
        .min(2, 'Занадто коротка назва!')
        .max(35, 'Занадто довга назва!')
        .required('Поле порожнє'),
});

const CreateRoom = ({ authorization, addRoom, setShowCreateRoom }) => {
    const history = useNavigate();
    if (!(authorization.authorized.isTeacher || authorization.authorized.isAdmin)) {
        return <Navigate replace to="/main" />
    }
    return (
        <div className={classes.inputPage}>
            <div className={classes.windowInput}>
                <div className={classes.title}>Створити кімнату</div>
                <Formik
                    initialValues={{ nameRoom: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, { setSubmiting, resetForm }) => {
                        addRoom(values.nameRoom, authorization.authorized.userName, authorization.authorized.idUser);
                        resetForm({
                            values: {
                                nameRoom: ''
                            }
                        });
                        setShowCreateRoom(false);
                        history("/list-rooms");
                        setSubmiting(false);
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <Field placeholder="Назва кімнати" type="text" className={classes.inputData} name="nameRoom" autocomplete="off" />
                                {errors.nameRoom && touched.nameRoom ? <div className={classes.error}>{errors.nameRoom}</div> : null}
                            </div>
                            <button className={classes.submit} type="submit">Створити</button>
                        </Form>
                    )}
                </Formik>
                <button className={classes.canseletion} onClick={() => setShowCreateRoom(false)}>Відміна</button>
            </div>
        </div>
    )
}

export default CreateRoom;
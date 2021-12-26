import { Formik, Field, Form, resetForm } from 'formik';
import classes from './OtherPage.module.css';
import { Navigate } from "react-router-dom";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Занадто короткий логін!')
        .max(25, 'Занадто довгий логін!')
        .required('Поле порожнє'),
    password: Yup.string()
        .min(2, 'Занадто короткий пароль!')
        .max(25, 'Занадто довгий пароль!')
        .required('Поле порожнє'),
});

const Login = (props) => {
    if (props.authorization.isAuth)
        return <Navigate replace to="/main" />
    return (
        <div>
            <div className={classes.titlePage}>WELCOME TO KANBAN BOARD</div>
            <div className={classes.inputPage + " " + classes.inputLoginPage}>
                <div className={classes.windowInput}>
                    <div className={classes.title}>Вхід</div>
                    <Formik
                        initialValues={{ userName: '', password: '' }}
                        validationSchema={SignupSchema}
                        onSubmit={(values, { setSubmiting, resetForm }) => {
                            props.login(values.userName, values.password);
                            resetForm({
                                values: {
                                    userName: '',
                                    password: ''
                                }
                            })
                            setSubmiting(false);
                        }}>
                        {({ errors, touched }) => (
                            <Form>
                                <div>
                                    <Field placeholder="Логін" type="text" className={classes.inputData} name="userName" autocomplete="off" />
                                    {errors.userName && touched.userName ? <div className={classes.error}>{errors.userName}</div> : null}
                                </div>
                                <div>
                                    <Field placeholder="Пароль" type="password" className={classes.inputData} name="password" autocomplete="off" />
                                    {errors.password && touched.password ? <div className={classes.error}>{errors.password}</div> : null}
                                </div>
                                {props.authorization.isError && <div className={classes.error}>Невірний логін або пароль</div>}
                                <button className={classes.submit} type="submit">Увійти</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login;
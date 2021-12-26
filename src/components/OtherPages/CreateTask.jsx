import classes from './OtherPage.module.css';
import { Formik, Field, Form, resetForm } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    nameTask: Yup.string()
      .min(2, 'Занадто коротка назва!')
      .max(35, 'Занадто довга назва!')
      .required('Поле порожнє'),
    description: Yup.string()
      .min(2, 'Занадто короткий опис!')
      .max(250, 'Занадто довгий опис!')
      .required('Поле порожнє'),
  });

const CreateTask = (props) => {
    return (
        <div className={classes.inputPage}>
            <div className={classes.windowInput}>
                <div className={classes.title}>Створити завдання</div>
                <Formik
                    initialValues={{ nameTask: '', description: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, { setSubmiting, resetForm }) => {
                        props.addTask(props.idRoom, props.author, values.nameTask, values.description);
                        resetForm({
                            values: {
                                nameTask: '',
                                description: ''
                            }
                        });
                        props.setShowCreateTask(false);
                        setSubmiting(false);
                    }}>
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <Field placeholder="Назва завдання" type="text" autocomplete="off"
                                    className={classes.inputData} name="nameTask" /> 
                                {errors.nameTask && touched.nameTask ? <div className={classes.error}>{errors.nameTask}</div> : null}
                            </div>
                            <div>
                                <Field placeholder="Опис завдання" as="textarea" type="text"
                                    className={classes.inputDescription} name="description" />
                                {errors.description && touched.description ? <div className={classes.error}>{errors.description}</div> : null}
                            </div>
                            <button className={classes.submit} type="submit">Створити</button>
                        </Form>
                    )}
                </Formik>
                <button className={classes.canseletion} onClick={() => props.setShowCreateTask(false)}>Відміна</button>
            </div>
        </div>
    )
}

export default CreateTask;
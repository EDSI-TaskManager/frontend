import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';

export default function LoginForm() {
    return (
        <Formik
             initialValues={{
              username: '',
              password: '',
             }}

             onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 500);
              }}
        >
             <Form>
                {/* <label htmlFor="firstName">First Name</label> */}
                <Field id="username" name="username" placeholder="Username" />
                <Field type="password" id="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
        
    )
}



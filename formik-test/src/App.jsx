import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const App = (props) => {
    
    const { 
        // handleSubmit,
        isSubmitting,
        isValid,
        // errors,
        // touched,
    } = props;

    return (
        // onSubmit={handleSubmit}
        <Form>
            <div className="row">
                Email:
                <Field 
                    name="email"
                    type="email"
                    className="input"
                />
                {/* <Field name="email" type="email" className="input" >
                    {(bundle) => <div>{bundle.field.value}</div>}
                </Field> */}

                <ErrorMessage name="email">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
                {/* {errors.email && touched.email &&
                <div className="error">
                {errors.email}</div>} */}
            </div>

            <div className="row">
                Password:
                <Field 
                    name="password"
                    type="password"
                    className="input"
                />
                <ErrorMessage name="password">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>

            <div className="row">
                <button 
                    type="submit"
                    className={`submit  ${isSubmitting || !isValid ? 'disabled' : ''}`}
                    disabled={isSubmitting || !isValid}
                >Submit</button>
            </div>
        </Form>
    )
}

export default withFormik({

    mapPropsToValues({ defaultEmail }) {
        return {
            email: defaultEmail,
            password: '',
        };
    },

    validate(values) {
        const errors = {};

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length <  8 ) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (values.email.length <  8 ) {
            errors.email = 'Email must be at least 8 characters';
        }

        // sleep(5000);

        // if (Object.keys(errors).length) {
        //     throw errors;
        // }

        return errors;
    },

    handleSubmit(values, formikBag) {
        console.log(values);

        formikBag.setSubmitting(false);
    }
})(App);

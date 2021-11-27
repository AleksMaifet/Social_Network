import {FormikErrors,useFormik} from "formik";
import s from "./LoginAuth.module.css";
import React from "react";

export type LoginAuthValue = {
	email:string
	password:string
	checkbox:string | boolean
}

type LoginAuthType = {
	callback: (FormData:LoginAuthValue) => void
}



export const LoginAuth = ({callback}:LoginAuthType) => {

	const validate = (values: LoginAuthValue) => {
		const errors:FormikErrors<LoginAuthValue> = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		if (!values.password) {
			errors.password = 'Invalid email address';
		}
		return errors;
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			checkbox: false,
		},
		validate,
		onSubmit: values => {
			callback(values)
		},
	})

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<input
						className={formik.errors.email && formik.touched.email ? s.errorStyle : ''} id={'email'} {...formik.getFieldProps('email')}
						placeholder={'Login'}/>
					{formik.errors.email && formik.touched.email &&
					<div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.email}</div>}
				</div>
				<div>
					<input
						className={formik.errors.password && formik.touched.password ? s.errorStyle : '' } id={'password'} {...formik.getFieldProps('password')}
						placeholder={'Password'} type={'password'}
						autoComplete={'on'}/>
					{formik.errors.password && formik.touched.password &&
					<div style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.password}</div>}
				</div>
				<div>
					<input checked={formik.values.checkbox} {...formik.getFieldProps('checkbox')} id={'checkbox'} type='checkbox'/> remember me
				</div>
				<div>
					<button type={'submit'}>Login</button>
				</div>
			</form>
		</>
	)
}
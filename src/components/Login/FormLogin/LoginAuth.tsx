import {Field, Form, Formik} from "formik";
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

export const LoginAuth =  ({callback}:LoginAuthType) => {

	const initialValues = {
		email: '',
		password: '',
		checkbox:'',
	};
	const validateEmail = (value:string) => {
		let error;
		if (!value) {
			error = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Invalid email address';
		}
		return error;
	}

	const validatePass = (value:string) => {
		let error;
		if (!value) {
			error = 'Invalid email address';
		}
		return error;
	}
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
				callback(values)
				}}
			>
				{({ errors, touched,isSubmitting}) => (
					<Form>
						<div>
							<Field className={ errors.email && touched.email && s.errorStyle} id="email" name="email"  placeholder={'Login'} validate={validateEmail}/>
							{errors.email && touched.email && <div style={{color:'red',fontWeight:'bold'}}>{errors.email}</div>}
						</div>
						<div>
							<Field className={ errors.password &&  touched.password && s.errorStyle} id="password" name="password" placeholder={'Password'} validate={validatePass} type={'password'}/>
							{errors.password && touched.password && <div style={{color:'red',fontWeight:'bold'}}>{errors.password}</div>}
						</div>
						<div>
							<Field id='checkbox' name='checkbox' type='checkbox'/> remember me
						</div>
						<div>
							<button type="submit" >Login</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}
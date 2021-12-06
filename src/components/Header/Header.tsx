import React from "react";
import s from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {LogOutTC} from "../Reducer/auth-reducer";
import {reducersHandlerType} from "../Reducer/redux-store";
import userPhoto from "../../img/default-avatar.png";
import b from '../button.module.css'
import LogoHeader from '../../img/174867.png'


export const Header =React.memo((props) => {
	const dispatch = useDispatch()
	const authLogin = useSelector<reducersHandlerType,string | null>(state => state.auth.data.login)
	const authPhoto = useSelector<reducersHandlerType, string | null>(state => state.auth.photo)


	const LogOut = () => {
		dispatch(LogOutTC())
	}
	return (
		<>
			<header className={s.header}>
				<img
					src={LogoHeader}/>
				<div className={s.authWrapper}>
					<div className={s.authWrapperLoginBlock}>
						<div>{authLogin ? authLogin : 'Login'}</div>
						<div style={{textAlign: "center"}}>
						</div>
						<img style={{width: '40px', height: "40px"}} src={authPhoto ? authPhoto : userPhoto}/>
					</div>
					{authLogin && <div>
						<button className={b.default} onClick={LogOut}>Log out</button>
					</div>}
				</div>
			</header>
		</>
	)
})

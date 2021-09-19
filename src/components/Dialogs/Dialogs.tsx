import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import {DialogsPageType, RootStateType} from "../state";

type DialogsType = {
	dialogs:DialogsPageType
}

const Dialogs = (props:DialogsType) => {
	let dialogsItem = props.dialogs.dialogs.map(k => {
		return <NavLink to={`/dialogs/${k.id}`}>
			<img className={s.avatar} src={k.img}/>
			{k.name}
		</NavLink>
	})
	let message = props.dialogs.messages.map(m => {
		return <div>{m.message}</div>
	})


	return(
		<div className={s.dialog_wrapper}>
			<div className={s.dialog_item}>
				<div className={s.item}>
					{dialogsItem}
				</div>
			</div>
			<div className={s.messages_item}>
					{message}
			</div>
		</div>
	)
}

export default Dialogs;
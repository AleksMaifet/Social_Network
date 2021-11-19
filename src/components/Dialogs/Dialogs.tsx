import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';
import {DialogsPageType} from "../Reducer/dialogsReducer";
import {useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";


const Dialogs = React.memo(() => {
	const dialogs = useSelector<reducersHandlerType, DialogsPageType>(state => state.dialogsPage);

	let dialogsItem = dialogs.dialogs.map(k => {
		return <NavLink key={k.id} to={`/dialogs/${k.id}`}>
			<img className={s.avatar} src={k.img}/>
			{k.name}
		</NavLink>
	})
	let message = dialogs.messages.map(m => {
		return <div key={m.id}>{m.message}</div>
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
})

export default Dialogs;
import React from "react";
import s from './MyPost.module.css';

type PropsMessageType = {
	message: string,
	caunt: number
}

export function MyPost(props: PropsMessageType) {
	return (
				<div className={`${s.item} ${s.avatar}`}>
					<img src='https://hostelgame.ru/assets/images/avatar.jpg'/>
					<p>{props.message}</p>
					<div className={s.like}>
						<img className={s.like} src='https://freesvg.org/img/1465762629.png'/>
						<p>{props.caunt}</p>
					</div>
				</div>
	)
}
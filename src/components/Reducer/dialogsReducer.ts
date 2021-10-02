import {v1} from "uuid";


type MessageType = {
	id:string
	message:string
}
type DialogsType = {
	id:string
	name:string
	img:string
}

export type DialogsPageType ={
	dialogs:DialogsType[]
	messages:MessageType[]
}

const initialState = {
		dialogs: [
			{id: v1(), name: 'Dimych', img: 'https://freesvg.org/img/Cartoon-Man-Avatar-2.png'},
			{id: v1(), name: 'Aleks', img: 'https://freesvg.org/img/Cartoon-Man-Avatar-2.png'},
			{id: v1(), name: 'Victor', img: 'https://freesvg.org/img/Cartoon-Man-Avatar-2.png'},
			{id: v1(), name: 'Sveta', img: 'https://freesvg.org/img/Cartoon-Woman-Avatar-2.png'},
			{id: v1(), name: 'Nikita', img: 'https://freesvg.org/img/Cartoon-Man-Avatar-2.png'},
		],
		messages: [
			{id: v1(), message: 'Hi'},
			{id: v1(), message: 'How are you?'},
			{id: v1(), message: 'Yo'},
			{id: v1(), message: 'Yoo'},
			{id: v1(), message: 'Yoo'}
		]
	}

export const dialogsReducer = (state =initialState,action:any) => {
	return state
}
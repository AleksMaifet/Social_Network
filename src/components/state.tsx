import { v1 } from "uuid";

//types state

type MessageType = {
	id:string
	message:string
}
type DialogsType = {
	id:string
	name:string
	img:string
}
export type PostType = {
	id:string
	message:string
	likesCount:number
}
type newPostTextType = string

export type ProfilePageType ={
	posts: PostType[]
	newPostText:newPostTextType
}
export type DialogsPageType ={
	dialogs:DialogsType[]
	messages:MessageType[]
}
type SidebarType = {}
export type RootStateType = {
	profilePage:ProfilePageType
	dialogsPage:DialogsPageType
	sidebar:SidebarType
}
type StoreType = {
	_state:RootStateType
	_rerenderEntireTree:()=>void
	subscribe:(observer: () => void) => void
	getState:() => RootStateType
	dispatch:(action:ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddNewPostAC>


export const AddPostAC = () => {
	return {
		type:'ADD-POST'
	} as const
}

export const AddNewPostAC = (newMessage : string) => {
	return {
		type:'ADD-NEW-MESSAGE',
		newMessage:newMessage
	}
}


//store ООП

let store: StoreType = {
	_state: {
		profilePage: {
			posts: [
				{id: v1(), message: 'Hi, how are you?', likesCount: 12},
				{id: v1(), message: 'It is my post', likesCount: 11},
				{id: v1(), message: 'blabla', likesCount: 11},
				{id: v1(), message: 'dada', likesCount: 11}
			],
			newPostText: ''
		},
		dialogsPage: {
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
		},
		sidebar: {}
	},
	_rerenderEntireTree() {
		console.log('rerender');
	},
	dispatch(action){
		if(action.type === 'ADD-POST'){
			let newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
			this._state.profilePage.posts.unshift(newPost);
			this._state.profilePage.newPostText = '';
			this._rerenderEntireTree();
		}
		else if (action.type === 'ADD-NEW-MESSAGE'){
			this._state.profilePage.newPostText = action.newMessage;
			this._rerenderEntireTree();
	}},
	subscribe(observer: () => void) {
		this._rerenderEntireTree = observer;
	},
	getState(){
		return this._state
	}
}

export default store;

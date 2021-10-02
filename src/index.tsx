import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./components/Reducer/redux-store";


let rerenderEntireTree = () => {
	let state = store.getState();
	ReactDOM.render(
		<React.StrictMode>
			<App posts={state.profilePage} dialogs={state.dialogsPage} dispatch={store.dispatch.bind(store)}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);



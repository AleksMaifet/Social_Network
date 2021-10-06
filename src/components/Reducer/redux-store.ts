import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";


const reducersHandler = combineReducers({
	profilePage: profileReducer,
	dialogsPage:dialogsReducer,
	sidebar: sideBarReducer
})

export type reducersHandlerType = ReturnType<typeof reducersHandler>

export const store = createStore(reducersHandler);
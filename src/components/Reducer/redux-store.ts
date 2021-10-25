import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {userReducer} from "./usersReducer";


const reducersHandler = combineReducers({
	profilePage: profileReducer,
	dialogsPage:dialogsReducer,
	sidebar: sideBarReducer,
	userPage:userReducer
})

export type reducersHandlerType = ReturnType<typeof reducersHandler>

export const store = createStore(reducersHandler);

//@ts-ignore
window.store = store
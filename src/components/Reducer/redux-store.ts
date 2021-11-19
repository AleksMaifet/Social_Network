import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


const reducersHandler = combineReducers({
	profilePage: profileReducer,
	dialogsPage:dialogsReducer,
	sidebar: sideBarReducer,
	userPage:userReducer,
	auth:authReducer,
})

export type reducersHandlerType = ReturnType<typeof reducersHandler>

export const store = createStore(reducersHandler,applyMiddleware(thunk));

//@ts-ignore
window.store = store
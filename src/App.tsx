import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigator} from "./components/Navigator/Navigator";
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "./components/Reducer/redux-store";
import {getAuthTC} from "./components/Reducer/auth-reducer";
import {Load} from "./components/Load/Load";
import {RoutesTree} from "./components/Routes/Route";


function App() {
	const dispatch = useDispatch()
	const isLoadAth = useSelector<reducersHandlerType, boolean>(state => state.auth.isLoad)

	useEffect(() => {
		dispatch(getAuthTC())
	}, [dispatch])


  if (isLoadAth){
    return <Load/>
  }

	return (
		<HashRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navigator/>
				<div className={'app-wrapper-content'}>
					<RoutesTree/>
				</div>
			</div>
		</HashRouter>
	)
}

export default App;

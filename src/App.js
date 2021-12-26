import './App.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ReduxStore';
import ListTasksContainer from './components/ListTasks/ListTasksContainer';
import ListRoomsContainer from './components/ListRooms/ListRoomsContainer';
import TaskPageContainer from './components/TaskPage/TaskPageContainer';
import MainContainer from './components/Main/MainContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/OtherPages/LoginContainer';
import NotFound from './components/OtherPages/NotFound';

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/main' element={<MainContainer />} />
          <Route path='/list-rooms/room/:idRoom/task/:idTask' element={<TaskPageContainer />} />
          <Route path='/list-rooms/room/:idRoom' element={<ListTasksContainer />} />
          <Route path='/list-rooms' element={<ListRoomsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )
}
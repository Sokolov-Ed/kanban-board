import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { withRouter } from 'react-router';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ReduxStore';
import ListTasksContainer from './components/ListTasks/ListTasksContainer';
import ListRoomsContainer from './components/ListRooms/ListRoomsContainer';
import TaskPageContainer from './components/TaskPage/TaskPageContainer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path='/main' element={<Main />} />
          <Route path='/list-rooms/room/:idRoom/task/:idTask' element={<TaskPageContainer />} />
          <Route path='/list-rooms/room/:idRoom' element={<ListTasksContainer />} />
          <Route path='/list-rooms' element={<ListRoomsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export const MainApp = (props) => {
  return(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}
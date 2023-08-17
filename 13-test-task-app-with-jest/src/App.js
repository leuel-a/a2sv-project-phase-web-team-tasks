import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddTask from './components/AddTask';
import SingleTask from './components/SingleTask';
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/create_task' element={ <AddTask /> }/>
          <Route path='/task/:id' element={ <SingleTask/> } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

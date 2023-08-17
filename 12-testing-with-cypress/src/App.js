import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './styles/main.css';
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create_note" element={ <CreateNote /> } />
          <Route path="/edit_note/:id" element={ <EditNote /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

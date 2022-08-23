// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import CreatePirate from './views/CreatePirate';
import DetailsPage from './views/DetailsPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/pirates" element={<Dashboard/>}></Route>
        <Route path="/pirate/new" element={<CreatePirate/>}></Route>
        <Route path="/pirate/:id" element={<DetailsPage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

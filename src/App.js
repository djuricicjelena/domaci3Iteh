import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PocetnaDigimoni from './strane/PocetnaDigimoni';
import Pretraga from './strane/Pretraga';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PocetnaDigimoni />} />
          <Route path="pretraga" element={<Pretraga />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

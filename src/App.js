import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsList from './components/RocketsList';
import MyProfile from './components/MyProfile';
import MissionsTable from './components/MIssionTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<RocketsList />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/missions" element={<MissionsTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

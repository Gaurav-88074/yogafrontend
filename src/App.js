import './App.css';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Homepage from './screens/Homepage';
import Dashboard from './screens/Dashboard';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

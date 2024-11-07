import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/Login/login";
import Dashboard from './Components/Doctor/doctor'

function App() {
  return (
    // <Login/>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

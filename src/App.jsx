import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LandingPage from './Pages/LandingPage'
import './App.css';

function App() {
  return (
   <Router basename="/Robotics_for_Industries">
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
   </Router>
  );
}

export default App;

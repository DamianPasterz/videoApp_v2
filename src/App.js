
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;

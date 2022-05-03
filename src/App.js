import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router> <Nav /> <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes> </Router>
  );
}

export default App;
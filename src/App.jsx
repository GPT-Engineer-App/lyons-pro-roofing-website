import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from './components/NavBar';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;

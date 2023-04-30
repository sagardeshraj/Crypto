import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Page1 from './pages/page1';
import Page2 from './pages/page2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/selectPage" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
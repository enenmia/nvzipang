import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Ethics from './pages/Ethics';
import Gender from './pages/Gender';
import Main from './pages/Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ethics" />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

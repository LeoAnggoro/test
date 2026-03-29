import { BrowserRouter as Router } from 'react-router-dom';

import './assets/scss/style.scss'; // Pastikan pakai ./ jika di dalam src
import LandingPage from './pages/LandingPages'; // Tambahkan ./ di depan

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage />
      </Router>
    </div>
  );
}

export default App;
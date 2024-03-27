import Aboutt from './pages/about';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/page" element={<Aboutt />} />
      </Routes>
    </Router>
  )
};

export default App;
import Aboutt from './pages/about';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Apptodo from './pages/todolist';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/page" element={<Aboutt />} />
        <Route path="/todolist" element={<Apptodo />} />
      </Routes>
    </Router>
  )
};

export default App;
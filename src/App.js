import Layout from './components/Layout';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

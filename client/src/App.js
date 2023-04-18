import './App.css';
import {React} from 'react';

import Register from '../src/components/register/Register';
import Login from './components/login/Login';
import About from './components/about/About';
import Addpost from './components/addpost/Addpost';
import Admindashboard from './components/Dashboards/Admin';
import Authordashboard from './components/Dashboards/Author/Author';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <nav>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="about" element={<About/>} />
          <Route path="register" element={<Register />} />
          <Route path="/addblog" element={<Addpost/>} />
          <Route path="/authordashboard" element={<Authordashboard/>} />
          <Route path="/admindashboard" element={<Addpost/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </nav>
  );
}

export default App;

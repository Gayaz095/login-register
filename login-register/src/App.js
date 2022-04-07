import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import ExitPage from './ExitPage';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/homePage' element={<HomePage />} ></Route>
        <Route path='/exitPage' element={<ExitPage />} ></Route>
      </Routes>
    </div>
  );
};

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

import './App.css';
import PeopleListPage from './pages/PeopleListPage';
import Footer from './components/Footer';
import Menu from './components/Menu';

const App:React.FC =()=>{

  return (
    <div className="App">
      <Navbar />
      <Menu/>
      <div className='container'> 
        <Routes>
          <Route element={<TodosPage/>} path="/todoList" />
          <Route element={<AboutPage/>} path="/about"/>
          <Route element={<PeopleListPage/>} path="/"/>
        </Routes>
      </div>
      <Footer/>
      </div>
  );
}

export default App;




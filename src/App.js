import React from 'react'
import './App.css';
import Logo from './components/Logo'
import SignInPage from './components/SignInPage'
import TodoPage from './components/TodoPage'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {

  return (
    <Router>
      <main className="App">
        <Logo />
        <Routes>
            <Route path='/' element={<SignInPage/>}></Route>
            <Route path='/todos' element={<TodoPage />}></Route>
        </Routes>  
      </main>
    </Router>
  );
}

export default App;

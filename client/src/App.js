import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useReducer } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Register from './Register'
import Login from './Login'
import Navbar from './Navbar'
import { initialState, reducer } from './Reducer';
import Logout from './Logout';

export const context = createContext()
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <BrowserRouter>
        <context.Provider value={{ state, dispatch }}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Navbar />} >
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/signup" element={<Register/>} />
              <Route path="/signin" element={<Login/>} />
              <Route path="/logout" element={<Logout/>} />
            </Route>
          </Routes>
        </context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

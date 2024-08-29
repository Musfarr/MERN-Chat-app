import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes, Route}  from 'react-router-dom'
import {React , lazy}  from 'react'


const Home = lazy(()=> import("./pages/Home"))
const Login= lazy(()=> import("./pages/Login"))
const Chat = lazy(()=> import("./pages/Chat"))
const Groups= lazy(()=> import("./pages/Groups"))

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/home' element = {<Home/>} />
        <Route path='/' element = {<Login/>} />
        <Route path='/chat/:chatid' element = {<Chat/>} />
        <Route path='/groups' element = {<Groups/>} />

        


    </Routes>
    </BrowserRouter>
  );
}

export default App;

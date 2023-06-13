import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './components/Createpost';
import React,{createContext,useState, useSyncExternalStore} from 'react';
import { LoginContext } from './context/LoginContext';
import Modal from "./components/Model";


function App() {
  const [userLogin, setuserLogin] = useState(false)
  const [modalOpen, setmodalOpen] = useState(false)
  return (
    <BrowserRouter>
        <div className="App">
        <LoginContext.Provider value={{setuserLogin,setmodalOpen}}>
           <Navbar login={userLogin}/>
           <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/SignUp" element={<SignUp/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
            <Route path="/Createpost" element={<Createpost/>}></Route>
            
            </Routes>
           <ToastContainer theme='dark' />
           
           {modalOpen && <Modal setmodalOpen={setmodalOpen}></Modal>}
           </LoginContext.Provider>
         </div>
    </BrowserRouter>
    
  );
}

export default App;

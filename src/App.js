import { useEffect, useState } from 'react';
import './App.css';
import "./style.scss";
import "./media-query.css";

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { About, AddEditBlog, Auth, Detail, Home, NotFound } from './pages';
import { Header } from './components';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function App() {
  const [active, setActive] = useState('home');
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    })
  }

  // { if(!user.uid) return navigate("/"); }
  
  return (
    <div className="App">
      <Header active={active} setActive={setActive} user={user} handleLogout={handleLogout} />
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={ <Home user={user} setActive={setActive} /> } />
        <Route path='/detail/:id' element={ <Detail setActive={setActive} /> } />
        <Route path='/auth' element={ <Auth setActive={setActive} setUser={setUser} /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/create' element={user?.uid ? <AddEditBlog user={user} setActive={setActive} /> : <Navigate to="/" /> } />
        <Route path='/update/:id' element={user?.uid ? <AddEditBlog user={user} setActive={setActive} /> : <Navigate to="/" /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

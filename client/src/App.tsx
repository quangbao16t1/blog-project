import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Register from 'features/Auth/Register';
import Login from 'features/Auth/Login';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { authSelector, logout } from 'features/Auth/authSlice';
import StorageKeys from 'constants/storage-keys';
import Home from 'features/HomPage/Home';
import { CurrentUser } from 'types/auth.type';
import { ToastContainer } from 'react-toastify';

function App() {

  // const [user, setUser] = useState();

  const { currentUser, isAuth, isLoading } = useAppSelector(authSelector);

  console.log(currentUser);

  const dispatch = useAppDispatch();

  const logoutt = () => {
    dispatch(logout())
  }

  return (
    <div>
      <BrowserRouter >
        <ToastContainer style={{marginTop: '100px'}} />
        <Header currentUser={currentUser} logout={() => logoutt()} />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

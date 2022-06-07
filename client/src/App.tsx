import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Register from 'features/Auth/Register';
import Login from 'features/Auth/Login';
import { useAppSelector } from 'app/hook';
import { authSelector } from 'features/Auth/authSlice';
import StorageKeys from 'constants/storage-keys';
import Home from 'features/HomPage/Home';

function App() {

  // const [user, setUser] = useState();

  const { currentUser, isAuth } = useAppSelector(authSelector);

  console.log(currentUser, isAuth)
  // useEffect(() => {
  //   const bbbbb = localStorage.getItem(StorageKeys.user);
  //   if (bbbbb) {
  //     const userJson = (JSON.parse(bbbbb));
  //     setUser(userJson);
  //   }

  // }, [StorageKeys.user]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          {!currentUser
            ? <Route path="/login" element={<Login />} />
            : <Route path='/home' element={<Home />} />
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

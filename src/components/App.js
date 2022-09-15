import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { getPosts } from '../api';
import { Home,Login,Signup,Settings } from '../pages';
import { Loader, Navbar } from './';
import { useAuth } from '../hooks/index';


const About =()=>{
    return <h1>About</h1>;
}

const UserInfo =()=>{
  return <h1>User</h1>;
}
const Page404 =()=>{
  return <h1 style={{textAlign:'center'}}> 404 Page not Found</h1>;
}

function App() {
  const auth = useAuth();
 

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
        <Router>
        <Navbar />
            <Routes>
              <Route exact path='/' element={<Home /> }/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/register' element={<Signup/>}/>
              <Route exact path='/settings' element={<Settings/>}/>
              <Route path='*' element={<Page404/>}/>          
            </Routes>
        </Router>
    </div>
  );
}

export default App;

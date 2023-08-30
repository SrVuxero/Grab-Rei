import { Route, Routes } from 'react-router-dom';
import Homepage from './page/homepage';
import English from './page/English';
import Drive from './page/drive';
import Help from './page/Help';
import Login from './page/Login';
import './App.css';


function App() {

  return (
    <Routes>
      <Route path='/' Component={Homepage}></Route>
      <Route path='/english' Component={English}></Route>
      <Route path='/help' Component={Help}></Route>
      <Route path='/drive' Component={Drive}></Route>
      <Route path='/login' Component={Login}></Route>
    </Routes>

  );
}

export default App
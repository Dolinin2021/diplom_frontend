import { Routes, Route } from 'react-router-dom';
import Login from './components/login.component';
import Register from './components/register.component';
import Home from './components/home.component';
import Profile from './components/profile.component';
import FileList from './components/filelist.component';
import UserList from './components/userlist.component';
import FileDetail from './components/filedetail.component';
import CreateFile from './components/createfile.component';
import NotFound from './components/notfound.component';
import Menu from './components/menu.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  return (
    <div>
      <Menu />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/filelist' element={<FileList />} />
          <Route path='/filelist/detail/:id' element={<FileList />} />
          <Route path='/file/detail/:id' element={<FileDetail />} />
          <Route path='/userlist' element={<UserList />} />
          <Route path='/userlist/detail/:id' element={<Profile />} />
          <Route path='/filelist/new' element={<CreateFile />} />
          <Route path='/filelist/new/:id' element={<CreateFile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

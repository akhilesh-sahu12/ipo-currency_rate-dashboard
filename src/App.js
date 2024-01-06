import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Home/Header';
import Sidebar from './components/Home/Sidebar';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import { AuthProvider } from './context/AuthContext';
import AuthGuard from './guards/AuthGuard';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard'
import ExchangeRateChart from './components/Charts/HighChartDataFetcher'

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <AuthProvider>
    <Router>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthGuard />}>
          <Route path='/chart' element={<ExchangeRateChart/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

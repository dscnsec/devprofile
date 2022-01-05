import './App.css';
import Login from './pages/Login'
import Form from './pages/Form'
import Dashboard from './pages/Dashboard'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/"     element={<Login />} />
          <Route exact path="/form" element={<Form />}  />
          <Route exact path="/dashboard" element={<Dashboard />}  />
          <Route exact path="/test" element={<Home />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

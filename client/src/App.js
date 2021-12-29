import './App.css';
import logo from './logo.svg';
import Login from './pages/Login'
import Form from './pages/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

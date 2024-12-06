import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import EventForm from './pages/EventForm'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div class='flex' style={{
      backgroundColor: 'teal',
      height: '96vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/form' element={<EventForm />} />
        </Routes>
      </BrowserRouter>
      <Toaster position='bottom-center' />
    </div>
  )
}

export default App

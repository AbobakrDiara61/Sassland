import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './page/Home'

import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './page/NotFoundPage'
function App() {


  return (
    <>
      <Header />
      <main className='pt-16'>
        <Routes>
          <Route path="/Sassland/" element={<Home />} />
          <Route path="/Sassland/docs" element={<>Docs</>} />
          <Route path='/Sassland/*' element={<NotFoundPage />} />
        </Routes>
      <Footer />
      </main>
    </>
  )
}

export default App

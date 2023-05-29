import { Navbar, Footer } from './components/index'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Home, About, Booking, Treatments, Contact } from './pages/index'
// mui
import { Container } from '@mui/material'
// Router DOM
import { Route, Routes } from 'react-router-dom'

import './App.css'

function App () {
  return (
    <>
      <Navbar />
      <Container disableGutters>
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/treatments' element={<Treatments />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App

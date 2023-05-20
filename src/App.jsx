import { Navbar } from './components/index'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Home, About, Booking, Doctors, Treatments } from './pages/index'
// mui
import { Container } from '@mui/material'
// Router DOM
import { Route, Routes } from 'react-router-dom'

import './App.css'

// ? conv commits
// ? fix --type(scope --optional!): add extendes diagnostic to compiler --description

function App () {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/treatments' element={<Treatments />} />
        </Routes>
      </Container>
    </>
  )
}

export default App

import { Box, Container, Divider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// images
import logo from '../assets/images/logo.png'
// icons
import { TiPhoneOutline, TiMap, TiTime } from 'react-icons/ti'
const Footer = () => {
  return (
    <Container sx={{ padding: '2rem 0 .6rem 0', height: '20vh' }} disableGutters>
      <Container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'start', gap: '1rem', paddingBottom: '1rem' }}>
        <Box>
          <Link to='/' style={{ color: '#666666', textDecoration: 'none', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '.6rem', paddingBottom: '1rem' }}>
            <img src={logo} alt='smile sense logo' style={{ width: '2rem', backgroundColor: '#fff', borderRadius: '50%' }} />{' '}Smile Sense
          </Link>
          <Box sx={{ color: '#666666', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            <Typography>
              <TiPhoneOutline />{' '}285-725-2107
            </Typography>
            <Typography>
              <TiMap />{' '}267 something St, Somewhere, NewYork
            </Typography>
            <Typography>
              <TiTime />{' '}Mon - Thu: 8:30 - 6pm
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 500, letterSpacing: '.1rem' }}>Company</Typography>
          <Typography color='text.secondary' component={Link} to='/'>Home</Typography>
          <Typography color='text.secondary' component={Link} to='/about'>About</Typography>
          <Typography color='text.secondary' component={Link} to='/contact'>Contact</Typography>
          <Typography color='text.secondary' component={Link} to='/'>FAQs</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
          <Typography variant='subtitle1' sx={{ fontWeight: 500, letterSpacing: '.1rem' }}>Services</Typography>
          <Typography color='text.secondary' component={Link} to='/treatments'>Tooth extraction</Typography>
          <Typography color='text.secondary' component={Link} to='/treatments'>Dental implants</Typography>
          <Typography color='text.secondary' component={Link} to='/treatments'>Braces</Typography>
          <Typography color='text.secondary' component={Link} to='/treatments'>Dental crowns</Typography>
        </Box>
      </Container>
      <Divider sx={{ padding: '.4rem' }} />
      <Typography align='center' sx={{ color: '#666666', padding: '.6rem' }}>&copy; Smile Sense 2023 All rights reserved</Typography>
    </Container>
  )
}

export default Footer

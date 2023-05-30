import { Link } from 'react-router-dom'
import { Container, Box, Button, Typography, Divider, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
// images
import heroImg from '../assets/images/modelgirl-2.png'
import avatar from '../assets/images/avatar.jpg'
import avatar2 from '../assets/images/avatar-2.jpg'
import avatar3 from '../assets/images/avatar-3.jpg'
import chiefDoctor from '../assets/images/chiefDoctor.png'
// react icons
import DoctorCard from '../components/DoctorCard'
import { RxDotFilled } from 'react-icons/rx'

// hero image styles
const heroImage = {
  height: '100vh',
  width: '100%',
  backgroundImage: `url(${heroImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const Home = () => {
  return (
    <>
      <main className='main'>
        <Container className='section' disableGutters id='hero'>
          <Box className='heroImg' style={heroImage}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 0 3rem 0' }}>
                <Typography variant='h1' textAlign='center' textTransform='uppercase' sx={{ color: '#dee2e6', fontSize: { xs: '3rem', sm: '3.8rem' }, fontWeight: 500, letterSpacing: '.1rem', lineHeight: 1.6, padding: '0 .8rem' }}>we believe in the power of your smile</Typography>
                <Typography variant='h6' sx={{ color: '#83c5be', fontWeight: 500, textTransform: 'capitalize' }}>free consultation</Typography>
                <Button component={Link} to='/booking' variant='contained' size='large' color='inherit' sx={{ ':hover': { backgroundColor: '#53999b', color: '#fff' }, textTransform: 'capitalize', fontWeight: 600, letterSpacing: '.1rem', borderRadius: '1.2rem', padding: '.4rem 4rem', margin: '.8rem 0', color: '#fff', backgroundColor: '#83c5be' }}>book online</Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem', minhHeight: '100vh', padding: '1rem .6rem' }} id='about'>
        <Box>
          <Typography variant='h2' align='center' textTransform='uppercase' sx={{ color: '#212529', fontSize: { xs: '2.2rem', sm: '2.8rem' }, fontWeight: 500, letterSpacing: '.1rem', lineHeight: 1.6 }}>what our patients are saying</Typography>
          <Typography align='center' color='text.secondary'>Sed posuere molestie felis sagittis faucibus. Vivamus bibendum dui in tincidunt auctor. Curabitur at turpis ac magna porta bibendum a ac elit. Integer rhoncus nibh ac gravida porttitor. Aliquam semper consectetur posuere.</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <DoctorCard doctorName='Dr. Brown' stars={4} avatarImg={avatar} />
          <DoctorCard doctorName='Dr. Mckency' stars={5} avatarImg={avatar2} />
          <DoctorCard doctorName='Dr. Smith' stars={3} avatarImg={avatar3} />
        </Box>
      </Container>
      <Container sx={{ width: '100%', height: '20rem', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', backgroundColor: '#eef8ff', borderRadius: '.4rem' }}>
          <Typography align='center' gutterBottom sx={{ padding: '0 2rem', fontSize: { xs: '1.4rem', md: '2rem' }, letterSpacing: '.1rem' }}>Did you know our consultations are completely free and confidential?</Typography>
          <Button component={Link} to='/booking' variant='contained' sx={{ ':hover': { backgroundColor: '#53999b' }, color: '#fff', backgroundColor: '#83c5be', borderRadius: '1.4rem', padding: '.6rem 3rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>request appointment</Button>
        </Box>
      </Container>
      <Container sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '0 2rem', borderBottom: '1px solid #d9d9d9' }}>
        <Box sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: { xs: 'center', md: 'justify', padding: { sm: '0 1rem' } } }}>
          <Typography gutterBottom variant='h5' sx={{ fontSize: { xs: '2.2rem', sm: '2.8rem' }, fontWeight: 500, letterSpacing: '.1rem', marginTop: '2rem' }}>Meet our expert dentist</Typography>
          <Typography sx={{ lineHeight: 1.6 }}>Sed posuere molestie felis sagittis faucibus. Vivamus bibendum dui in tincidunt auctor. Curabitur at turpis ac magna porta bibendum a ac elit. Integer rhoncus nibh ac gravida porttitor. Aliquam semper consectetur posuere.</Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Divider sx={{ padding: '.8rem' }} />
            <Typography gutterBottom sx={{ color: '#83c5be', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '.1rem', padding: '.8rem 0' }}>Licenses and certifications</Typography>
            <List>
              <ListItem disableGutters>
                <ListItemIcon><RxDotFilled /></ListItemIcon>
                <ListItemText sx={{ color: '#878787' }}>Certified Dental Technician</ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon><RxDotFilled /></ListItemIcon>
                <ListItemText sx={{ color: '#878787' }}>Diplomate in Dental Public Health</ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon><RxDotFilled /></ListItemIcon>
                <ListItemText sx={{ color: '#878787' }}>Infection Control Certification (CIC)</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
        <img src={chiefDoctor} alt='chief doctor photo' style={{ flex: 1, alignSelf: 'end', width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'bottom' }} />
      </Container>
    </>
  )
}

export default Home

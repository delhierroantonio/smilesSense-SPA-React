import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material'
// import { AiOutlineMedicineBox } from 'react-icons/ai'
import { BiRightArrowAlt } from 'react-icons/bi'
import service1 from '../assets/icons/service.png'
import service2 from '../assets/icons/service-2.png'
import service3 from '../assets/icons/service-3.png'
import service4 from '../assets/icons/service-4.png'
import service5 from '../assets/icons/service-5.png'
import service6 from '../assets/icons/service-6.png'
import pattern from '../assets/images/pattern-2.jpg'
import { Link } from 'react-router-dom'

const Treatments = () => {
  return (
    <Container sx={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', padding: '1rem auto' }}>
      <Typography variant='h4' align='center' sx={{ fontSize: { xs: '2.2rem', sm: '2.8rem' }, letterSpacing: '.1rem', padding: '2rem 0' }}>The <span style={{ color: '#53999b', fontWeight: 500 }}>Best Quality</span> service for your family</Typography>
      <Box component='img' src={pattern} alt='pattern illustration' sx={{ width: '100%', height: '5rem', objectFit: 'cover', objectPosition: 'bottom', borderRadius: '.4rem', opacity: '0.7' }} />
      <Box sx={{ paddingTop: '2rem' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.2rem' }}>
          <Card sx={{ maxWidth: { xs: 340, sm: 420 }, padding: '0', margin: '1rem auto' }}>
            <Typography variant='body1' sx={{ color: '#7ec1bb', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem', padding: '.8rem' }}><img src={service1} style={{ width: '2rem', opacity: '0.6' }} />Preventive</Typography>
            <CardContent>
              <Typography color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
              <Typography style={{ display: 'flex', alignItems: 'center', gap: '.2rem', fontStyle: 'italic', fontSize: '.8rem', color: '#53999b', cursor: 'pointer' }}>Learn more<BiRightArrowAlt /></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: { xs: 340, sm: 420 }, padding: '0', margin: '1rem auto' }}>
            <Typography variant='body1' sx={{ color: '#7ec1bb', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem', padding: '.8rem' }}><img src={service2} style={{ width: '2rem', opacity: '0.6' }} />Crowns</Typography>
            <CardContent>
              <Typography color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
              <Typography style={{ display: 'flex', alignItems: 'center', gap: '.2rem', fontStyle: 'italic', fontSize: '.8rem', color: '#53999b', cursor: 'pointer' }}>Learn more<BiRightArrowAlt /></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: { xs: 340, sm: 420 }, padding: '0', margin: '1rem auto' }}>
            <Typography variant='body1' sx={{ color: '#7ec1bb', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem', padding: '.8rem' }}><img src={service3} style={{ width: '2rem', opacity: '0.6' }} />Implants</Typography>
            <CardContent>
              <Typography color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
              <Typography style={{ display: 'flex', alignItems: 'center', gap: '.2rem', fontStyle: 'italic', fontSize: '.8rem', color: '#53999b', cursor: 'pointer' }}>Learn more<BiRightArrowAlt /></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: { xs: 340, sm: 420 }, padding: '0', margin: '1rem auto' }}>
            <Typography variant='body1' sx={{ color: '#7ec1bb', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem', padding: '.8rem' }}><img src={service4} style={{ width: '2rem', opacity: '0.6' }} />Dentures</Typography>
            <CardContent>
              <Typography color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
              <Typography style={{ display: 'flex', alignItems: 'center', gap: '.2rem', fontStyle: 'italic', fontSize: '.8rem', color: '#53999b', cursor: 'pointer' }}>Learn more<BiRightArrowAlt /></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: { xs: 340, sm: 420 }, padding: '0', margin: '1rem auto' }}>
            <Typography variant='body1' sx={{ color: '#7ec1bb', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem', padding: '.8rem' }}><img src={service5} style={{ width: '2rem', opacity: '0.6' }} />Whitening</Typography>
            <CardContent>
              <Typography color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
              <Typography style={{ display: 'flex', alignItems: 'center', gap: '.2rem', fontStyle: 'italic', fontSize: '.8rem', color: '#53999b', cursor: 'pointer' }}>Learn more<BiRightArrowAlt /></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: { xs: 340, sm: 420 }, padding: '0', margin: '1rem auto' }}>
            <Typography variant='body1' sx={{ color: '#7ec1bb', display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1rem', padding: '.8rem' }}><img src={service6} style={{ width: '2rem', opacity: '0.6' }} />Braces</Typography>
            <CardContent>
              <Typography color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
              <Typography style={{ display: 'flex', alignItems: 'center', gap: '.2rem', fontStyle: 'italic', fontSize: '.8rem', color: '#53999b', cursor: 'pointer' }}>Learn more<BiRightArrowAlt /></Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', backgroundColor: '#eef8ff', borderRadius: '.4rem' }}>
        <Typography align='center' sx={{ padding: '.6rem 2rem 0 2rem', fontSize: { xs: '1.4rem', md: '2rem' }, letterSpacing: '.1rem' }}>Easy same or next day appointments</Typography>
        <Button component={Link} to='/booking' variant='contained' sx={{ ':hover': { backgroundColor: '#53999b' }, width: { xs: '100%', sm: '16.5rem' }, margin: '1rem auto', color: '#fff', backgroundColor: '#83c5be' }}>Book Now</Button>
      </Box>
    </Container>
  )
}

export default Treatments

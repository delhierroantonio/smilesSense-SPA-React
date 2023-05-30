import { Container, Typography } from '@mui/material'
import { InlineWidget } from 'react-calendly'

const Booking = () => {
  return (
    <Container sx={{ padding: '2rem 0' }}>
      <Typography variant='h4' align='center' gutterBottom sx={{ letterSpacing: '.1rem', padding: '0rem' }}>Schedule <span style={{ color: '#53999b', fontWeight: 500 }}>Your Appointment</span> effortlessly</Typography>
      <Typography variant='body1' color='text.secondary' align='center' gutterBottom>Remeber your first consultation is free of charge. Your wellness starts here</Typography>
      <InlineWidget url='https://calendly.com/delhierroantonio/appointment?hide_gdpr_banner=1' />
    </Container>
  )
}

export default Booking

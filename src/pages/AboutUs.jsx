import { Box, Button, Card, CardContent, Container, Divider, Typography } from '@mui/material'
import hero from '../assets/images/aboutHero.jpg'
import avatar from '../assets/images/avatar.jpg'
import avatar2 from '../assets/images/avatar-2.jpg'
import avatar3 from '../assets/images/avatar-3.jpg'
import avatar4 from '../assets/images/avatar-4.jpg'
import pattern from '../assets/images/pattern-2.jpg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <Container sx={{ minHeight: '100vh' }}>
      <Box sx={{ paddingTop: '2rem' }}>
        <Typography align='center' sx={{ fontSize: { xs: '2.2rem', sm: '2.8rem' }, textTransform: 'capitalize', letterSpacing: '.1rem', padding: '.8rem 0', fontWeight: 400 }} variant='h4' color='inherit'>about <span style={{ color: '#53999b', fontWeight: 500 }}>smile sense</span></Typography>
        <Typography align='center' gutterBottom color='text.secondary' sx={{ lineHeight: 1.6, letterSpacing: '.05rem' }}>On the other hand consectetur cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline is taken for type specimens. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident dicta itaque vitae. Delectus quibusdam dolorem quidem, hic inventore perspiciatis asperiores, nam tenetur, possimus minima veritatis labore veniam facere exercitationem cumque.</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
        <img src={avatar} alt='dr mackency photo' style={{ width: '100%', height: 'auto', borderRadius: '.4rem', opacity: '0.9' }} />
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5' align='center' gutterBottom sx={{ marginTop: { xs: '1rem', md: 0 } }}>The heart of our medical center</Typography>
          <Typography align='center' gutterBottom color='text.secondary'>Dr. Mckency, professional directive I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</Typography>
          <Button component={Link} to='/contact' variant='contained' sx={{ ':hover': { backgroundColor: '#53999b' }, width: '10rem', margin: '1rem auto', color: '#fff', backgroundColor: '#83c5be' }}>Contact Us</Button>
        </Container>
      </Box>
      <Box component='img' src={pattern} alt='pattern illustration' sx={{ display: { sm: 'block', md: 'none' }, width: '100%', height: '5rem', objectFit: 'cover', objectPosition: 'bottom', borderRadius: '.4rem', opacity: '0.7' }} />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', paddingTop: '2rem' }}>
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5' align='center' gutterBottom sx={{ marginTop: { xs: '1rem', md: 0 } }}>Best dental clinic you can trust</Typography>
          <Typography align='center' gutterBottom color='text.secondary'>Dr. Mckency, professional directive I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</Typography>
          <Button component={Link} to='/treatments' variant='contained' sx={{ ':hover': { backgroundColor: '#53999b' }, width: '10rem', margin: '1rem auto', color: '#fff', backgroundColor: '#83c5be' }}>Services</Button>
        </Container>
        <img src={hero} alt='tools image' style={{ width: '100%', height: 'auto', borderRadius: '.4rem', opacity: '0.9' }} />
      </Box>
      <Divider sx={{ margin: '1rem 0' }} />
      <Typography variant='h5' align='center' gutterBottom sx={{ color: '#53999b', padding: '1rem 0' }}>A perfect smile guaranteed by our team &#x1f62c;</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '.8rem' }}>
        <Card sx={{ maxWidth: { xs: 340, sm: 260 }, padding: '0', margin: '1rem auto' }}>
          <img src={avatar4} alt='dr williams image' style={{ width: '100%', height: '20rem', objectFit: 'cover', objectPosition: 'center' }} />
          <CardContent>
            <Typography align='center' gutterBottom variant='h6'>Dr. Williams</Typography>
            <Typography align='center' color='text.secondary' gutterBottom>Diagnosis, prevention, and correction of malocclusion</Typography>
            <Typography align='center' style={{ fontStyle: 'italic', fontWeight: 500, fontSize: '.8rem', color: '#53999b' }}>Orthodontist</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: { xs: 340, sm: 260 }, padding: '0', margin: '1rem auto' }}>
          <img src={avatar2} alt='dr brown image' style={{ width: '100%', height: '20rem', objectFit: 'cover', objectPosition: 'center' }} />
          <CardContent>
            <Typography align='center' gutterBottom variant='h6'>Dr. Brown</Typography>
            <Typography align='center' color='text.secondary' gutterBottom>Encompasses the diagnosis and treatment of soft tissue</Typography>
            <Typography align='center' style={{ fontStyle: 'italic', fontWeight: 500, fontSize: '.8rem', color: '#53999b' }}>Periodontist</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: { xs: 340, sm: 260 }, padding: '0', margin: '1rem auto' }}>
          <img src={avatar3} alt='dr jones image' style={{ width: '100%', height: '20rem', objectFit: 'cover', objectPosition: 'center' }} />
          <CardContent>
            <Typography align='center' gutterBottom variant='h6'>Dr. Jones</Typography>
            <Typography align='center' color='text.secondary' gutterBottom>Treating infections and injuries in the dental pulp of the tooth</Typography>
            <Typography align='center' style={{ fontStyle: 'italic', fontWeight: 500, fontSize: '.8rem', color: '#53999b' }}>Endodontist</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: { xs: 340, sm: 260 }, padding: '0', margin: '1rem auto' }}>
          <img src={avatar} alt='dr miller image' style={{ width: '100%', height: '20rem', objectFit: 'cover', objectPosition: 'center' }} />
          <CardContent>
            <Typography align='center' gutterBottom variant='h6'>Dr. Jones</Typography>
            <Typography align='center' color='text.secondary' gutterBottom>Missing or deficient teeth and/or oral and maxillofacial</Typography>
            <Typography align='center' style={{ fontStyle: 'italic', fontWeight: 500, fontSize: '.8rem', color: '#53999b' }}>Prosthodontist</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default AboutUs

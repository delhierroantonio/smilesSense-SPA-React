import { Typography, Box, CardActions, CardContent, Card, Avatar } from '@mui/material'
// icons
import star from '../assets/images/estrella.png'

const DoctorCard = ({ doctorName, stars, avatarImg }) => {
  return (
    <Card sx={{ maxWidth: 395, padding: '1rem 0', margin: '1rem auto' }}>
      <Avatar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }} alt='Remy Sharp' src={avatarImg} />
      <CardContent>
        <Typography align='center' gutterBottom variant='h6' sx={{ color: '#83c5be' }}>{doctorName}</Typography>
        <Typography align='center' color='text.secondary' style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '1rem' }}>"Best in town, part of a mesmerazing group of squamate professional, with over cases."</Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          {
            Array(stars).fill(true).map((index) => <img key={index} src={star} />)
          }
        </Box>
      </CardActions>
    </Card>
  )
}

export default DoctorCard

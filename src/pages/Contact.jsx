import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

function createData (day, hours) {
  return { day, hours }
}

const rows = [
  createData('Monday', '8:00am - 5:00pm'),
  createData('Tuesday', '8:00am - 5:00pm'),
  createData('Wednesday', '8:00am - 5:00pm'),
  createData('Thursday', '8:00am - 5:00pm'),
  createData('Friday', '8:00am - 5:00pm'),
  createData('Saturday', '8:00am - 12:00pm'),
  createData('Sunday', 'Closed')
]
const Contact = () => {
  return (
    <Container sx={{ padding: '2rem 0' }}>
      <Typography variant='h4' align='center' gutterBottom sx={{ letterSpacing: '.1rem' }}>Contact  with{' '}<span style={{ color: '#53999b', fontWeight: 500 }}>Smile Sense</span>{' '}we'll love to hear from you</Typography>
      <Typography variant='body1' color='text.secondary' align='center' sx={{ lineHeight: 1.6, padding: '1rem 0' }} gutterBottom>Thank you for visiting Smile Sense online! Dr. Michael Smith and our team are thrilled to provide high-quality, comprehensive dental care</Typography>
      <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
        <Table sx={{ minWidth: 220 }} aria-label='caption table'>
          {/* <caption>Lunch from 12pm - 1pm</caption> */}
          <caption>NOWHERE PKWY. SUITE 207 PORT ST. NONE, NY 31087</caption>
          <TableHead>
            <TableRow>
              <TableCell>Hours</TableCell>
              <TableCell align='right'>Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.day}>
                <TableCell component='th' scope='row'>
                  {row.day}
                </TableCell>
                <TableCell align='right'>{row.hours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Contact

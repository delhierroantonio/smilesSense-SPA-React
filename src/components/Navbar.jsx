
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
// !const section = ['About Us', 'Treatments', 'booking', 'doctors']
const Navbar = () => {
  return (
    <AppBar className='appbar' position='sticky' color='inherit'>
      <Toolbar className='toolbar'>
        <Typography color='textSecondary' variant='body'>Beer Co.</Typography>
        <div className='toolbar__right'>
          <IconButton>
            <p>algo mas</p>
          </IconButton>
          <p>algo tambien</p>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

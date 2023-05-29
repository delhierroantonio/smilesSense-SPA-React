import { useState } from 'react'
// react router dom
import { Link } from 'react-router-dom'
// mui
import PropTypes from 'prop-types'
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material'
// assets
import smileLogo from '../assets/images/logo.png'
import { BiMenu } from 'react-icons/bi'

const drawerWidth = 240
// const navItems = ['About', 'Services', 'Booking', 'Doctors', 'Contact']

const navArrayLinks = [
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Treatments',
    path: '/treatments'
  },
  {
    title: 'Booking',
    path: '/booking'
  },
  {
    title: 'Contact',
    path: '/contact'
  }
]

function DrawerAppBar (props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.4rem', textDecoration: 'none', color: '#212529', padding: '1rem 0' }}
        component={Link}
        to='/'
      >
        <img src={smileLogo} alt='smile logo' style={{ width: '1.8rem' }} />
        <Typography variant='button' sx={{ letterSpacing: '.2rem' }}>Smile Sense</Typography>
      </Box>
      <Divider />
      <List>
        {navArrayLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', py: '.6rem' }}>
              <Link to={item.path} style={{ color: '#495057', textDecoration: 'none', letterSpacing: '.1rem' }}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='relative' variant='pain' component='nav' sx={{ color: '#212529', backgroundColor: '#f8f9fb' }}>
        <Toolbar sx={{ display: 'flex', height: '10vh' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <BiMenu />
          </IconButton>
          <Typography component={Link} to='/' sx={{ textDecoration: 'none', display: { xs: 'flex', sm: 'none' }, justifySelf: 'end', alignSelf: 'center', position: 'absolute', right: '1.4rem', fontWeight: 400, color: '#495057' }} variant='button'>Smile Sense</Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'start', alignItems: 'center', gap: '.4rem', textDecoration: 'none', color: '#212529' }}
            component={Link}
            to='/'
          >
            <img src={smileLogo} alt='smile logo' style={{ width: '2rem' }} />
            <Typography sx={{ display: { sm: 'none', md: 'block' } }} variant='button'>Smile Sense</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navArrayLinks.map((link) => (
              <Link to={link.path} key={link.title} style={{ color: '#495057', fontWeight: 400, padding: '0 .8rem', textDecoration: 'none', letterSpacing: '.1rem' }}>
                {link.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

DrawerAppBar.propTypes = {
  window: PropTypes.func
}

export default DrawerAppBar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import madhack from '../assets/Madhacklogo.svg';

const pages = ['Home', 'About', 'TimeLine', 'Prizes', 'Faq'];

export default function Header({ scrollToSection }) {
  const [isActive, setIsActive] = React.useState('Home');

  function handleNav(section) {
    setIsActive(section);
    scrollToSection(section);
  }

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={madhack} alt='madhack' style={{ width: '200px', height: '100px' }} />
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {/* Mobile Menu */}
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNav(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
                
              ))}
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

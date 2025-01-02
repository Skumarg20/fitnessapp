import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' } }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        flexGrow={1}
      >
        <Link to="/" style={{ textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="/#exercises" style={{ textDecoration: 'none', color: "#3A1212" }}>Exercises</a>
        <Link to="/blog" style={{ textDecoration: 'none', color: "#3A1212"}} >Blog</Link>
      </Stack>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to='/login' style={{ textDecoration: 'none', color: "#3A1212",padding:'8px 16px', borderRadius:'6px',border:'1px solid #3A1212'}}>Login</Link>
        <Link to='/signup' style={{ textDecoration: 'none', color: "white",background:"#FF2625",padding:'8px 16px',borderRadius:'20px' }}>Register</Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
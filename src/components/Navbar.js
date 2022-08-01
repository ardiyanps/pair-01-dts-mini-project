import { Logout } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const navItems = [
  { text: 'Home', link: '/home' },
  { text: 'Series', link: '/series' },
  { text: 'Movies', link: '/movies' },
  { text: 'New and Popular', link: '/popular' },
  { text: 'My List', link: '/mylist' }
];


const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'left'
                        }}
                    >
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                            Movie
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'left'
                        }}
                    >
                      <Box sx={{ display: 'block' }}>
                        {navItems.map((item) => (
                          <NavLink
                            to={item.link}
                            key={item.text}
                            className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
                          >
                            {item.text}
                          </NavLink>
                        ))}
                      </Box>
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout} /> 
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;

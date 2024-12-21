'use client'
// Components
import { ReactNode } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import {styled, Theme, CSSObject} from '@mui/material/styles';

// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Home } from '@mui/icons-material';

/**
 * Store name, url path, icon
 */
let data : [string, string, ReactNode][] = [
    ['Home', '/', <HomeOutlinedIcon sx={{'padding': '0px'}} /> ],
    ['Portfolio', '/portfolio', <BusinessCenterOutlinedIcon sx={{'padding': '0px'}} />], 
    ['Security+', '/security-plus', <SecurityOutlinedIcon sx={{'padding': '0px'}} />], 
    ['Resources', '/resources', <LibraryBooksOutlinedIcon sx={{'padding': '0px'}} />]
]


const openWidth = 200;
const closedWidth = 100;

const openTransition = (theme: Theme): CSSObject => ({
    width: openWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
    }),
});

const closeTransition = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short,
    }),
    width: closedWidth
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: openWidth,
      ...(open && {
        ...openTransition(theme),
        '& .MuiDrawer-paper': openTransition(theme),
      }),
      ...(!open && {
        ...closeTransition(theme),
        '& .MuiDrawer-paper': closeTransition(theme),
      }),
    }),
  );

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };  

  return (
        <Drawer variant="permanent" open={open}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <IconButton 
                    sx={{
                        color: 'primary.contrastText'
                    }}
                    onClick={open ? handleDrawerClose : handleDrawerOpen}
                >
                    {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                </IconButton>
                
            </Box>
            <Divider />
            <List>
            {data.map((item, index) => (
                <ListItem key={item[0]}>
                    <Link href={item[1]} sx={{textDecoration: 'none'}}>
                        <ListItemButton
                            sx={{width: open ? '150px' : '50px', height: '50px'}}
                        >
                            <ListItemIcon
                                sx={{justifyContent: 'center', color: '#F8BBD0',}}
                            >
                                {item[2]}
                            </ListItemIcon>
                            <ListItemText primary={item[0]} sx={{ 
                                display: open ? 'block' : 'none',
                                color: 'lightPink',
                                paddingRight: '10px'
                            }}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
            </List>
        </Drawer>
  );
}

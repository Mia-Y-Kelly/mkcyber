'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';


export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
        <Drawer variant="permanent">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
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
            {['Portfolio', 'Security+', 'References'].map((text, index) => (
                <ListItem key={text} >
                    <ListItemButton 
                    
                    >
                        <ListItemIcon
                            sx={{justifyContent: 'center', color: '#F8BBD0',}}
                        >
                            {index % 2 === 0 ? <InboxIcon sx={{padding: '0px'}}/> : <MailIcon sx={{padding: '0px'}}/>}
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ display: open ? 'block' : 'none'}}/>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
  );
}

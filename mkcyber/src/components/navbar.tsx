'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button';



export default function Navbar2() {
    const trigger = useScrollTrigger();
    return(
        <Slide appear={false} direction='down' in={!trigger}>
            <AppBar>
                <Toolbar>
                    <Button variant='navButton'>
                        <Link href="#work">
                            <Typography color="lightPink" fontWeight="fontWeightBold">Work Experience</Typography>
                        </Link>
                    </Button>
                    <Button variant='navButton'>
                        <Link href="#certifications">
                            <Typography color="lightPink" fontWeight="fontWeightBold" >Certifications</Typography>
                        </Link>
                        
                    </Button>
                    <Button variant='navButton'>
                        <Link href="#lab">
                            <Typography color="lightPink" fontWeight="fontWeightBold">Home Lab</Typography>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}
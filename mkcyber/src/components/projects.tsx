// Basic Imports
import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';


// Accordion
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// List
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const projDesc: string[] = ['Self-hosted password manager coming soon...', 'Self-hosted internal documentation server coming soon....'];


const courseCat: readonly string[] = ['Vaultwarden', 'Bookstack']

const courses: readonly string[][] = [
    projDesc
]

export default function Projects(){
    const [value, setValue] = useState('1');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const accordionStyle = {
        'borderTop': '2px solid black',
        'borderRight': '2px solid black',
        'borderLeft': '2px solid black',
        'borderBottom': '2px solid #800f2f',
        'boxShadow': '0rem .5rem #800f2f',
        'borderRadius': '.75rem',
        'backgroundColor': '#FFF',
        'marginBottom': '1.5rem',
        '&:hover': {
            'backgroundColor': '#FFCCCD',
        }
    }

    const itemStyling = {
        'borderRadius': '0rem 0rem 1rem 1rem',
        // 'borderTop': '1px solid #800f2f'
    }

    return(
        <Box id="lab" sx={{marginTop: '5vh'}}>
            <Typography variant="h4" color="primary" fontWeight="fontWeightBold" marginBottom='3vh'>Home Lab</Typography>
            <Box>
            {
                courseCat.map((cat, index) => (
                    <Accordion
                        square
                        disableGutters
                        sx={accordionStyle}
                        key={cat}
                        elevation={0}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>
                                {cat}
                            </Typography>           
                        </AccordionSummary>
                        <Divider variant="middle" sx={{'backgroundColor': 'secondary.dark'}}/>
                        <AccordionDetails sx={itemStyling}>
                            <Typography >
                                {projDesc[index]}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            </Box>
        </Box>
    );
}

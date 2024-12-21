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


const projDesc: string[] = ['Developing JavaScript-based terminal that allows SSH connections; will be embeddable in applications', 'Created a malicious IP checker using a random bloom filter', 'Tool intended to emulate the paywalled function of the popular study tool Quizlet', 'Application to calculate food waste when given a raw data file. Used this project to learn the basics of MatLab.', 'Data science project intended to predict the movement of cells'];

const projSkills : string[] = ['Xterm.js, Docker', 'C++, Random Bloom Filter (RBF), Hashing', 'React, Java Spring Boot, PostgreSQL, AWS EC2, Apache Tomcat, Agile (Scrum)',  'MatLab, MatLab App Design', 'Keras, MatPlotLib, Panadas, NumPy, Bash, Anaconda, Agile (Scrum)'];


const courseCat: readonly string[] = ['HuskyTerm', 'Malicious Packet Checker', 'StudyUp', 'Green Campus Enterprise Food Calculator', 'AI Cell Membrane Detection']

const courses: readonly string[][] = [
    projDesc,
    projSkills
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
        <Box>
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
                            <Typography>
                                <b style={{color: "#800f2f"}}>Skills:</b> {projSkills[index]}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            </Box>
        </Box>
    );
}

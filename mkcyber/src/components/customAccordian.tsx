'use client'
// Basic Imports
import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

// List
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Accordion
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const csCourses: readonly string[] = ['Data Structures', 'Algorithms', 'Concurrent Computing', 'Systems Programming', 'Artificial Intelligence', 'Formal Models of Computation', 'Programming Languages', 'Programming at a Hardware/Software Interface', 'Database Systems'];

const cyberCourses : readonly string[] = ['Security Penetration Testing and Audit', 'Computer Security', 'Network Administration I, Network Administration II',  'Scripting Administration and Automation', 'Cybersecurity I, Cybersecurity II', 'Linux Fundamentals'];

const mathSciCourses: readonly string[] = ['Calculus I, Calculus II', 'Linear Algebra', 'Statistics', 'College Geometry']

const humanitiesCourse: readonly string[] = ['Ethical and Social Aspects of Computing', 'Science, Technology, and Society', 'Composition', 'Technical and Professional Communication']

const courseCat: readonly string[] = ['Computer Science Courses', 'Cybersecurity Courses', 'Math and Science Courses', 'Humanities Courses']

const courses: readonly string[][] = [
    ['Data Structures', 'Algorithms', 'Concurrent Computing', 'Systems Programming', 'Artificial Intelligence', 'Formal Models of Computation', 'Programming Languages', 'Programming at a Hardware/Software Interface', 'Database Systems'],
    ['Security Penetration Testing and Audit', 'Computer Security', 'Network Administration I, Network Administration II',  'Scripting Administration and Automation', 'Cybersecurity I, Cybersecurity II', 'Linux Fundamentals'],
    ['Calculus I, Calculus II', 'Linear Algebra', 'Statistics', 'College Geometry'],
    ['Computer Science Courses', 'Cybersecurity Courses', 'Math and Science Courses', 'Humanities Courses']
]

export default function CustomAccordian() {
    const [csOpen, setCsOpen] = useState(false);
    const [cyberOpen, setCyberOpen] = useState(false);
    const [mathSciOpen, setmathSciOpen] = useState(false);
    const [huOpen, setHuOpen] = useState(false);


    const accordionStyle = {
        'borderTop': '1.5px solid black',
        'borderRight': '1.5px solid black',
        'borderLeft': '1.5px solid black',
        'borderBottom': '5px solid #800f2f',
        'borderRadius': '12px',
        'backgroundColor': '#FFF',
        'marginBottom': '35px',
        '&:hover': {
            'backgroundColor': '#FFCCCD',
        },
        '&:before': {
            'height': '0'
        },
        '&:after': {
            'borderRight': '1.5px solid #800f2f',
            'borderLeft': '1.5px solid #800f2f',
        }
    }

    const itemStyling = {
        'display': 'list-item',
        'listStylePosition': 'inside',
    }

    return(
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
                            {cat}
                        </AccordionSummary>
                        <AccordionDetails sx={{bgcolor: 'secondary.dark', color: 'white', border: 'none'}}>
                            {
                                courses[index].map((course, index1) => (
                                    <ListItem
                                        key={course}
                                        sx={itemStyling}
                                    >
                                        {course}
                                    </ListItem>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    );
}
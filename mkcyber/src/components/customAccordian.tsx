'use client'
// Basic Imports
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

// List
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Icons
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

const csCourses: readonly string[] = ['Data Structures', 'Algorithms', 'Concurrent Computing', 'Systems Programming', 'Artificial Intelligence', 'Formal Models of Computation', 'Programming Languages', 'Programming at a Hardware/Software Interface', 'Database Systems'];

const cyberCourses : readonly string[] = ['Security Penetration Testing and Audit', 'Computer Security', 'Network Administration I, Network Administration II',  'Scripting Administration and Automation', 'Cybersecurity I, Cybersecurity II', 'Linux Fundamentals'];

const mathSciCourses: readonly string[] = ['Calculus I, Calculus II', 'Linear Algebra', 'Statistics', 'College Geometry']

const humanitiesCourse: readonly string[] = ['Ethical and Social Aspects of Computing', 'Science, Technology, and Society', 'Composition', 'Technical and Professional Communication']

export default function CustomAccordian() {
    const [csOpen, setCsOpen] = useState(false);
    const [cyberOpen, setCyberOpen] = useState(false);
    const [mathSciOpen, setmathSciOpen] = useState(false);
    const [huOpen, setHuOpen] = useState(false);

    const courseHeaderStylingClosed = {
        'borderTop': '1.5px solid black',
        'borderRight': '1.5px solid black',
        'borderLeft': '1.5px solid black',
        'borderBottom': '5px solid #800f2f',
        'borderRadius': '12px',
        '&:hover': {
            'backgroundColor': '#ffdddd'
        }
    }

    const courseHeaderStylingOpen = {
        'borderTop': '1.5px solid black',
        'borderRight': '1.5px solid black',
        'borderLeft': '1.5px solid black',
        'borderBottom': '5px solid #800f2f',
        'borderRadius': '12px 12px 0 0',
        '&:hover': {
            'backgroundColor': '#ffdddd'
        }
    }

    const courseStyling = {
        'margin': '0 0 2vh 0',
        'borderRadius': '0 0 12px 12px',
        'backgroundColor': '#800f2f',
        'color': 'white',
    }

    const itemStyling = {
        'display': 'list-item',
        'listStylePosition': 'inside',
    }

    function handleCsClick() {
        setCsOpen(!csOpen);
    }
    
    function handleCyberClick() {
        setCyberOpen(!cyberOpen);
    }
    
    function handleMathSciClick() {
        setmathSciOpen(!mathSciOpen);
    }
    
    function handleHuCourses() {
        setHuOpen(!huOpen);
    }    

    return(
        <Box>
            <ListItemButton onClick={handleCsClick} sx={csOpen ? courseHeaderStylingOpen : courseHeaderStylingClosed}>
                <ListItemText primary="Computer Science Courses"/>
                {csOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={courseStyling}>
                <Collapse in={csOpen} timeout="auto" unmountOnExit>
                    {csCourses.map((item, index) => (
                        <ListItem
                            key={item} 
                            sx={itemStyling}
                        >
                            {item}
                        </ListItem>
                    ))}
                </Collapse>
            </Box>
            
            <ListItemButton onClick={handleCyberClick} sx={cyberOpen ? courseHeaderStylingOpen : courseHeaderStylingClosed}>
                <ListItemText primary="Cybersecurity Courses"/>
                {cyberOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={courseStyling}>
                <Collapse in={cyberOpen} timeout="auto" unmountOnExit>
                    {cyberCourses.map((item, index) => (
                        <ListItem
                            key={item} 
                            sx={itemStyling}
                        >
                            {item}
                        </ListItem>
                    ))}
                </Collapse>
            </Box>
            
            <ListItemButton onClick={handleMathSciClick} sx={mathSciOpen ? courseHeaderStylingOpen : courseHeaderStylingClosed}>
                <ListItemText primary="Math and Science Courses" />
                {mathSciOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={courseStyling}>
                <Collapse in={mathSciOpen} timeout="auto" unmountOnExit>
                    {mathSciCourses.map((item, index) => (
                        <ListItem
                            key={item} 
                            sx={itemStyling}
                        >
                            {item}
                        </ListItem>
                    ))}
                </Collapse>
            </Box>
            <ListItemButton onClick={handleHuCourses} sx={huOpen ? courseHeaderStylingOpen : courseHeaderStylingClosed}>
                <ListItemText primary="Humanities Courses" />
                {huOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Box sx={courseStyling}>
                <Collapse in={huOpen} timeout="auto" unmountOnExit>
                    {humanitiesCourse.map((item, index) => (
                        <ListItem
                            key={item} 
                            sx={itemStyling}
                        >
                            {item}
                        </ListItem>
                    ))}
                </Collapse>
            </Box>
        </Box>
    );
}
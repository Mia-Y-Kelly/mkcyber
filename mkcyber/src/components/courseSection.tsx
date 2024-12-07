'use client'
// Basic Imports
import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

// List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// Table stuff
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';



const csCourses: string[] = ['Data Structures', 'Algorithms', 'Concurrent Computing', 'Systems Programming', 'Artificial Intelligence', 'Formal Models of Computation', 'Programming Languages', 'Programming at a Hardware/Software Interface', 'Database Systems'];

const cyberCourses : string[] = ['Security Penetration Testing and Audit', 'Computer Security', 'Network Administration I, Network Administration II',  'Scripting Administration and Automation', 'Cybersecurity I, Cybersecurity II', 'Linux Fundamentals'];

const mathSciCourses: string[] = ['Calculus I, Calculus II', 'Linear Algebra', 'Statistics', 'College Geometry']

const humanitiesCourses: string[] = ['Ethical and Social Aspects of Computing', 'Science, Technology, and Society', 'Composition', 'Technical and Professional Communication']

const courseCat: readonly string[] = ['Computer Science', 'Cybersecurity', 'Math and Science', 'Humanities']

const courses: readonly string[][] = [
    csCourses,
    cyberCourses,
    mathSciCourses,
    humanitiesCourses
]

export default function CourseSection() {
    const [value, setValue] = useState('0');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
            <Typography variant="h5" color="secondary.dark" marginTop="1rem">
                <span style={{fontWeight: 'bold'}}>Courses</span>  
            </Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleTabChange}
                        variant="scrollable"
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="Project experience"
                    >
                    {
                        courseCat.map((cat, index) => (
                            <Tab 
                                disableRipple
                                disableFocusRipple
                                label={cat} 
                                value={index.toString()}
                                sx={{ 
                                    fontWeight: 'bold',
                                    maxWidth: '2 rem'  
                                }}
                            />
                        ))
                    }
                    </TabList>
                </Box>
            {
                courses.map((courseList, index) => (
                    <TabPanel value={index.toString()}>
                        <List sx={{listStyleType: 'disc'}}>
                            {courseList.map((course, idx) => (
                                <ListItem value={course} sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>
                                    {course}
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                ))
            }
            </TabContext>
        </Box>
    );
}
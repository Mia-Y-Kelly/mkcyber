'use client';

import { useState } from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

// Table stuff
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';

// Components
import WorkExperience from "../../components/workExperience";
import Projects from "../../components/projects";

export default function Experience() {
    const [value, setValue] = useState(0);
    const categories: readonly string[] = ['Work Experience', 'Additional Projects']
  
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return(
        <Box
            sx={{
                width: '60vw',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                margin: '5vh auto 5vh auto',
                gap: '0 0'
          }}
        >
            <TabContext value={value}>
                <TabList
                onChange={handleTabChange}
                centered
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="Categories"
                >
                {
                    categories.map((cat, index) => ( 
                        <Tab
                        disableRipple
                        disableFocusRipple
                        label={<Typography variant="h5" fontWeight="fontWeightBold">{cat}</Typography>} 
                        key={index}
                        value={index}
                        />
                    ))
                }
                </TabList>
                {/* WORK EXPERIENCE SECTION */}
                <TabPanel key={0} value={0}>
                <WorkExperience />
                </TabPanel>

                {/* PROJECTS SECTION */}
                <TabPanel key={1} value={1}>
                <Projects />
                </TabPanel>
            </TabContext>
        </Box>
        
        
    );
}
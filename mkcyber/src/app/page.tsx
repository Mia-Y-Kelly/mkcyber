'use client'

import { useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import Box from '@mui/material/Box';
import image from '@/src/public/Mia Kelly.jpg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';



// Import icons
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// Table stuff
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';

// Accordian
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Components
import WorkExperience from "../components/workExperience";
import Certifications from "../components/certifications";
import Projects from "../components/projects";

let ogPhotoHeight: number = 3797
let ogPhotoWidth: number = 2850
let scale: number = 12



export default function Home() {
  const [value, setValue] = useState(0);
   const categories: readonly string[] = ['Work Experience', 'Certifications', 'Home Lab']
    
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
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
      {/* ABOUT SECTION */}
      <Box>
        <Typography variant="h1" align="center">
          Hi! I'm <b style={{color: "#800f2f"}}>Mia Kelly</b>
        </Typography>
        <Box
          sx={{
            margin: '1vh 0 3vh 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <Link href="mailto:miayn24@gmail.com">
            <Button variant="contained" color="primary" disableElevation> 
              <EmailIcon />
            </Button>
          </Link> 
          <Link href={'https://github.com/Mia-Y-Kelly'} target="_blank">
            <Button variant="contained" color="primary" disableElevation>
              <GitHubIcon />
            </Button>
          </Link>
          <Link href={'https://www.linkedin.com/in/mia-kelly-mtu/'} target="_blank">
            <Button variant="contained" color="primary" disableElevation>
              <LinkedInIcon />
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            align: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <Image
              priority={true}
              src={image}
              alt="Mia Kelly"
              height={ogPhotoHeight / scale}
              width={ogPhotoWidth / scale}
              quality={100}

              style={{
                borderRadius: '100%'
              }}
          />
        </Box>
      </Box>
      <Box sx={{margin: '1vh 0 1vh 0'}}>
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

          {/* CERTIFICATIONS */}
          <TabPanel key={1} value={1}>
            <Certifications />
          </TabPanel>

          {/* HOME LAB */}
          <TabPanel key={2} value={2}>
            <Projects />
            </TabPanel>
          </TabContext> 
      </Box>
    </Box>
  );
}

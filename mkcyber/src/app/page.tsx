'use client'

import { useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import Box from '@mui/material/Box';
import image from '@/src/public/Mia Kelly.jpg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';


import CourseSection from "../components/courseSection";

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
import Projects from "../components/projects";


let ogPhotoHeight: number = 3797
let ogPhotoWidth: number = 2850
let scale: number = 12



export default function Home({
  children
}: {
  children: ReactNode
}) {
  // const accordionStyle = {
  //   'borderTop': '2px solid black',
  //   'borderRight': '2px solid black',
  //   'borderLeft': '2px solid black',
  //   'borderBottom': '2px solid #800f2f',
  //   'boxShadow': '0rem .5rem #800f2f',
  //   'borderRadius': '.75rem',
  //   'backgroundColor': '#FFF',
  //   'marginBottom': '1.5rem',
  //   '&:hover': {
  //       'backgroundColor': '#FFCCCD',
  //   }
  // }

  // const itemStyling = {
  //     'borderRadius': '0rem 0rem 1rem 1rem'
  // }
  const [value, setValue] = useState(0);
   const categories: readonly string[] = ['Work Experience', 'Additional Projects']
    
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
          <Link>
            <Button variant="contained" color="primary" disableElevation>
              <GitHubIcon />
            </Button>
          </Link>
          <Link>
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
                borderRadius: '100%',
                boxShadow: '2px 2px 2px #111d13'
              }}
          />
          <Box sx={{width: '60vw', margin: '15px 0 5vh 0'}}>
            <Typography lineHeight={1.75} color="text.primary" align="center">
              I am a graduate of Michigan Technological University with a BS in Computer Science and a minor in cybersecurity. I am actively seeking employment opportunities, and I am open to relocation.
            </Typography>
            <br/>
            <Typography lineHeight={1.75} color="text.primary" align="center">
              I previously worked an internship at Fidelity Investments. My other work experience includes a research position developing an educational cybersecurity platform and working at my university's IT department.
            </Typography>
            <br/>
            <Typography lineHeight={1.75} color="text.primary" align="center">
              During my time at Michigan Tech, I was active member of both the Networking and Computing Student Association (NCSA) and IT Oxygen Enterprise. My involvement in these organizations has contributed to the development of my skillset with projects spanning full-stack development, machine learning, and cloud technologies. Outside of work and academic clubs, I enjoy swimming, reading, and collecting mechanical keyboards.
            </Typography>
          </Box>
        </Box>
      </Box>
    
     {/* <Accordion
        square
        disableGutters
        // sx={accordionStyle}
        elevation={0}
      >
        <AccordionSummary
          aria-controls="panel-content"
          expandIcon={<ExpandMoreIcon />}
          
        >
           <Typography>Expand More</Typography> 
        </AccordionSummary>
        <AccordionDetails>*/}
          {/* <TabContext value={value}>
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
            </TabList> */}
            {/* WORK EXPERIENCE SECTION */}
            {/* <TabPanel key={0} value={0}>
            <WorkExperience />
            </TabPanel> */}

            {/* PROJECTS SECTION */}
            {/* <TabPanel key={1} value={1}>
            <Projects />
            </TabPanel>
          </TabContext> 
        </AccordionDetails>
      </Accordion> */}
      <Accordion>
        <AccordionSummary>
          Testing
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus mollitia possimus doloribus! Itaque atque quibusdam perspiciatis sunt voluptatem minima, molestiae soluta natus dolore totam voluptate impedit explicabo quasi eveniet, reiciendis quo dolor culpa. Officiis, possimus odit minus molestias doloremque pariatur cupiditate quas officia reprehenderit asperiores quasi! Voluptatum enim impedit nobis quaerat, eius iusto repellendus odit reiciendis non ullam nulla corrupti libero tenetur expedita saepe labore accusamus rem unde et nihil hic placeat nemo. Laboriosam nihil nemo magnam eveniet eaque maxime. Assumenda repellat modi neque accusamus omnis qui, dolore, repellendus dolorum cumque, libero dolor recusandae eveniet ex laudantium iure in. Est esse eveniet perferendis, pariatur quam quas? Cupiditate qui laboriosam repudiandae ipsa quasi aliquid illum asperiores, accusantium iure recusandae consequatur eius excepturi inventore, voluptatibus vero magni, commodi modi? Numquam ipsam assumenda accusamus repellendus ad excepturi, laboriosam dolor praesentium quas exercitationem amet magnam sapiente quidem cum quis illo sequi veniam rerum labore facilis saepe, eligendi alias soluta! Ad nisi ut, deserunt soluta, fugiat quidem magnam sequi ab fuga consequatur laborum maxime a enim ipsum. At deserunt reiciendis ex sunt fuga velit, non excepturi optio reprehenderit, impedit amet exercitationem labore iste mollitia quam vitae ipsa eos totam facilis modi nam animi. Possimus.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

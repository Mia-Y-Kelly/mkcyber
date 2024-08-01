'use client'
import { useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import Box from '@mui/material/Box';
import image from '@/src/public/Mia Kelly.jpg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// List imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// Tab imports
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import CustomAccordian from "../components/customAccordian";



// Import icons
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CircleIcon from '@mui/icons-material/Circle';
import { Toys } from "@mui/icons-material";

let ogPhotoHeight: number = 3797
let ogPhotoWidth: number = 2850
let scale: number = 12

export default function Home({
  children
}: {
  children: ReactNode
}) {
  const [value, setValue] = useState('1');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
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
      <span>
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
      </span>
      

      {/* WORK EXPERIENCE SECTION */}
      <Box>
        <Typography variant="h5" color="secondary.dark">
          <b>Work Experience</b>  
        </Typography>
        <Card variant="outlined">
            <CardContent>
              <Typography color="secondary.dark"><b>Undergraduate Research Assistant</b></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Typography>Michigan Technological University | Dr. Yu Cai</Typography>
                <Typography>Oct. 2023 - June 2024</Typography>
              </Box>
              
              <List sx={{listStyleType: 'disc'}}>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Led a group of six students in the development of an educational cybersecurity platform</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Created a web component that embedded an emulated terminal into the web browser using Xterm.js.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Designed and implemented RESTful API using NodeJS and Express.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Dockerized application for minimized overhead and platform agnostic development.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Automated continuous production deployments using cron jobs on cPanel.</ListItem>
              </List>
              <Typography><b style={{color: "#800f2f"}}>Skills:</b> RESTful API, Express, Node, Docker, Google OAuth, cPanel, crontab</Typography>
            </CardContent>
        </Card>
        <Card variant="outlined">
            <CardContent>
              <Typography color="secondary.dark"><b>Full Stack Intern</b></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Typography>Fidelity Investments | Fidelity Brokerage Technology (FBT)</Typography>
                <Typography>June 2023 - Aug. 2023</Typography>
              </Box>
              <List sx={{listStyleType: 'disc'}}>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Tested a SpringBoot API which monitored activity between a mainframe and cloud environment.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Performed Datadog analysis that reduced costs by over $1,000 per month.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Renewed and retired container certificates using Jenkins and Kubernetes.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Consulted with subject matter experts to design a procedure for streamlining cloud application development.</ListItem>
              </List>
              <Typography><b style={{color: "#800f2f"}}>Skills:</b> RESTful API, Express, Node, Docker, Google OAuth, cPanel, crontab</Typography>
            </CardContent>
        </Card>
        <Card variant="outlined" >
            <CardContent>
              <Typography color="secondary.dark"><b>IT Technician</b></Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Typography>Michigan Technological University</Typography>
                <Typography>Nov. 2020 - April 2022</Typography>
              </Box>
              <List sx={{listStyleType: 'disc'}}>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside',  padding: 0}}>Replaced hardware on Dell, Lenovo, Mac, etc.
                  </ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Performed troubleshooting for software issues on Windows, Mac, and RHEL operating systems.</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside',padding: 0}}>Tracked client tickets using ServiceDesk and Confluence.</ListItem>
              </List>
              <Typography><b style={{color: "#800f2f"}}>Skills:</b> RESTful API, Express, Node, Docker, Google OAuth, cPanel, crontab</Typography>
            </CardContent>
        </Card>
      </Box>
      
      {/* PROJECTS SECTION */}
      <Box>
        <Typography variant="h5" color="secondary.dark">
            <b>Projects</b>  
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
              <Tab
                disableRipple
                disableFocusRipple
                label="HuskyTerm" 
                value="1"
                sx={{ 
                  fontWeight: 'bold',
                  maxWidth: '10vw'  
                }}
              />
              <Tab
                disableRipple
                disableFocusRipple
                label="Malicious Packet Checker" 
                value="2"
                sx={{ 
                  fontWeight: 'bold',
                  maxWidth: '10vw'   
                }} 
              />
              <Tab
                disableRipple
                disableFocusRipple
                label="StudyUp" 
                value="3"
                sx={{ 
                  fontWeight: 'bold',
                  maxWidth: '10vw'  
                }}
              />
              <Tab
                disableRipple
                disableFocusRipple
                label="Green Campus Enterprise Food Calculator" 
                value="4"
                sx={{ 
                  fontWeight: 'bold',
                  maxWidth: '12vw'    
                }}
              />
              <Tab
                disableRipple
                disableFocusRipple
                label="NCSA Lab Hours Tracker" 
                value="5"
                sx={{ 
                  fontWeight: 'bold',
                  maxWidth: '10vw'   
                }} 
              />
              <Tab
                disableRipple
                disableFocusRipple
                label="AI Cell Membrane Detection" 
                value="6" 
                sx={{ 
                  fontWeight: 'bold',
                  maxWidth: '10vw'   
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography>
              Developing JavaScript-based terminal that allows SSH connections; will be embeddable in applications.
            </Typography>
            <Typography><b style={{color: "#800f2f"}}>Skills:</b> Xterm.js, Docker</Typography>
          </TabPanel>
          <TabPanel value="2">
            <Typography>
              Created a malicious IP checker using a random bloom filter.
            </Typography>
            <Typography><b style={{color: "#800f2f"}}>Skills:</b> C++, Random Bloom Filter (RBF), Hashing</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography>
              Tool intended to emulated the paywalled functions of the popular study tool Quizlet.
            </Typography>
            <Typography><b style={{color: "#800f2f"}}>Skills:</b> React, Java Spring Boot, PostgreSQL, AWS EC2, Apache Tomcat, Agile (Scrum)</Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography>
              Application to calculate food waste when given a raw data file. Used this project to learn the basics of MatLab.
            </Typography>
            <Typography><b style={{color: "#800f2f"}}>Skills:</b> MatLab, MatLab App Design</Typography>
          </TabPanel>
          <TabPanel value="5">
            <Typography>
              Full stack application originally built using the MERN stack. Migrating project to NextJS and PostgreSQL.
            </Typography>
            <Typography><b style={{color: "#800f2f"}}>Skills:</b> MongoDB, Express.js, React, NodeJS, PostgreSQL</Typography>
          </TabPanel>
          <TabPanel value="6">
            <Typography>
              Data science project intended to predict the movement of cells.
            </Typography>
            <Typography ><b style={{color: "#800f2f"}}>Skills:</b> Keras, MatPlotLib, Panadas, NumPy, Bash, Anaconda, Agile (Scrum)</Typography>
          </TabPanel>
        </TabContext>
    </Box>
    <Box>
      <Typography variant="h5" color="secondary.dark">
        <span style={{fontWeight: 'bold'}}>Courses</span>  
      </Typography>
      <Typography sx={{fontStyle: 'italic', marginBottom: '15px'}}>* College transcript available upon request</Typography>
      <CustomAccordian />
    </Box>
    </Box>
  );
}

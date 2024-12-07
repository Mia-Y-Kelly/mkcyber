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

import CourseSection from "../components/courseSection";

import Projects from "../components/projects";


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
        <Projects />
      </Box>
    {/* COURSES SECTION */}
    <Box>
      <CourseSection />
    </Box>
    </Box>
  );
}

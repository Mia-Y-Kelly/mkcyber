import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// List imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Experience(){
    return(
        <Box>
        <Typography variant='h4' color="secondary.dark" fontWeight='bold'>Work Experience</Typography>
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
    );
}
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
// List imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Certifications(){ 
    return(
        <Box>
            <Card variant="outlined">
                <CardContent>
                <Typography color="secondary.dark"><b>Security+ CE</b></Typography>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                    }}
                >
                    <Typography>CompTIA | 
                        <Link href={'https://www.credly.com/badges/2a744c7a-2150-4e8e-90e5-16574e450bbd'} target='blank'>View</Link>
                    </Typography>
                    <Typography>Jan. 2025</Typography>
                </Box>
                <List sx={{listStyleType: 'disc'}}>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>General security concepts</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Threats, vulnerabilities, and mitigations</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Security architecture</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Security operations</ListItem>
                  <ListItem sx={{display: 'list-item', listStylePosition: 'inside', padding: 0}}>Security program management and oversight</ListItem>
              </List>
                <Typography><b style={{color: "#800f2f"}}>Tools:</b> Wireshark, hashcat, sqlmap, John the Ripper, burpsuite, Social-Engineer Toolkit (SET), etc. </Typography>
                </CardContent>
            </Card>
        </Box>
    );

}
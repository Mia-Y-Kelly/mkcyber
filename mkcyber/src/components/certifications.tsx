import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea  from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Image from "next/image";
import SecPlus from '../public/securityplus-logo.png';
import RHCSA from '../public/RHCSA.png';
import Link from '@mui/material/Link';
// List imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

let ogPhotoHeight: number = 497
let ogPhotoWidth: number = 596
let scale: number = 2.5

export default function Certifications(){

    return(
        <Box id="certifications" sx={{marginTop: '5vh'}}>
            <Typography variant="h4" color="primary" fontWeight="fontWeightBold" marginBottom="3vh">Certifications</Typography>
            <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <Card variant="cert">  
                <Box sx={{paddingTop: '10px', paddingBottom: '3px'}}>
                    <Image 
                        priority={true}
                        src={SecPlus}
                        alt="Security+ Cert"
                        height={ogPhotoHeight/scale}
                        width={ogPhotoWidth/scale}
                        quality={100}
                    />
                </Box>
                <CardContent sx={{background: 'white', width: '100%'}}>
                    <Typography fontWeight='fontWeightBold'>
                        Certified Jan. 2025 | <Link fontWeight='fontWeighRegular' href="https://www.credly.com/badges/2a744c7a-2150-4e8e-90e5-16574e450bbd">Verify through Credly
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
            <Card variant="cert" sx={{background: 'black'}}>
                <Box sx={{paddingTop: '10px', paddingBottom: '3px'}}>
                    <Image 
                        priority={true}
                        src={RHCSA}
                        alt="RHCSA Cert"
                        height={ogPhotoHeight/scale}
                        quality={100}
                    />
                </Box>
                <CardContent sx={{background: 'white', width: '100%'}}>
                    <Typography>
                        Expected Fall 2025
                    </Typography>
                </CardContent>
            </Card>
            </Container>
        </Box>
    );

}
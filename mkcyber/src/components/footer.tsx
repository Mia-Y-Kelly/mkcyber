import Box from '@mui/material/Box';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return(
        <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', columnGap: '5px'}}>
            <CopyrightOutlinedIcon fontSize='small' color="disabled"/>
            <Typography color="footer">Mia Kelly 2025</Typography>           
        </Box>
    );
}
'use client'

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import {useState} from "react";
import WorkExperience from "../components/workExperience";

export default function customAccordian(props: { children: React.ReactNode }) {
    
    const open = {
        '&:hover' : {
            'cursor': 'pointer'
        }
    }

    const closed = {
        'display' : 'none'
    }

    const [isClosed, setIsClosed] = useState(true);

    function handleChange()
    {
        setIsClosed(!isClosed);
    }

    return(
        <Box
            
            onClick={handleChange}
        >
            {isClosed ? 
                <Typography variant="h5">Work Experience</Typography>
                :
                <Typography variant="h5">Work Experience</Typography>   
            }
            

            <Box sx={isClosed ? {'borderTop' : '1px solid black'} : {}}>
                <Box 
                    sx={isClosed ? {'display' : 'none'} : {}}
                >
                    {
                        isClosed ? "isClosed" : 
                        <WorkExperience />
                    }
                </Box>
            </Box>
        </Box>
    );
}
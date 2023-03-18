import React from "react";
import { Box, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
    return (
        <Box mt={3} position="absolute" bottom="0px" sx={{width: "100%", height: "6%", bgcolor: '#b4b4b4'}}>
            <Box sx={{pt: 1, display: "flex", flexDirection: "row"}}>
                <CopyrightIcon sx={{color:"#ff1344", pl: "46%"}} /> 
                <Box sx={{pl: 0.5}} />
                <Typography color="#ff1344" sx={{pt: 0.2, fontWeight: 'bold'}} align="center">
                    Copyright 2023
                </Typography>
            </Box>
            <Box />
            <Typography color="#ff1344" sx={{pb: 1, fontWeight: 'bold'}} align="center">
                Geir Ola Tvinnereim
            </Typography>
        </Box>
    );
}
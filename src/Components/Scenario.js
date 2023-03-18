import { TextField, Box, Typography } from "@mui/material";
import React from "react";

const DataTypes = ["double", "vector<double>", "String", "int"];
const Buttons = ["System name", "Prediction horizon, P", "Control Horizon, M", "W", "Q", "R", "RoH", "RoL", "T"];

export default function Scenario() {

    return (
        <Box sx={{ width: "100%", pt: 5, pl: 5 }}>
            <Box >
                <TextField id="system" label={Buttons[0]} variant="outlined" helperText={DataTypes[2]} />
                <TextField id="T" label={Buttons[8]} variant="outlined" helperText={DataTypes[3]} />
            </Box>
            
            <Box sx={{pt: 2, width: "20%"}}>
                <Typography variant="h5"> MPC Controller: </Typography>
                <Box />
                <TextField id="p" label={Buttons[1]} variant="outlined" helperText={DataTypes[0]}/>
                <Box />
                <TextField id="m" label={Buttons[2]} variant="outlined" helperText={DataTypes[0]}/>
                <Box />
                <TextField id="w" label={Buttons[3]} variant="outlined" helperText={DataTypes[0]}/>
                <Box sx={{height: 30}}/>
                <TextField id="q" label={Buttons[4]} variant="outlined" helperText={DataTypes[1]}/>
                <Box />
                <TextField id="R" label={Buttons[5]} variant="outlined" helperText={DataTypes[1]}/>
                <Box />
                <TextField id="roh" label={Buttons[6]} variant="outlined" helperText={DataTypes[0]}/>
                <Box />
                <TextField id="rol" label={Buttons[7]} variant="outlined" helperText={DataTypes[0]}/>
            </Box>

        </Box>
        

    );
}


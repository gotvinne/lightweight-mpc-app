import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";

import '../css/Header.css'
import logo from '../img/equinor_logo.jpg'

const ImageStyle = {height: "75px", width: "75px", transform: "translate(750px, 18px)"}  
const Pages = ["Simulation", "Results", "Algorithm", "Models", "about"];

interface TabPanelProps { // Struct
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {
const { children, value, index, ...other } = props;

return ( // Render a new object based on value
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`} 
    {...other}
    >
    {value === index && (
      <Box sx={{ p: 3 }}>
      <Typography>{children}</Typography>
      </Box>
    )}
    </div>
);
}

function Header() {
    const [value, setValue] = React.useState(0); // Set initial value
    const handleChange = (event: React.SyntheticEvent, newValue: number) => { // Handle callback
        setValue(newValue);
    };
    
    return (
        <React.Fragment>
            <div className="Header">
                <h1> Light Weight MPC </h1>
                <img src={logo} alt='Equinor logo'
                    style={ImageStyle}
                ></img>
            </div>
            <AppBar position="BOTTOM" sx={{height: 50, background: "#b4b4b4"}}>
                <Toolbar sx={{borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} textColor={"#212121"} sx={{
                            '& .MuiTabs-indicator': { backgroundColor: "#212121" },
                            '& .MuiTab-root': { color: "#212121" },
                            '& .Mui-selected': { color: "#212121" },
                        }}>
                        <Tab label={Pages[0]} />
                        <Tab label={Pages[1]} />
                        <Tab label={Pages[2]} />
                        <Tab label={Pages[3]} />
                        <Tab label={Pages[4]} />
                    </Tabs>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                Wiiiii
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Two
            </TabPanel>
        </React.Fragment>
    )
}

export default Header

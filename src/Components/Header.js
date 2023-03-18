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

return (
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

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Header() {
    const [value, setValue] = React.useState(0); // Set initial value
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
                        <Tab label={Pages[0]} {...a11yProps(0)} />
                        <Tab label={Pages[1]} {...a11yProps(1)}/>
                        <Tab label={Pages[2]} {...a11yProps(2)}/>
                        <Tab label={Pages[3]} {...a11yProps(3)}/>
                        <Tab label={Pages[4]} {...a11yProps(4)} />
                    </Tabs>
                </Toolbar>
                <TabPanel value={value} index={0}>
                    Item One
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
            </AppBar>
        </React.Fragment>
    )
}

export default Header

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import CountUp from "react-countup";



const card1 = (
  <Box>
    <Link to="#">
      <Typography>Inactive</Typography>
      <Typography className="Numer_sec">
        <CountUp delay={0.2} end={10} duration={6} />
        </Typography>
    </Link>
  </Box>
);
const card2 = (
  <Box>
    <Link to="#">
      <Typography>Avtive</Typography>
      <Typography className="Numer_sec">
      <CountUp delay={0.2} end={15} duration={6} />
      </Typography>
    </Link>
  </Box>
);
const card3 = (
  <Box>
    <Link to="#">
      <Typography>Total</Typography>
      <Typography className="Numer_sec">
      <CountUp delay={0.2} end={25} duration={6} />
      </Typography>
    </Link>
  </Box>
);

export default function Devices() {
  return (
    <Box sx={{ mt: 1,p:2 }}>
      {/* header section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Devices <NorthEastIcon sx={{fontSize:"20px",color:"#E9E9E9"}} /></Typography>
        <Box>
          <Link to="">
            <Button variant="outlined" sx={{color:'#1976D2',mr: 2,borderColor:"#E9E9E9"}}>
              View Docs
            </Button>
          </Link>
          <Link to="">
            <Button variant="contained" sx={{backgroundColor:"rgb(25,118,210)"}}>
              Add Device
            </Button>
          </Link>
        </Box>
      </Box>

      {/* card section */}
      <Grid className="main_class" container spacing={2} sx={{}}>
        <Grid item xs={12} md={4}>
          <Box
            className="custom_card"
            sx={{ backgroundColor: "rgba(209, 39, 48, 0.04)" }}
          >
            {card1}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            className="custom_card"
            sx={{ backgroundColor: "rgb(245,249,249)" }}
          >
            {card2}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            className="custom_card"
            sx={{ backgroundColor: "rgb(252,252,252)" }}
          >
            {card3}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
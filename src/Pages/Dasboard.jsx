import React from "react";
import Header from "../components/Sidebar/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
// import GeoChart from "../charts/GeoChart";
import GeoChart from "../Chart/GeoChart";
// import PieChart from "../charts/PieChart";
import PieChart from "../Chart/PieChart";
// import BarChart from "../charts/BarChart";
import BarChart from "../Chart/BarChat/BarChart";
import CountUp from "react-countup";

export default function Dasboard() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ width: "50%" }}>
                    <Card sx={{ height: 19 + "vh" }} className="gradient">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{  color: "#000000", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#1976d2" }}
                        >
                          <CountUp delay={0.2} end={22000} duration={0.3} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{  color: "#000000" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 19 + "vh", marginTop: "16px" }}
                      className="gradient"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#000000", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#1976d2" }}
                        >
                          <CountUp delay={0.2} end={20000} duration={0.4} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "#000000" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: "50%", height: "50%" }}>
                    <Card sx={{ height: 19 + "vh" }} className="gradientlight">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{  color: "#000000", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#1976d2" }}
                        >
                          <CountUp delay={0.2} end={22000} duration={0.6} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{  color: "#000000"}}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 19 + "vh", marginTop: "16px" }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#000000", padding: "7px 0px" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{  color: "#1976d2" }}
                        >
                          <CountUp delay={0.2} end={32000} duration={0.7} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{  color: "#000000" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

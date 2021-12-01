import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import CountUp from 'react-countup';
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import { useMatomo } from '@datapunt/matomo-tracker-react'

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};
//Given statisctical data
const currentMembers = 1446971;
const currentMembersDate = Date.parse("2020-12-31T23:59:59")
//const expectedMembers = 800000;
const expectedMembers = 1200000;
const expectedMembersDate = Date.parse("2035-12-31T23:59:59")
//const expectedMembersDate = new Date ("12.31.2060 23:59:59");



// Coefficients for f(x) = m * x + b

const m = (expectedMembers - currentMembers) / (expectedMembersDate.valueOf() - currentMembersDate.valueOf());
const b = (currentMembers)-(m*currentMembersDate.valueOf());

const MembersNow = Math.ceil(calcMembers(new Date()));


function calcMembers(date: Date){
  return (date.valueOf() * m +b);
}
function timeTillNextMemberLost(date: Date){
  let y = Math.floor(calcMembers(date));
  let timeSpan = ((y - b) / m) - date.valueOf();
  //console.log("TS: " + Math.round(timeSpan/1000));
  return Math.round(timeSpan/1000);
}

export default function Header() {
  const [stateSeconds, setSeconds] = React.useState(timeTillNextMemberLost(new Date));
  const [stateMembers, setMembers] = React.useState(calcMembers(new Date));

  const secondsPerMemberLost = Math.abs(1/m)/1000;

  const { trackPageView, trackEvent } = useMatomo()

  trackPageView({
    documentTitle: 'Home', // optional
    href: 'https://www.ekhn2030.de', // optional
  });

  const tick = () => {
    if (stateSeconds.valueOf() > 0){
      setSeconds(stateSeconds -1);
    }else{
      setSeconds(secondsPerMemberLost);
      setMembers(stateMembers -1);
      trackEvent({ category: 'ekhn2030-counter', action: 'member-lost-watched' })
    }
    startMemberCounter = calcMembers(new Date());
  };

  React.useEffect(() => {

    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
let startMemberCounter = 0;
let durationMemberCounter = 0.25;
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundColor: '#7630b0', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >

      <Typography
          color="inherit"
          align="center"
          variant="h4"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Mitglieder der Ev. Kirche in Hessen und Nassau
      </Typography>
      <Typography color="inherit" align="center" variant="h1" marked="center">
        <CountUp end={stateMembers}
        separator = "."
        decimals = {0}
        start = {startMemberCounter}
        duration={2}
        preserveValue={true}/>
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Die EKHN verliert Mitglieder...
    </Typography>

      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Typography variant="h3" color={"red"}>
              <CountUp end={Math.round((60*60)/secondsPerMemberLost)}
                       separator = "."
                       decimals = {0}
                       start = {0.123}
                       duration={1.25}
                       preserveValue={true}
              />
            </Typography>
            <Typography variant="h5">
              {
                'pro Stunde'
              }
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Typography variant="h3" color={"red"}>
              <CountUp end={Math.round((365/12)*24*60*60/secondsPerMemberLost)}
                       separator = "."
                       decimals = {0}
                       start = {123}
                       duration={1.5}
              preserveValue={true}
             />
            </Typography>
            <Typography variant="h5">
              {
                'pro Monat'
              }
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Typography variant="h3" color={"red"}>
              <CountUp end={Math.round(365*24*60*60/secondsPerMemberLost)}
                       separator = "."
                       decimals = {0}
                       start = {12345}
                       duration={2}/>
            </Typography>
            <Typography variant="h5">
              {
                'pro Jahr'
              }
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" color="inherit" sx={{ mt: 2 }}>
        {'...und in '}
        <CountUp end={Math.round(stateSeconds)}
                 separator = "."
                 decimals = {0}
                 start = {0}
                 duration={0.5}
                 preserveValue={true}
        />
        {'  Sekunden wird es ein Mitglied weniger sein.'}
      </Typography>
    </ProductHeroLayout>
  );
}

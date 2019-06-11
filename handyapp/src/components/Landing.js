import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import BottomNavigation from './BottomNavigation'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Home Cleaning',
    imgPath:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
  },
  {
    label: 'Laundry',
    imgPath:
      'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    label: 'Plumbing',
    imgPath:
      'https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    label: 'Construction',
    imgPath:
      'https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    label: 'Exterior Painting',
    imgPath:
      'https://images.unsplash.com/photo-1542142608-a72920c0c114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1518&q=80',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    marginBottom: 300
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 390,
    maxWidth: '400',
    overflow: 'hidden',
    width: '100%',
  },
  arrow: {
    color: '#545E56'
  },
  label: {
    color: '#545E56',
  },
}));

const Landing = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
  <>
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.label}>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper 
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} className={classes.arrow}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} className={classes.arrow}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
    <BottomNavigation/>
    </>
  );
}

export default Landing
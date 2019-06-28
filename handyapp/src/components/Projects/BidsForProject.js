// import React from 'react';
// import {Link} from 'react-router-dom';
// import CheckoutForm from '../Stripe/CheckoutForm';

// const buttons = {
//   backgroundColor: '#70C55D',
//   color: '#FFFFFF',
//   fontWeight: 600,

//   border: '1px solid red'
// };

// const BidsForProject = props => {
//   return (
//     <div className="Bid">
//       <p>
//         Contractor: {props.bid.first_name} {props.bid.last_name}
//       </p>
//       <p>Cost: ${props.bid.price}</p>
//       <p>Hours:{props.bid.time}</p>
//       <p>Materials included? {props.bid.materials_included}</p>
//       <div>
//         <CheckoutForm amount={props.bid.price} {...props}/>
//         <Link to={`/contractor/${props.bid.contractor_id}`}>
//           <button>View Contractor</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BidsForProject;

//  *************

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import CheckoutForm from '../Stripe/CheckoutForm';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#70C55D'
    },
    secondary: {
      main: '#B8E2AE'
    }
  },
  typography: { useNextVariants: true }
});

const useStyles = makeStyles({
  card: {
    flexGrow: 1
    // border: '1px solid red'
  },
  submit: {
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'hsl(120, 27%, 56%)'
    }
  },
  declinebtn: {
    backgroundColor: 'red',
    color: '#FFFFFF',
    fontWeight: 600,
    border: '1px solid red',
    '&:hover': {
      backgroundColor: 'hsl(359, 63%, 56%)'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      // width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
});

export default function BidsForProject(props) {
  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <main className={classes.layout}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography component="h5" variant="h5">
                  Contractor: {props.bid.first_name} {props.bid.last_name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <b>Price: </b>$ {props.bid.price}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <b>Hours: </b>
                  {props.bid.time} hrs
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <b>Materials included?</b> {props.bid.materials_included}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/contractor/${props.bid.contractor_id}`}>
                <Button color="primary" type="submit">
                  View Contractor
                </Button>
              </Link>
            </CardActions>
            <CardActions>
              <CheckoutForm amount={props.bid.price} {...props} />
              <Button
                variant="contained"
                size="small"
                onClick={() =>
                  props.deleteBid(
                    props.bid.id,
                    alert('The bid has been rejected!'),
                    window.location.reload()
                  )
                }
                className={classes.declinebtn}
              >
                Decline Bid
              </Button>
            </CardActions>
            <Box mt={2} />
          </Card>
        </main>
      </MuiThemeProvider>
    </>
  );
}

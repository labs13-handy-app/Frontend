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
import CheckoutForm from '../Stripe/CheckoutForm';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    flexGrow: 1
  }
});

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

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Contractor: {props.bid.first_name} {props.bid.last_name}
              </Typography>
              <Typography>
                Price: ${props.bid.price}
              </Typography>
              <Typography>Hours: {props.bid.time}</Typography>
              <Typography>
                Materials included? {props.bid.materials_included}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CheckoutForm amount={props.bid.price} {...props} />
            <Link to={`/contractor/${props.bid.contractor_id}`}>
              <Button size="small" color="primary">
                View Contractor
              </Button>
            </Link>
            <Button size='small' color='primary' onClick={() => props.deleteBid(props.bid.id, alert('the bid has been rejected'), window.location.reload())}>Reject Bid</Button>
          </CardActions>
        </Card>
        <Box mt={5} />
      </MuiThemeProvider>
    </>
  );
}

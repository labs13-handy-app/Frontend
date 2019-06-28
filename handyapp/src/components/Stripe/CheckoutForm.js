import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axiosWithAuth from '../../utils/AxiosAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  paymentbtn: {
    backgroundColor: '#70C55D',
    color: '#FFFFFF',
    fontWeight: 600,
    marginTop: theme.spacing(3),
    // border: '1px solid red',
    '&:hover': {
      backgroundColor: 'hsl(120, 27%, 56%)'
    }
  }
}));

const CURRENCY = 'USD';
const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
};

const onToken = (amount, description) => token =>
  axiosWithAuth()
    .post(`${process.env.REACT_APP_API_URL}/api/checkout/new-customer`, {
      description,
      source: token,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => {
  const classes = useStyles();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <StripeCheckout
          name={name}
          description={description}
          amount={fromEuroToCent(amount)}
          token={onToken(amount, description)}
          currency={CURRENCY}
          stripeKey={`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`}
        >
          <Button
            type="submit"
            variant="contained"
            className={classes.paymentbtn}
          >
            Pay With Card
          </Button>
        </StripeCheckout>
      </MuiThemeProvider>
    </>
  );
};

export default Checkout;

//************** */
// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import axiosWithAuth from '../../utils/AxiosAuth';
// const paymentBtn = {
//   border: '1px solid red',
//   width: '100%',
//   display: 'inherit',
//   alignItems: 'inherit',
//   cursor: 'pointer',
//   color: '#FFFFFF',
//   fontWeight: 600,
//   backgroundColor: '#70C55D'
// };

// const CURRENCY = 'USD';

// const fromEuroToCent = amount => amount * 100;

// const successPayment = data => {
//   alert('Payment Successful');
//   console.log(data);
// };

// const errorPayment = data => {
//   alert('Payment Error');
//   console.log(data);
// };

// const onToken = (amount, description) => token =>
//   axiosWithAuth()
//     .post(`${process.env.REACT_APP_API_URL}/api/checkout/new-customer`, {
//       description,
//       source: token,
//       currency: CURRENCY,
//       amount: fromEuroToCent(amount)
//     })
//     .then(successPayment)
//     .catch(errorPayment);

// const Checkout = ({ name, description, amount }) => (
//   <StripeCheckout
//     name={name}
//     description={description}
//     amount={fromEuroToCent(amount)}
//     token={onToken(amount, description)}
//     currency={CURRENCY}
//     stripeKey={`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`}
//   >
//     <button style={paymentBtn}>PAY WITH CARD</button>
//   </StripeCheckout>
// );

// export default Checkout;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axiosWithAuth from '../../utils/AxiosAuth';

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
  // axiosWithAuth()
  // .post('https://handy-app-api.herokuapp.com/api/checkout/new-customer',
  axiosWithAuth()
    .post('http://localhost:5000/api/checkout/charge', {
      description,
      source: token,
      currency: CURRENCY,
      amount: 500
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({name, description, amount}) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={500}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey="pk_test_WrFQYte9DKhuIhdOUaiKxcW100UafZVNWY"
  />
);

export default Checkout;

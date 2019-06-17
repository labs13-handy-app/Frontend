import React from 'react'
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
axiosWithAuth()
.post('https://handy-app-api.herokuapp.com/api/checkout/new-customer',
    {
      description,
      source: token,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey='pk_test_WrFQYte9DKhuIhdOUaiKxcW100UafZVNWY'
  />

export default Checkout;
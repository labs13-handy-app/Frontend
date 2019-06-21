import React from 'react';
import{paymentTransfer} from '../../actions'
import {connect} from 'react-redux';


class Transfer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stripeEmail:props.user.email,
            stripe_id:props.user.payout_id,
            // stripeToken:'tok_visa',
            amount:500
            
        }
    }


    render(){
        return(
            <div>
            <button onClick={() => this.props.paymentTransfer(this.state)}>
                    accept payment
            </button>
            </div>
        )
    }
}
const mapStateToProps = ({}, props) => {
    return {
    };
  };

export default connect(mapStateToProps,
    {paymentTransfer})(Transfer)

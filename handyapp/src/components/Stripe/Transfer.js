import React from 'react';
import{paymentTransfer} from '../../actions'
import {connect} from 'react-redux';
import '../ContractorCard/ContractorCard.css';


class Transfer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stripeEmail:props.user.email,
            stripe_id:props.user.payout_id,
            // stripeToken:'tok_visa',
            amount:12000
            
        }
    }


    render(){
        return(
            <div className="tab">
                {/* <p>Your Balance ${this.props.user.balance / 100} </p> */}
            <button onClick={() => this.props.paymentTransfer(this.state,alert(`The Payout of $ ${this.state.amount/100} has been processed thank you!`))}>
                    Cash Out
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

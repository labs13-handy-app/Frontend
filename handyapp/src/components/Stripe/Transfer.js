import React from 'react';
import{stripeTransfer} from '../../actions'


class Transfer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stripeEmail:props.user.email,
            stripe_id:props.user.payout_id,
            stripeToken:'tok_visa',
            
        }
    }


    render(){
        return(
            <div>
            <button onClick={() => this.props.stripeTransfer(this.state)}>
                    accept payment
            </button>
            </div>
        )
    }
}

export default connect(mapStateToProps,
    {stripeTransfer})(Transfer)

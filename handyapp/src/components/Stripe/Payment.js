import React from 'react';


class Payment extends React.Component {
    constructor(props){
        super(props)
        this.state={
            stripeEmail:props.user.email,
            amount:props.user.balance,
            customer:props.user.stripe_id
            
        }
    }


    render(){
        return(
            <div>
            <button onClick={() => this.props.newPayment(this.state)}>
                Confirm Payment
            </button>
            </div>
        )
    }
}

export default Payment
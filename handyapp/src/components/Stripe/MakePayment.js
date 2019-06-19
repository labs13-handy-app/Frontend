import React from 'react';
import axiosWithAuth from '../../utils/AxiosAuth';
import {getToken} from '../../actions'
import { connect } from 'react-redux';
import Payment from './Payment'


class MakePayment extends React.Component {
    componentDidMount(){
        this.props.getToken()
    }

 newPayment = payment => {
    axiosWithAuth()
    .post('https://handy-app-api.herokuapp.com/api/checkout/charge',payment)
    .then(res => {
        console.log(res.data)
    })
    .catch(err =>
        console.log(err.message))
}
render(){
    if (this.props.user.id === undefined) {
        console.log(this.props.user)
        
        return (
          <>
            <h4>Loading...</h4>
          </>
        );
      } else {
    return(
        <div>
        <Payment user={this.props.user} newPayment={this.newPayment}/>
        </div>
    )
}
}
}


const mapStateToProps = ({tokenReducer}, props) => {
    return {
      user: tokenReducer.token
    };
  };
export default connect(mapStateToProps,{getToken})(MakePayment);
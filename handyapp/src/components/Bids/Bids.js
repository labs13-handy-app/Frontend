import React, {Component} from 'react';
import { connect } from 'react-redux';
import Bid from './Bid';
import {getBids} from '../../actions'

class Bids extends Component {
    componentDidMount(){
      this.props.getBids();
    }
  
    render() {
      return (
        <div className="bids-container">
          <h1>Bids </h1>
         {this.props.bids.map(bid => {
           return (
             <Bid price={bid.price} key={bid.id} time={bid.time} materials_included={bid.materials_included}/>
           );
        })}
        </div>
      );
    }
  }
  


  const mapStateToProps = ({getBidsReducer}, props) => {
    return {
      bids: getBidsReducer.bids
    };
  };
export default connect(mapStateToProps,{getBids})(Bids);
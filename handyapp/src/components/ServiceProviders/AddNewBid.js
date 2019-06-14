import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addBid} from '../../actions';

class AddNewBid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contractor_id: props.contractor_id,
        project_id: props.project_id,
        price:'',
        time:'',
        materials_included:''

      };
    }
  
     handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
     render() {
      return (
        <div className='bid-div' >
          <form className='add-form'>
            <input className='bid-input' type='number' onChange={this.handleChanges} placeholder='price' name='price' value={this.state.price}
            />
            <input className='bid-input' type='text' onChange={this.handleChanges} value={this.state.time} placeholder='hours'name='time' 
            />
            <input className='bid-input' type='text'onChange={this.handleChanges} value={this.state.materials_included} placeholder='materials_included'name='materials_included'
            />
             
          </form>
          <button className='bid-button' onClick={() => this.props.addBid(this.state)}>Submit Bid</button>
        </div>
      );
    }
  }
  
   const mapStateToProps = state => {
    return {bids:state.bids};
  };
  
   export default connect(mapStateToProps,{ addBid})(AddNewBid);
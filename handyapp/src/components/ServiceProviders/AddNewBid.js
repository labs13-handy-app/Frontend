import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addBid} from '../../actions';

class AddNewBid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contractor_id: props.contractor_id,
        project_id: props.project_id,
        price: '',
        time:'',
        materials_included:''

      };
    }
  
     handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
     render() {
      return (
        <div>
          <form>
            <input type='number' onChange={this.handleChanges} placeholder='price' name='pice' value={this.state.price}
            />
            <input type='text' onChange={this.handleChanges} value={this.state.time} placeholder='hours'name='time' 
            />
            <input type='text'onChange={this.handleChanges} value={this.state.materials_included} placeholder='materials_included'name='materials_included'
            />
          </form>
          <button onClick={() => this.props.addFeedback(this.state)}>Submit Feedback</button>
        </div>
      );
    }
  }
  
   const mapStateToProps = state => {
    return {bids:state.bids};
  };
  
   export default connect(mapStateToProps,{ addBid})(AddNewBid);
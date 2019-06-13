import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addFeedback} from '../../actions';

class AddFeedbackForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        reviewer_name: '',
        contractor_id:'',
        recommend:'',
        rating:'',

      };
    }
  
     handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
     render() {
      return (
        <div>
          <form>
            <input type='text' onChange={this.handleChanges} placeholder='title' name='title' value={this.state.title}
            />
            <input type='text' onChange={this.handleChanges} value={this.state.description} placeholder='description'name='description' 
            />
            <input type='text'onChange={this.handleChanges} value={this.state.reviwer_name} placeholder='your name'name='reviewer_name'
            />
            <input type='number'onChange={this.handleChanges} value={this.state.contractor_id} placeholder='contractor_id'name='contractor_id' 
            />
            <input type='text'onChange={this.handleChanges} value={this.state.recommend} placeholder='would you recommend?'name='recommend'
            />
            <input type='number'onChange={this.handleChanges} value={this.state.rating} placeholder='rating'name='rating'
            />
          </form>
          <button onClick={() => this.props.addFeedback(this.state)}>Submit Feedback</button>
        </div>
      );
    }
  }
  
   const mapStateToProps = state => {
    return {feedback:state.feedback};
  };
  
   export default connect(mapStateToProps,{ addFeedback})(AddFeedbackForm);

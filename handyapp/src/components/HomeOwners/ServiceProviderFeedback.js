import React, {Component} from 'react';
import {connect} from 'react-redux';
import Feedback from './Feedback';
import {getFeedbackByContractorId} from '../../actions';
import AddFeedbackForm from './AddFeedbackForm';
import FeedbackFormM from './FeedbackFormM';

import './ServiceProviderFeedback.css'

class ServiceProviderFeedback extends Component {
  componentDidMount() {
    const id=this.props.match.params.id
    console.log(this.props.match.params.id)
    this.props.getFeedbackByContractorId(id);
  }
  
 
  render() {
    if (this.props.feedback.reviews === undefined) {
      return (
        <>
          <h4>Loading...</h4>
        </>
      );
    } else if(this.props.feedback.reviews=== null) {
      return(
        <h2>Problem getting Contractor at this time</h2>
      );
    }else{
    console.log(this.props.feedback.reviews);
      return (
        <div className="project-container">
        <div className="Project">
        <div className="project-image">
        <img src={this.props.feedback.avatar ? this.props.feedback.avatar : ''} alt="" />
      </div>
          <div className='project-content'>
          <div className='project-info'>
          <h2>{this.props.feedback.first_name} {this.props.feedback.last_name}</h2>
          </div>
          <h4>{this.props.feedback.address}</h4>
          <h4>{this.props.feedback.phone_number}</h4>
          <h4>{this.props.feedback.licenses}</h4>
          <h4>{this.props.feedback.experience}</h4>
          <h4>{this.props.feedback.skills}</h4>
          </div>
          </div>
          <div className='bid-container'>
            {this.props.feedback.reviews.map(review =>(
              <Feedback review={review} key={review.id}/>
            ))}
          </div>
          <AddFeedbackForm />
          {/* Uncomment Material UI form<FeedbackFormM />  */}
          {/* <FeedbackFormM /> */}
        </div>
      );
    }
  }
}

const mapStateToProps = ({getFeedbackByContractorIdReducer}, props) => {
  return {
    feedback: getFeedbackByContractorIdReducer.feedback
  };
};
export default connect(
  mapStateToProps,
  {getFeedbackByContractorId}
)(ServiceProviderFeedback);

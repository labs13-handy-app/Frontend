import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Feedback from './Feedback';
import {getFeedbackByContractorId} from '../../actions';
//import AddFeedbackForm from './AddFeedbackForm';
import FeedbackFormM from './FeedbackFormM';
import Loader from 'react-loader-spinner';

import './ServiceProviderFeedback.css';

class ServiceProviderFeedback extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    this.props.getFeedbackByContractorId(id);
  }

  render() {
    console.log(this.props);
    if (this.props.feedback.reviews === undefined) {
      return (
        <>
          <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
        </>
      );
    } else if (this.props.feedback.reviews === null) {
      return <h2>Problem getting Contractor at this time</h2>;
    } else {
      return (
        <div className="project-container">
          <div className="back">
            <button>
              <NavLink
                to={`/dashboard-homeowner/users/${
                  localStorage.userID
                }/projects`}
              >
                Back to Dashboard
              </NavLink>
            </button>
          </div>
          <div className="ContractorProfile">
            <div className="ContractorImage">
              <img
                src={
                  this.props.feedback.avatar ? this.props.feedback.avatar : ''
                }
                alt=""
              />
            </div>
            <div className="project-content">
              <div className="Contractor-info">
                <h4>
                  {this.props.feedback.first_name}{' '}
                  {this.props.feedback.last_name}
                </h4>
              </div>
              <p>
                <i className="fas fa-map-marker-alt" />{' '}
                {this.props.feedback.address}
              </p>
              <p>
                <i className="fas fa-phone-alt" />{' '}
                {this.props.feedback.phone_number}
              </p>
              <p>
                <i className="fas fa-id-badge" /> {this.props.feedback.licenses}
              </p>
              <p>
                <i className="fas fa-sign-language" />{' '}
                {this.props.feedback.experience} years of experience
              </p>
              <p>
                <i className="fas fa-hard-hat" />
                {this.props.feedback.skills}
              </p>
            </div>
          </div>
          <div className="bid-container">
            {this.props.feedback.reviews.map(review => (
              <Feedback review={review} key={review.id} />
            ))}
          </div>
          {/* <AddFeedbackForm /> */}
          {/* Uncomment Material UI form<FeedbackFormM />  */}
          <FeedbackFormM id={this.props.match.params.id} {...this.props} />
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

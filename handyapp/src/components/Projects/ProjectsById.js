import React, { Component } from 'react';
import { connect } from 'react-redux';
import BidsForProject from './BidsForProject';
import { getProjectById, deleteBid } from '../../actions';
import Loader from 'react-loader-spinner';

import './ProjectsById.css';

class ProjectsById extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProjectById(id);
  }

  render() {
    if (this.props.projects.bids === undefined) {
      return (
        <>
          <Loader type="ThreeDots" color="#4c5b48" height="100" width="100" />
        </>
      );
    } else {
      console.log(this.props.projects);
      console.log(this.props.projects.bids);
      return (
        <div className="project-container">
          <h2>Bids:</h2>
          <div className="bid-container">
            {this.props.projects.bids.map(bid => (
              <BidsForProject
                bid={bid}
                key={bid.id}
                deleteBid={this.props.deleteBid}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ getProjectByIdReducer }, props) => {
  return {
    projects: getProjectByIdReducer.projects
  };
};
export default connect(
  mapStateToProps,
  { getProjectById, deleteBid }
)(ProjectsById);

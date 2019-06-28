import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import BidsForProject from './BidsForProject';
import {getProjectById, deleteBid} from '../../actions';
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
          <div className="back">
            <NavLink
              to={`/dashboard-homeowner/users/${localStorage.userID}/projects`}
            >
              <button>Back to my dashboard</button>
            </NavLink>
          </div>
          {/* <div className='Project'>
          {/* <div className='Project'>
         <div className="project-image">
        <img src={this.props.thumbnail ? this.props.thumbnail : ''} alt="" />
      </div>
        <div className="project-content">
          <h2>{this.props.projects.title}</h2>
          
         <p>Description: {this.props.projects.description}</p>
         
         <p>Materials Included? {this.props.projects.materials_included}</p>
         <div>
          </div>
          </div>
         </div> */}
          <h2>List of bids for your project</h2>
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

const mapStateToProps = ({getProjectByIdReducer}, props) => {
  return {
    projects: getProjectByIdReducer.projects
  };
};
export default connect(
  mapStateToProps,
  {getProjectById, deleteBid}
)(ProjectsById);

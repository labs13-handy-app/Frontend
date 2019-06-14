import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddNewBid from './AddNewBid';
import {getProjectById,getToken} from '../../actions'

import './SubmitBid.css';

class SubmitBid extends Component {
    componentDidMount(){
    const id=this.props.match.params.id
      this.props.getProjectById(id);
      this.props.getToken();
    }
    
  
    render() {
      if (this.props.projects && this.props.user === undefined) {
        console.log(this.props.user)
        console.log(this.props.projects)
        return (
          <>
            <h4>Loading...</h4>
          </>
        );
      } else {
      console.log(this.props.projects)
      return (
        <div className="project-container">
        <div className='Project'>
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
         </div>
           <AddNewBid project_id={this.props.match.params.id} user_id={this.props.user.id} />
        </div>
      );
    }
  }
  }
  


  const mapStateToProps = ({getProjectByIdReducer,usersReducer}, props) => {
    return {
      projects: getProjectByIdReducer.projects,
      user: usersReducer.token
    };
  };
export default connect(mapStateToProps,{getProjectById,getToken})(SubmitBid);
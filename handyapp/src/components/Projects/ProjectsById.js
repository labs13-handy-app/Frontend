import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProjectById from './Project';
import {getProjectById} from '../../actions'

class ProjectsById extends Component {
    componentDidMount(){
    const id=this.props.match.params.id
      this.props.getProjectById(id);
    }
  
    render() {
      console.log(this.props.projects.bids)
      return (
        <div className="project-container">
          <h1>Projects </h1>
         <p>{this.props.projects.description}</p>
        </div>
      );
    }
  }
  


  const mapStateToProps = ({getProjectByIdReducer}, props) => {
    return {
      projects: getProjectByIdReducer.projects,
      bids: getProjectByIdReducer.projects.bids
    };
  };
export default connect(mapStateToProps,{getProjectById})(ProjectsById);
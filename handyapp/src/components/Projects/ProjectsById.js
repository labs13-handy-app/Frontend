import React, {Component} from 'react';
import { connect } from 'react-redux';
import BidsForProject from './BidsForProject';
import {getProjectById} from '../../actions'

import './ProjectsById.css';

class ProjectsById extends Component {
    componentDidMount(){
    const id=this.props.match.params.id
      this.props.getProjectById(id);
    }
  
    render() {
      if (this.props.projects.bids === undefined) {
        return (
          <>
            <h4>Loading...</h4>
          </>
        );
      } else {
      console.log(this.props.projects)
      console.log(this.props.projects.bids)
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
           <h2>Bids:</h2>
           <div className='bid-container'>
           {this.props.projects.bids.map(bid => (
             <BidsForProject bid={bid} key={bid.id} />
           ))}
         </div>
        </div>
      );
    }
  }
  }
  


  const mapStateToProps = ({getProjectByIdReducer}, props) => {
    return {
      projects: getProjectByIdReducer.projects,
    };
  };
export default connect(mapStateToProps,{getProjectById})(ProjectsById);
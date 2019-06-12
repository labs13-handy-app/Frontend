import React, {Component} from 'react';
import { connect } from 'react-redux';
import BidsForProject from './BidsForProject';
import {getProjectById} from '../../actions'

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
          <h2>{this.props.projects.title}</h2>
          <img src={this.props.projects.images}/>
          <img src={this.props.projects.images}/>
          <img src={this.props.projects.images}/>
          <img src={this.props.projects.images}/>
         <p>Description: {this.props.projects.description}</p>
         <p>Materials Included? {this.props.projects.materials_included}</p>
         <div>
           <h2>Bids:</h2>
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
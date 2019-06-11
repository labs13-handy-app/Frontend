import React, {Component} from 'react';
import {connect} from 'react-redux';
import Project from './Project';
import {getProjects} from '../../actions';

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    console.log(this.props);
    if (this.props.projects.length === 0) {
      return (
        <>
          <h2>My Projects</h2>
          <h4>Loading...</h4>
        </>
      );
    } else {
      return (
        <div className="project-container">
          <h2>My Projects </h2>
          {this.props.projects &&
            this.props.projects.map(project => {
              return (
                <Project
                  title={project.title}
                  key={project.id}
                  description={project.description}
                  homeowner_id={project.homeowner_id}
                  materials_included={project.materials_included}
                  first_name={project.name}
                  last_name={project.last_name}
                />
              );
            })}
        </div>
      );
    }
  }
}

const mapStateToProps = ({getProjectsReducer}, props) => {
  return {
    projects: getProjectsReducer.projects
  };
};
export default connect(
  mapStateToProps,
  {getProjects}
)(Projects);

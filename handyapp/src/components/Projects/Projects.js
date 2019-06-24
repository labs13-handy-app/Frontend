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
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    if (this.props.projects && this.props.projects.length === 0) {
      return (
        <>
          <h2>Available Projects</h2>
          <h4>Loading...</h4>
        </>
      );
    } else {
      return (
        <div className="project-container">
          <h2>Available Projects </h2>
          {console.log(this.props.projects)}
          {this.props.projects &&
            this.props.projects.length > 0 &&
            this.props.projects.map(project => {
              if (project.isActive === 1 || project.isActive === true) {
                return (
                  <Project
                    title={project.title}
                    key={project.id}
                    description={project.description}
                    homeowner_id={project.homeowner_id}
                    materials_included={project.materials_included}
                    first_name={project.first_name}
                    last_name={project.last_name}
                    thumbnail={project.images[0]}
                    images={project.images}
                    id={project.id}
                    avatar={project.avatar}
                    timestamp={project.created_at}
                    bids={project.bids}
                    category={project.category}
                  />
                );
              } else if (project.isActive === 0 || project.isActive === false) {
                return <h2>There is no project available at this time.</h2>;
              }
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

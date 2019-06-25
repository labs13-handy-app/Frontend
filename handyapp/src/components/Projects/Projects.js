import React, {Component} from 'react';
import {connect} from 'react-redux';
import Project from './Project';
import {getProjects} from '../../actions';
import Loader from 'react-loader-spinner';

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const {skills: skill} = this.props.user;
    const projects = this.props.projects.filter(project => {
      return project.category === skill;
    });
    console.log(projects);

    if (!localStorage.token) {
      this.props.history.push('/');
    }
    if (this.props.started && !this.props.projects) {
      return (
        <div className="project-container empty">
          <Loader type="Oval" color="#4c5b48" height="100" width="100" />
        </div>
      );
    } else {
      return (
        <div className="project-container">
          <h2>Available Projects </h2>
          {projects && projects.length === 0 && (
            <div className="content">
              <h4 className="middle">
                No project fits your skill at the moment!
              </h4>
              <p className="message">Please check back later</p>
            </div>
          )}
          {projects.length > 0 &&
            projects.map(project => {
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
    projects: getProjectsReducer.projects,
    started: getProjectsReducer.started
  };
};
export default connect(
  mapStateToProps,
  {getProjects}
)(Projects);

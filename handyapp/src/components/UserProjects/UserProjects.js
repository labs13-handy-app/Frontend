import React, {Component} from 'react';
import {connect} from 'react-redux';
import Project from '../Projects/Project';
import {getUserProjects} from '../../actions';

class UserProjects extends Component {
  componentDidMount() {
    const {user} = this.props;
    this.props.getUserProjects(user.id);
  }

  render() {
    console.log(this.props);
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    if (
      this.props.userProjects.projects &&
      this.props.userProjects.projects.length === 0
    ) {
      return (
        <>
          <h2>My Projects</h2>
          <h4>You don't have any projects</h4>
          <p>Click add project button to add a new project!</p>
        </>
      );
    }
    return (
      <div className="project-container">
        <h2>My Projects </h2>
        {this.props.userProjects.projects &&
          this.props.userProjects.projects.length > 0 &&
          this.props.userProjects.projects.map(project => {
            return (
              <Project
                title={project.title}
                key={project.id}
                description={project.description}
                materials_included={project.materials_included}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({getUserProjectsReducer}, props) => {
  return {
    userProjects: getUserProjectsReducer.projects
  };
};
export default connect(
  mapStateToProps,
  {getUserProjects}
)(UserProjects);

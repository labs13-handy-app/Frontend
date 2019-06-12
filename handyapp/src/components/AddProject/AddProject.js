import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProject} from '../../actions';

class AddProject extends Component {
  state = {
    project: {
      title: '',
      description: '',
      image: null
    }
  };

  onChange = e => {
    let {value} = e.target;
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [e.target.id]: value
      }
    }));
  };

  fileSelectedHandler = e => {
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        image: e.target.files[0]
      }
    }));
  };
  render() {
    return (
      <div className="AddProject">
        <form onSubmit={this.onSubmit}>
          <div className="form-items">
            <div className="form-item">
              <label htmlFor="title">Title</label>
              <input
                onChange={this.onChange}
                type="text"
                id="title"
                value={this.state.project.title}
                placeholder="Enter title"
              />
            </div>
            <div className="form-item">
              <label htmlFor="description">Description</label>
              <input
                onChange={this.onChange}
                type="text"
                id="description"
                value={this.state.project.description}
                placeholder="Enter description"
              />
            </div>
            <div className="form-item">
              <label htmlFor="description">
                <input
                  onChange={this.fileSelectedHandler}
                  type="file"
                  id="image"
                />
                Upload Images
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {addProject}
)(AddProject);

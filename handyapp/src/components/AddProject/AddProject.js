import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProject, addProjectPics} from '../../actions';
import upload from '../../img/Upload-images.svg';

import './AddProject.css';

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        title: '',
        description: '',
        homeowner_id: this.props.user
          ? this.props.user.id
          : this.props.match.params.id,
        materials_included: 'no',
        images: []
      }
    };
  }

  onInputChange = e => {
    let {value} = e.target;
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [e.target.id]: value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();

    await this.props.addProject(this.state.project);

    this.props.history.push(
      `/dashboard-homeowner/users/${this.props.match.params.id}/projects/`
    );
  };

  showWidget = widget => {
    widget.open();
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'sandhu',
        uploadPreset: 'clyrl6ow',
        tags: ['app']
      },
      (error, result) => {
        let {secure_url} = result.info;
        if (!error && result && result.event === 'success') {
          this.setState(prevState => ({
            project: {
              ...prevState.project,
              images: [...this.state.project.images, secure_url]
            }
          }));
        }
      }
    );
    return (
      <>
        <h2>Add Project</h2>
        <div className="AddProject">
          <form onSubmit={this.onSubmit}>
            <div className="form-items">
              <div className="form-item">
                <label htmlFor="title">Title</label>
                <input
                  onChange={this.onInputChange}
                  type="text"
                  id="title"
                  value={this.state.project.title}
                  placeholder="Enter title"
                />
              </div>
              <div className="form-item">
                <label htmlFor="description">Description</label>
                <textarea
                  onChange={this.onInputChange}
                  type="text"
                  id="description"
                  value={this.state.project.description}
                  placeholder="Enter description"
                />
              </div>

              <div className="control">
                <div className="form-upload">
                  {/* <label htmlFor="add-image">Add image(s)</label> */}
                  <div className="add-photos">
                    <button
                      className="upload"
                      type="file"
                      onClick={e => {
                        e.preventDefault();
                        this.showWidget(widget);
                      }}
                      accept="image/*"
                    >
                      <img src={upload} alt="camera" />
                    </button>
                    <p>Upload Images</p>
                  </div>
                </div>
                <button className="add-project" onSubmit={this.onSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default connect(
  null,
  {addProject, addProjectPics}
)(AddProject);

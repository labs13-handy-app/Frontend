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
        budget: '',
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

  handleRadioChange = e => {
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        materials_included: e.target.value
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();

    console.log(this.state.project);

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
        cloudName: `${process.env.REACT_APP_CLOUDINARY_NAME}`,
        uploadPreset: `${process.env.REACT_APP_CLOUDINARY_PRESET}`,
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
      <div className="Add">
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

              <div className="core-info">
                <div className="radio">
                  <div className="form-item-radio">
                    <label>Materials Provided?</label>
                  </div>
                  <div className="checks">
                    <div className="form-item-check">
                      <label htmlFor="yes">
                        <input
                          className="box"
                          onChange={this.handleRadioChange}
                          checked={
                            this.state.project.materials_included === 'yes'
                          }
                          type="radio"
                          id="yes"
                          value="yes"
                        />
                        Yes
                      </label>
                    </div>
                    <div className="form-item-check">
                      <label htmlFor="no">
                        <input
                          className="box"
                          onChange={this.handleRadioChange}
                          checked={
                            this.state.project.materials_included === 'no'
                          }
                          type="radio"
                          id="no"
                          value="no"
                        />
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="budget">
                  <div className="form-item">
                    <label htmlFor="title">Budget</label>
                    <input
                      onChange={this.onInputChange}
                      type="text"
                      id="budget"
                      value={this.state.project.budget}
                      placeholder="$0"
                    />
                  </div>
                </div>
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
      </div>
    );
  }
}

export default connect(
  null,
  {addProject, addProjectPics}
)(AddProject);

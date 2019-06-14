import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone-uploader';
import {addProject, addProjectPics} from '../../actions';
import axiosWithAuth from '../../utils/AxiosAuthFD';

import 'react-dropzone-uploader/dist/styles.css';
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
        materials_included: 'no'
      },
      thumbnail: null,
      images: []
    };
  }

  onInputChange = e => {
    let { value } = e.target;
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        [e.target.id]: value
      }
    }));
  };

  onFileChange = e => {
    // e.persist();
    // this.setState({
    //   thumbnail: e.target.files[0]
    // });
  };

  onSubmit = async e => {
    e.preventDefault();
    let response = null;

    if (this.state.thumbnail !== null) {
      const data = new FormData();
      data.append('thumbnail', this.state.thumbnail.file);
      data.append('title', this.state.project.title);
      data.append('description', this.state.project.description);
      data.append('homeowner_id', this.state.project.homeowner_id);
      // const response = await axiosWithAuth().post(
      //   'https://handy-app-api.herokuapp.com/projects',
      //   data
      // );

      response = await axiosWithAuth().post(
        'http://localhost:5000/projects/upload',
        data
      );

      setTimeout(async () => {
        // Get the id of the newly created project.
        const {id} = await response.data.foundProject;
        console.log(id);
        const images = this.state.images.map(image => image.file);
        console.log(images);
        if (id) {
          // Send the images to the project_images table in the database.
          const imagesData = new FormData();
          imagesData.append('images', images);
          const result = await axiosWithAuth().post(
            `http://localhost:5000/projects/${id}/images`,
            imagesData
          );
          // Redirect User to the project listing page.
          this.props.history.push(
            `/dashboard-homeowner/users/${this.props.match.params.id}/projects`
          );
        }
      }, 100);
    } else {
      this.props.addProject(this.state.project);
    }
  };

  getUploadParams = () => {
    return {url: 'https://httpbin.org/post'};
  };

  handleChangeStatus = ({meta}, status) => {
    // console.log(status, meta);
  };

  handleSubmit = (files, allFiles) => {
    this.setState({
      thumbnail: files[0],
      images: [allFiles]
    });
    // console.log(this.state);
    console.log(files.map(f => f.meta));
    allFiles.forEach(f => f.remove());
    console.log(files);
  };

  render() {
    console.log(this.props);
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
              <div className="form-item">
                <label htmlFor="add-image">Add image(s)</label>
                <Dropzone
                  getUploadParams={this.getUploadParams}
                  onChangeStatus={this.handleChangeStatus}
                  onSubmit={this.handleSubmit}
                  styles={{dropzone: {minHeight: 200, maxHeight: 250}}}
                />
              </div>
            </div>
            <button className="add-project" onSubmit={this.onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default connect(
  null,
  { addProject, addProjectPics }
)(AddProject);

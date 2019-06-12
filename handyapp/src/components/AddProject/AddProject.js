import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProject, addProjectPics} from '../../actions';
import axios from 'axios';

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
        image: null
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

  onFileChange = e => {
    e.persist();
    this.setState(prevState => ({
      project: {
        ...prevState.project,
        image: e.target.files[0]
      }
    }));
  };

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', this.state.project.image, this.state.project);
    const res = await axios.post('http://localhost:5000/upload', data);
  };

  render() {
    console.log(this.props);
    return (
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
              <input
                onChange={this.onInputChange}
                type="text"
                id="description"
                value={this.state.project.description}
                placeholder="Enter description"
              />
            </div>
            <div className="form-item">
              <label htmlFor="add-image">
                <input onChange={this.onFileChange} type="file" id="image" />
              </label>
            </div>
          </div>
          <button onSubmit={this.onSubmit}>Add Project</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {addProject, addProjectPics}
)(AddProject);

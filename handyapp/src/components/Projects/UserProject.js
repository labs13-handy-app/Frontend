import React from 'react';
import placeholder from '../../img/Placeholder-image.png';
import {Link} from 'react-router-dom';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

import './UserProject.css';

class UserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images
        ? this.props.images.map(data => data.image)
        : '',
      index: 0
    };
  }
  render() {
    return (
      <div className="UserProject">
        <div className="user-project-image">
          <Gallery
            index={this.state.index}
            onRequestChange={i => {
              this.setState({index: i});
            }}
          >
            {this.state.images.map(image => (
              <GalleryImage
                className="carousel"
                objectFit="cover"
                src={image}
              />
            ))}
          </Gallery>
        </div>
        <div className="user-project-content">
          <h2>{this.props.title}</h2>
          <div className="info">
            <p>
              <i className="fas fa-tools" />
              {this.props.materials_included === 'yes'
                ? 'Materials Included'
                : 'No materials included'}
            </p>
            <p>
              <i className="fas fa-gavel" />
              <span>
                {this.props.bids && this.props.bids.length > 0
                  ? `${this.props.bids.length + 1} Bids `
                  : `0 Bids `}
              </span>
              {this.props.bids && this.props.bids.length > 0 && (
                <Link
                  className="user-view-bids"
                  to={`/project/${this.props.id}`}
                >
                  View Bids
                </Link>
              )}
            </p>
          </div>
          <div className="user-description">
            <p>{this.props.description} </p>
          </div>
          <button
            className="delete"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
    );
  }
}

export default UserProject;

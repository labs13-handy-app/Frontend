import React from 'react';
import {Gallery, GalleryImage} from 'react-gesture-gallery';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import moment from 'moment';
import placeholder from '../../img/Placeholder-image.png';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import './UserProject.css';

class UserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images
        ? this.props.images.map(data => data.image)
        : '',
      index: 0,
      isOpen: false
    };
  }
  render() {
    return (
      <div className="UserProject">
        <button
          className="image-modal"
          onClick={() => this.setState({isOpen: true})}
        >
          <div className="user-project-image">
            <img
              src={this.state.images ? this.state.images[0] : placeholder}
              alt="project-images"
            />
            {/* <Gallery
              index={this.state.index}
              onRequestChange={i => {
                this.setState({index: i});
              }}
            >
              {this.state.images.map(image => (
                <GalleryImage
                  key={image}
                  className="carousel"
                  objectFit="cover"
                  src={image}
                />
              ))}
            </Gallery> */}
          </div>
        </button>
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.images[this.state.index]}
            nextSrc={
              this.state.images[
                (this.state.index + 1) % this.state.images.length
              ]
            }
            prevSrc={
              this.state.images[
                (this.state.index + this.state.images.length - 1) %
                  this.state.images.length
              ]
            }
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                index:
                  (this.state.index + this.state.images.length - 1) %
                  this.state.images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                index: (this.state.index + 1) % this.state.images.length
              })
            }
          />
        )}
        <div className="user-project-content">
          <h2>{this.props.title}</h2>
          <div className="info">
            {this.props.materials_included === 'yes' ? (
              <p>
                <i class="fas fa-hammer" />
                Materials Included
              </p>
            ) : (
              <p>
                <i className="fas fa-tools" />
                No materials included
              </p>
            )}

            <p>
              <i className="fas fa-gavel" />
              <span>
                {this.props.bids && this.props.bids.length > 0
                  ? `${this.props.bids.length + 1} Bids `
                  : `No Bid`}
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
          <div className="user-project-footer">
            <button
              className="delete"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              <i className="far fa-trash-alt" />
            </button>
            <p className="timestamp">
              {moment()
                .startOf('hour')
                .fromNow()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProject;

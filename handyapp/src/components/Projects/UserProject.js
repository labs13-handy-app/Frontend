import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
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

  handleModal = () => {
    if (this.state.images.length > 0) {
      this.setState({isOpen: true});
    }
  };
  render() {
    return (
      <div className="UserProject">
        {this.state.images.length > 0 && (
          <button className="image-modal" onClick={this.handleModal}>
            <div className="user-project-image">
              <img
                src={
                  this.state.images.length > 0
                    ? this.state.images[0]
                    : placeholder
                }
                alt={this.state.images.length > 0 ? 'project-images' : ''}
              />
              {this.state.images.length > 0 && (
                <p className="user-image-label">View Photos</p>
              )}
            </div>
          </button>
        )}
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
                <i className="fas fa-hammer" />
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
            </p>
            <p className="user-project-category">
              <i className="fas fa-hard-hat" />
              {this.props.category}
            </p>
          </div>
          <div className="user-description">
            <p>{this.props.description} </p>
          </div>
          <div className="user-project-footer">
            {this.props.bids && this.props.bids.length > 0 && (
              <Link className="user-view-bids" to={`/project/${this.props.id}`}>
                <i className="far fa-eye" />
                View Bids
              </Link>
            )}
            <button
              className="delete"
              onClick={() => {
                this.props.onDelete(this.props.id);
              }}
            >
              <i className="far fa-trash-alt" />
            </button>
            {this.props.isDeleting ? (
              <Loader type="Oval" color="#3f9b16" height="24" width="24" />
            ) : (
              ''
            )}
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

const mapStateToProps = ({getUserProjectsReducer}, props) => {
  return {
    isDeleting: getUserProjectsReducer.isDeleting
  };
};

export default connect(
  mapStateToProps,
  null
)(UserProject);

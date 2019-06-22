import React from 'react';
import placeholder from '../../img/Placeholder-image.png';
import {Link} from 'react-router-dom';
import {Carousel, CarouselItem} from 'reactstrap';

import './UserProject.css';

class UserProject extends React.Component {
  render() {
    return (
      <div className="UserProject">
        <div className="user-project-image">
          <img
            src={
              this.props.thumbnail ? this.props.thumbnail.image : placeholder
            }
            alt=""
          />
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

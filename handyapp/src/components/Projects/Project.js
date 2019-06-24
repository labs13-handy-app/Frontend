import React from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import moment from 'moment';
import placeholder from '../../img/Placeholder-image.png';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import './Project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images ? this.props.images.map(image => image) : '',
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
    console.log(this.props);
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      <div className="ContractorProject">
        {this.state.images.length > 0 && (
          <button className="image-modal" onClick={this.handleModal}>
            <div className="contractor-project-image">
              <img
                src={
                  this.state.images.length > 0
                    ? this.state.images[0]
                    : placeholder
                }
                alt={this.state.images.length > 0 ? 'project-images' : ''}
              />
              {this.state.images.length > 0 && (
                <p className="image-label">View More</p>
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
        <div className="contractor-project-content">
          <div className="contractor-project-info">
            <h2>{this.props.title}</h2>
            <p className="posted-by">
              Posted By{' '}
              <span className="project-username">
                {this.props.first_name} {this.props.last_name}
              </span>
            </p>
            <div className="c-info">
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
                    : `Be the first to bid!`}
                </span>
              </p>
              <p className="contractor-project-category">
                <i className="fas fa-hard-hat" />
                {this.props.category}
              </p>
            </div>

            <div className="contractor-description">
              <p>{this.props.description} </p>
            </div>
            <div className="contractor-project-footer">
              <Link to={`/add-bid/${this.props.id}`}>
                <button className="place-bid">
                  <i className="fas fa-plus" />
                  Place Bid
                </button>
              </Link>
              <p className="timestamp">
                {moment(
                  `${this.props.timestamp.slice(0, 10)}`,
                  'YYYYMMDD'
                ).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

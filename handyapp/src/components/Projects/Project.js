import React from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import placeholder from '../../img/Placeholder-image.png';

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

  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      <div className="ContractorProject">
        <button
          className="image-modal"
          onClick={() => {
            this.state.images.length > 0 ? this.setState({isOpen: true}) : null;
          }}
        >
          <div className="contractor-project-image">
            <img
              src={this.state.images ? this.state.images[0] : placeholder}
              alt={this.state.images.length > 0 ? 'project-images' : ''}
            />
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
        <div className="contractor-project-content">
          <div className="contractor-project-info">
            <h2>{this.props.title}</h2>
            <div className="c-info">
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
              </p>
            </div>

            <div className="contractor-description">
              <p>{this.props.description} </p>
            </div>
            <Link to={`/add-bid/${this.props.id}`}>
              <button className="place-bid">
                <i className="fas fa-plus" />
                Place Bid
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

import React from 'react';
import placeholder from '../../img/Placeholder-image.png';
import {Link} from 'react-router-dom';
import {Gallery, GalleryImage} from 'react-gesture-gallery';

import './Project.css';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images ? this.props.images.map(image => image) : '',
      index: 0
    };
  }

  render() {
    if (!localStorage.token) {
      this.props.history.push('/');
    }
    return (
      <div className="ContractorProject">
        <div className="contractor-project-image">
          <Gallery
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
          </Gallery>
        </div>
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

import React from 'react';
import placeholder from '../../img/Placeholder-image.png';
import {Link} from 'react-router-dom';
import {Carousel, CarouselItem} from 'reactstrap';

import './UserProject.css';

const UserProject = props => {
  if (!localStorage.token) {
    props.history.push('/');
  }

  return (
    <div className="UserProject">
      <div className="user-project-image">
        <img
          src={props.thumbnail ? props.thumbnail.image : placeholder}
          alt=""
        />
      </div>
      <div className="user-project-content">
        <h2>{props.title}</h2>
        <div className="info">
          <p>
            <i className="fas fa-tools" />
            {props.materials_included === 'yes'
              ? 'Materials Included'
              : 'No materials included'}
          </p>
          <p>
            <i className="fas fa-gavel" />
            <span>
              {props.bids && props.bids.length > 0
                ? `${props.bids.length + 1} Bids `
                : `0 Bids `}
            </span>
            {props.bids && props.bids.length > 0 && (
              <Link className="user-view-bids" to={`/project/${props.id}`}>
                View Bids
              </Link>
            )}
          </p>
        </div>

        <div className="user-description">
          <p>{props.description} </p>
        </div>
      </div>
    </div>
  );
};

export default UserProject;

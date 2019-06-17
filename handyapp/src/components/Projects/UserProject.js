import React from 'react';
import placeholder from '../../img/Placeholder-image.png';
import {Link} from 'react-router-dom';

import './UserProject.css';

const UserProject = props => {
  console.log(props);
  if (!localStorage.token) {
    props.history.push('/');
  }

  return (
    <div className="Project">
      <div className="project-image">
        <img
          src={props.thumbnail ? props.thumbnail.image : placeholder}
          alt=""
        />
      </div>
      <div className="project-content">
        <div className="project-info">
          <h2>{props.title}</h2>
          <p>
            <i className="fas fa-tools" />
            {props.materials_included === 'yes'
              ? 'Materials Included'
              : 'No materials included'}
          </p>
          <p>
            <Link to={`/project/${props.id}`}>
              <i className="fas fa-gavel" />
              {props.bids && props.bids.length > 0
                ? `${props.bids.length + 1} Bids `
                : `0 `}
              view Bids
            </Link>
          </p>
        </div>
        <div className="description">
          <p>{props.description} </p>
        </div>
      </div>
    </div>
  );
};

export default UserProject;

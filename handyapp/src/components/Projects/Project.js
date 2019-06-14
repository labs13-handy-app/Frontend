import React from 'react';
import placeholder from '../../img/Placeholder-image.png';
import {Link} from 'react-router-dom'

const Project = props => {
  console.log(props);
  if (!localStorage.token) {
    props.history.push('/');
  }
  return (
    <div className="Project">
      <div className="project-image">
        <img src={props.thumbnail ? props.thumbnail : placeholder} alt="" />
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
            <i className="fas fa-gavel" />5 Bids
          </p>
        </div>
        <div className="description">
          <p>{props.description} </p>
        </div>
        <Link to= {`/add-bid/${props.id}`}>
        <button>Place Bid</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;

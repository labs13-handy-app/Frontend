import React from 'react';

const Project = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description} </p>
      <p>
        {props.materials_included === 'yes'
          ? 'Materials Included'
          : 'No materials included'}
      </p>
      <p>
        {props.first_name} {props.last_name}
      </p>
    </div>
  );
};

export default Project;

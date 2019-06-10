import React from 'react';

 const Project = props => {
  return (
    <div>
      <p>name: {props.first_name} {props.last_name}</p>
      <p>description: {props.description} </p>
      <p> materials included? {props.materials_included}</p>
    </div>
  );
};



 export default Project
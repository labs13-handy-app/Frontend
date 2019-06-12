import React from 'react';

 const BidsForProject = props => {
  return (
    <div>
      <p>Cost: ${props.bid.price}</p>
      <p>Hours:{props.bid.time}</p>
      <p>Materials included? {props.bid.materials_included}</p>
    </div>
  );
};



 export default BidsForProject
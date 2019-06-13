import React from 'react';

 const BidsForProject = props => {
  return (
    <div className='Bid'>
      <p>Contractor: {props.bid.first_name} {props.bid.last_name}</p>
      <p>Cost: ${props.bid.price}</p>
      <p>Hours:{props.bid.time}</p>
      <p>Materials included? {props.bid.materials_included}</p>
      <div className='buttons'>
      <button>Accept Bid</button>
      <button>View Contractor</button>
      </div>
    </div>
  );
};



 export default BidsForProject
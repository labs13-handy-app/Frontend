import React from 'react';

 const Bid = props => {
  return (
    <div>
      <p>price: {props.price}</p>
      <p>time: {props.time} </p>
      <p> materials included? {props.materials_included}</p>
    </div>
  );
};



 export default Bid
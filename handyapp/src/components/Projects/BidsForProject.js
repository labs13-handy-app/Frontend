import React from 'react';
import {Link} from 'react-router-dom';
import CheckoutForm from '../Stripe/CheckoutForm';

const BidsForProject = props => {
  return (
    <div className="Bid">
      <p>
        Contractor: {props.bid.first_name} {props.bid.last_name}
      </p>
      <p>Cost: ${props.bid.price}</p>
      <p>Hours:{props.bid.time}</p>
      <p>Materials included? {props.bid.materials_included}</p>
      <div className="buttons">
        <CheckoutForm amount={props.bid.price} {...props} />
        <Link to={`/contractor/${props.bid.contractor_id}`}>
          <button>View Contractor</button>
        </Link>
        <button onClick={() => props.deleteBid(props.bid.id)}>Reject Bid</button>
      </div>
    </div>
  );
};

export default BidsForProject;

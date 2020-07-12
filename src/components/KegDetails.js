import React from 'react';
import PropTypes from 'prop-types'


function KegDetails(props) {

  return (
    <React.Fragment >
      <hr />
      <h3>{props.keg.name} Details</h3>
      <p>Brand : {props.keg.brand}</p>
      <p>Price : ${props.keg.price} per pint</p>
      <p>Flavor : {props.keg.flavor}</p>
      <p>Caffeine Content: {props.keg.caffeine} mg</p>
      <p>Quantity : {props.keg.quantity}</p>
      <button onClick={() => props.onKegDelete(props.keg.id)}>Delete Keg</button>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onKegDelete: PropTypes.func
}
export default KegDetails;


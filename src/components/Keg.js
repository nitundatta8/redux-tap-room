import React from 'react'
import PropTypes from 'prop-types'

function Keg(props) {
  let text = "";
  let changeColorText = {};
  if (props.quantity <= 0) {
    text = props.name + ' keg has run dry. Time to restock!'
    changeColorText = dryUp;
  } else if (props.quantity <= 5) {
    text = "Tap is drying up. Quantity : " + props.quantity + ' pints';
    changeColorText = lowStock;
  } else {
    text = 'Quantity in keg : ' + props.quantity + 'pints';

  }

  const styledComponent = {
    border: '2px black solid',
    borderRadius: '15px',
    maxWidth: '400px',
    margin: '5px',
    padding: '5px'
  }

  return (
    <div style={styledComponent}>
      <p onClick={() => props.whenKegClick(props.id)}>On Tap {props.name} (Click to see details)</p>
      <p style={changeColorText}>{text}</p>
      <button onClick={() => props.whenSellingClick(props.id)}>Sell Pint</button>
    </div>
  );
}
Keg.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  whenKegClick: PropTypes.func,
  whenSellingClick: PropTypes.func,
  keg: PropTypes.object
};


const lowStock = {
  color: "yellow",
  fontSize: '25px'
}
const dryUp = {
  color: "darkorange",
  fontSize: '25px'
}
export default Keg;
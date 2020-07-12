import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'

function NewKegForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={formSubmissionHandler}>
        <input
          required
          type="text"
          name="name"
          placeholder="Name" /><br />
        <input
          required
          type="text"
          name="brand"
          placeholder="Brand" /><br />
        <input
          required
          type="number"
          name="price"
          placeholder="Price per pint" /><br />
        <input
          required
          type="text"
          name="flavor"
          placeholder="Flavor" /><br />
        <input
          required
          type="number"
          name="caffeine"
          placeholder="Caffeine content per serving in mg" /><br />
        <input
          required
          type="number"
          name="quantity"
          placeholder="Quantity in pints" /><br />
        <button type='Submit'>Submit</button>
      </form>
    </React.Fragment>
  );

  function formSubmissionHandler(event) {
    event.preventDefault();
    props.onAddKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      caffeine: event.target.caffeine.value,
      quantity: event.target.quantity.value,
      id: v4()
    })

  };
}

NewKegForm.prototype = {
  onAddKegCreation: PropTypes.func
}
export default NewKegForm;
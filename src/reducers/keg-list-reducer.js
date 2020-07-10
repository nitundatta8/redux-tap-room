import * as c from './../actions/ActionTypes';


export default (state = {}, action) => {

  const { name, brand, price, flavor, caffeine, quantity, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          caffeine: caffeine,
          quantity: quantity,
          id: id
        }
      });
    default:
      return state;
  }
}
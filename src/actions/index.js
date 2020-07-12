import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, price, flavor, caffeine, quantity, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    caffeine: caffeine,
    quantity: quantity,
    id: id
  }
}

export const decreaseKeg = id => ({
  type: c.DECREASE_KEG,
  id
});

export const selectKegId = id => ({
  type: c.SELECT_KEG,
  id
}); 
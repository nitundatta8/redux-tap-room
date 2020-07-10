import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: 'xyz',
    brand: 'abc',
    price: 8,
    flavor: 'lemon',
    caffeine: 3,
    quantity: 6,
    id: 1
  }

  const currentState = {
    1: {
      name: 'xyz',
      brand: 'abc',
      price: 8,
      flavor: 'lemon',
      caffeine: 3,
      quantity: 6,
      id: 1
    },
    2: {
      name: 'mno',
      brand: 'abc',
      price: 10,
      flavor: 'lemon & ginger',
      caffeine: 3,
      quantity: 6,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterkegList', () => {
    const { name, brand, price, flavor, caffeine, quantity, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      caffeine: caffeine,
      quantity: quantity,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
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
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'mno',
        brand: 'abc',
        price: 10,
        flavor: 'lemon & ginger',
        caffeine: 3,
        quantity: 6,
        id: 2
      }
    });
  });

});
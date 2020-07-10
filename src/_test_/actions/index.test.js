import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleFrom should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'xyz',
      brand: 'abc',
      price: 8,
      flavor: 'lemon',
      caffeine: 3,
      quantity: 6,
      id: 1
    })).toEqual({
      type: c.ADD_KEG,
      name: 'xyz',
      brand: 'abc',
      price: 8,
      flavor: 'lemon',
      caffeine: 3,
      quantity: 6,
      id: 1
    });
  });
  it('decreaseKeg should create DECREASE_KEG action', () => {
    expect(actions.decreaseKeg()).toEqual({
      type: c.DECREASE_KEG
    });
  });

});
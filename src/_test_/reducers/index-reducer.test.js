import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import kegSelectReducer from '../../reducers/select-keg-reducer';

import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectKeg: ""

    });
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of kegSelectReducer matches root reducer', () => {
    expect(store.getState().selectKeg).toEqual(kegSelectReducer("", { type: null }));
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'xyz',
      brand: 'abc',
      price: 8,
      flavor: 'lemon',
      caffeine: 3,
      quantity: 6,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that initial state of kegSelectReducer matches root reducer', () => {
    const action = {
      type: c.SELECT_KEG,
      id: "abc"
    }
    store.dispatch(action);
    expect(store.getState().selectKeg).toEqual(kegSelectReducer(undefined, action));
  });



});
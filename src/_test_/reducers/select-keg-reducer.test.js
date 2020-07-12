import selectKegReducer from '../../reducers/select-keg-reducer';
import * as c from '../../actions/ActionTypes';


describe("selectKegReducer", () => {
  let action;
  const kegData = {
    name: 'xyz',
    brand: 'abc',
    price: 8,
    flavor: 'lemon',
    caffeine: 3,
    quantity: 6,
    id: "abc"
  }
  test('Should return default state if no action type is recognized', () => {
    expect(selectKegReducer("", { type: null })).toEqual("");
  });

  test('Should successfully add keg id to the selectKeg ', () => {
    const { id } = kegData.id;
    action = {
      type: c.SELECT_KEG,
      id: id
    };
    expect(selectKegReducer(id, { type: c.SELECT_KEG })).toEqual(id);
  });


});

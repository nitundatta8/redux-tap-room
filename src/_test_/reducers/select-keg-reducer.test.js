import selectKegReducer from '../../reducers/select-keg-reducer';


describe("selectKegReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectKegReducer("", { type: null })).toEqual("");
  });


});

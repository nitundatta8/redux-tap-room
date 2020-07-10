import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    console.log(rootReducer({}, { type: null }));

    expect(rootReducer({}, { type: null })).toEqual({
      masterkegList: {},
      formVisibleOnPage: false
    });
  });

});
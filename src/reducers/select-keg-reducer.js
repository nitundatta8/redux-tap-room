import * as c from './../actions/ActionTypes';

export default (state = "", action) => {
  switch (action.type) {
    case c.SELECT_KEG:
      const { id } = action;
      return id;
    default:
      return state;
  }
};

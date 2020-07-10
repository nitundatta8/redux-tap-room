// import formVisibleReducer from './form-visible-reducer';
// import kegListReducer from './keg-list-reducer';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   formVisibleOnPage: formVisibleReducer,
//   masterkegList: kegListReducer
// });

// export default rootReducer;

import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer
});

export default rootReducer;
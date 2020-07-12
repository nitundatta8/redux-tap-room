
import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import kegSelectReducer from './select-keg-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  selectKeg: kegSelectReducer,
});

export default rootReducer;
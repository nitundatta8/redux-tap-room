import React from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList'
import KegDetails from './KegDetails'
import { connect } from 'react-redux';
import * as c from './../actions/ActionTypes';
import PropTypes from 'prop-types';

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectKeg !== "") {
      const action2 = {
        type: c.SELECT_KEG,
        id: ""
      }
      dispatch(action2);
    } else {
      const { dispatch } = this.props;
      const action = {
        type: c.TOGGLE_FORM
      }
      dispatch(action);
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, caffeine, quantity, id } = newKeg;
    const action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      caffeine: caffeine,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: c.TOGGLE_FORM
    }
    dispatch(action2);
  };
  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: c.SELECT_KEG,
      id: id
    }
    dispatch(action);
  };


  handleSellingPint = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: c.DECREASE_KEG,
      id: id
    }
    dispatch(action);
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: c.DELETE_KEG,
      id: id
    }
    dispatch(action);
    dispatch(action);
    const action2 = {
      type: c.SELECT_KEG,
      id: ""
    }
    dispatch(action2)
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.props.selectKeg !== "") {
      currentVisibleState = <KegDetails
        keg={this.props.masterKegList[this.props.selectKeg]}
        onKegDelete={this.handleDeletingKeg} />
      buttonText = 'Return To the KegList';
    } else if (this.props.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onAddKegCreation={this.handleAddingNewKegToList} />
      buttonText = 'Return To the KegList';
    } else {
      currentVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onClickingSellPint={this.handleSellingPint} />
      buttonText = 'Add Keg';
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
};


const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectKeg: state.selectKeg,
  }
}

TapRoomControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectKeg: PropTypes.string
};

TapRoomControl = connect(mapStateToProps)(TapRoomControl);
export default TapRoomControl;
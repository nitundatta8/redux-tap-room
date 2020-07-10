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
    this.state = {
      formVisibleOnPage: false,
      selectKeg: null
    }
  }

  handleClick = () => {
    if (this.state.selectKeg !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectKeg: null
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
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

    this.setState({
      formVisibleOnPage: false
    })
  };

  handleChangingSelectedKeg = (id) => {
    const currentKeg = this.props.masterKegList[id];
    this.setState({
      selectKeg: currentKeg
    })
  };

  handleSellingPint = (id) => {
    //const kegObject = this.state.masterKegList.filter(keg => keg.id === id)[0]
    const kegObject = this.state.masterKegList[id];
    const newKeg = {
      name: kegObject.name,
      brand: kegObject.brand,
      price: kegObject.price,
      flavor: kegObject.flavor,
      caffeine: kegObject.caffeine,
      quantity: kegObject.quantity - 1,
      id: kegObject.id
    }
    const updateKeg = {};
    //const updateKeg = this.props.masterKegList.filter(keg => keg.id !== kegObject.id).concat(newKeg);
    this.setState({
      masterKegList: updateKeg
    })
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: c.DELETE_KEG,
      id: id
    }
    dispatch(action);
    this.setState({
      selectKeg: null
    })
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectKeg !== null) {
      currentVisibleState = <KegDetails keg={this.state.selectKeg} onKegDelete={this.handleDeletingKeg} />
      buttonText = 'Return To the KegList';
    } else if (this.state.formVisibleOnPage) {
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
}

const mapStoreToProps = state => {
  return {
    masterKegList: state
  }
};

TapRoomControl.propTypes = {
  masterKegList: PropTypes.object
};

TapRoomControl = connect(mapStoreToProps)(TapRoomControl);
export default TapRoomControl;
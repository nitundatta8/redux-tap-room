import React from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList'
import KegDetails from './KegDetails'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const id2 = "";
    if (this.props.selectKeg !== "") {
      const action2 = a.selectKegId(id2);
      dispatch(action2);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.selectKegId(id);
    dispatch(action);
  };


  handleSellingPint = (id) => {
    const { dispatch } = this.props;
    const action = a.decreaseKeg(id);
    dispatch(action);
  };

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const id2 = "";
    const action = a.deleteKeg(id);
    dispatch(action);

    const action2 = a.selectKegId(id2)
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
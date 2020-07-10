import React from 'react'
import NewKegForm from './NewKegForm';
import KegList from './KegList'
import KegDetails from './KegDetails'

class TapRoomControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
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
    const newMasterKegList = this.state.masterKegList.concat(newKeg)
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    })
  };

  handleChangingSelectedKeg = (id) => {
    const currentKeg = this.state.masterKegList.filter(keg => keg.id === id)[0]
    this.setState({
      selectKeg: currentKeg
    })
  };

  handleSellingPint = (id) => {
    const kegObject = this.state.masterKegList.filter(keg => keg.id === id)[0]
    const newKeg = {
      name: kegObject.name,
      brand: kegObject.brand,
      price: kegObject.price,
      flavor: kegObject.flavor,
      caffeine: kegObject.caffeine,
      quantity: kegObject.quantity - 1,
      id: kegObject.id
    }
    const updateKeg = this.state.masterKegList.filter(keg => keg.id !== kegObject.id).concat(newKeg);
    this.setState({
      masterKegList: updateKeg
    })
  };

  handleDeletingKeg = (id) => {
    const newKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newKegList,
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
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} onClickingSellPint={this.handleSellingPint} />
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
export default TapRoomControl;
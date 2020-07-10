import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.kegList).map((keg) => {

        return <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          flavor={keg.flavor}
          caffeine={keg.caffeine}
          quantity={keg.quantity}
          whenKegClick={() => props.onKegSelection(keg.id)}
          whenSellingClick={() => props.onClickingSellPint(keg.id)}
          id={keg.id}
          key={keg.id} />
      })}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingSellPint: PropTypes.func
}
export default KegList;
import React from 'react'

const styleHeader = {
  display: 'flex',
  justifyContent: 'center',
  margin: '5px',
  backgroundColor: '#06155c',
  fontSize: '30px',
  color: 'ivory',
  width: '100%',
  borderBottom: '5px solid black'
}

function Header() {
  return (
    <div style={styleHeader}>
      Welcome to the Tap Room
    </div>
  );
}
export default Header;
import React, { Component } from 'react'

export default class Glasses extends Component {
  render() {
    let { prod, renderAvatar } = this.props
    return (
      <>
        {/* <img src="./glassesImage/v9.png" alt="" /> */}
        <img src={prod.url} alt="" className='imgGlasses' onClick={() => {
          renderAvatar(prod)
        }} />
      </>
    )
  }
}

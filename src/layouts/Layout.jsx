import React, { Component, Fragment } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export class Layout extends Component {
  render() {
    return (
    	<div>
        <Header></Header>
        <Fragment></Fragment>
        <Sidebar/>
				<Footer/>
      </div>
    )
  }
}

export default Layout

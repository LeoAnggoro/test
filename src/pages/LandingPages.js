import React, { Component } from 'react';

// Gunakan ../ untuk keluar dari folder 'pages' menuju folder 'src'
import Header from 'pages/parts/header'; 
import Hero from 'pages/parts/Hero';
import MostPicked from 'pages/parts/MostPicked';
import Categories from 'pages/parts/categories'
import Testimony from 'pages/parts/Testimony'
import Footer from 'pages/parts/Footer'

// Pastikan folder 'json' huruf kecil semua, dan file-nya 'landingPage.json'
import landingPage from 'Json/landingPage.json'; 

export default class LandingPages extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked}data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial}/>
        <Footer/>
      </>
    );
  }
}
import React from 'react';
import Button from 'elements/Button';
import { motion } from 'framer-motion';

import ImageHero from 'assets/images/Img-hero.png'
import ImageHero_ from 'assets/images/Img-hero-frame.png'
import IconCities from 'assets/images/icon/Icon-Cities.svg';
import IconTraveler from 'assets/images/icon/Icon-treveler.svg';
import IconTreasure from 'assets/images/icon/Icon-treasure.svg';

import formatNumber from 'utilis/formatNumber'

export default function Hero(props) { 
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    // Gunakan Fragment <> untuk membungkus jika ada elemen sejajar, 
    // tapi di sini cukup pakai satu <section> utama agar rapi.
    <section className="container pt-4">
      <div className="row align-items-center">
        
        {/* Efek Fading & Slide Up untuk Teks (Sisi Kiri) */}
        <motion.div 
          className="col-auto pr-5" 
          style={{ width: 530 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="font-weight-bold line-height-1 mb-3">
            Discover Your Home, <br /> Away From Home.
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
            Experience the comfort of home with the luxury of a vacation. We curate the best local stays to ensure your getaway is as cozy as it is unforgettable. Your perfect escape is closer than you think.
          </p>

          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div className="row" style={{marginTop: 80}}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
            
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
              </h6>
            </div>

            <div className="col-auto">
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </motion.div>
        
        {/* Efek Fading untuk Gambar (Sisi Kanan) */}
        <motion.div 
          className="col-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="d-flex justify-content-end" style={{ width: "100%" }}>
            <div className="position-relative" style={{ width: 480, height: 380 }}> 
              <img 
                src={ImageHero} 
                alt="Room" 
                className="img-fluid position-absolute" 
                style={{ 
                  top: -30, 
                  left: 125, 
                  zIndex: 2, 
                  objectFit: 'cover',
                  borderRadius: "100px 15px 15px 15px"
                }} 
              />
              <img 
                src={ImageHero_} 
                alt="Frame" 
                className="img-fluid position-absolute" 
                style={{ 
                  top: 0,
                  left: 150,
                  zIndex: 1,
                  objectFit: 'cover',
                  borderRadius: "15px"
                }} 
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
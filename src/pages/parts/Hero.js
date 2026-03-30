import React from 'react';
import Button from 'elements/Button';

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
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Discover Your Home, <br /> Away From Home.
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
            Experience the comfort of home with the luxury of a vacation. We curate the best local stays to ensure your getaway is as cozy as it is unforgettable. Your perfect escape is closer than you think
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
        </div>
        
        {/* GUNAKAN col-6 agar layar terbagi 50:50, gambar tidak meluber ke kiri */}
        <div className="col-6">
  {/* Container utama kolom kanan, kita beri display flex */}
  <div className="d-flex justify-content-end" style={{ width: "100%" }}>
    
    {/* Wrapper gambar dengan ukuran tetap, ditarik ke kanan oleh d-flex */}
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
</div>
</div>
    </section>
    
  );
}
import React from 'react';
import '../styles/BrandsSlider.css';

const BrandsSlider = () => {
  const brands = [
    { name: 'Vguard', logo: 'https://www.vguard.in/ui/client/images/vguard-logo.jpg' },
    { name: 'Havells', logo: 'https://havells.com/media/logo/stores/1/Havells_Logo.svg' },
    { name: 'POLAR', logo: 'https://www.polarelektric.com/wp-content/uploads/2024/10/4103_100_Polar-New-Logo_AW_Path-05-1.png' },
    { name: 'LG', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EGH9NzPEzAuWylV8ZXvIMkjzeREkutu0wQ&s' },
    { name: 'Sunflex', logo: 'https://dlxshop.odoo.com/web/image/976-65ef3cb2/sanflex-h05v-k-1000x1000.webp' },
    // { name: 'Natraj', logo: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://natrajonline.com/wp-content/uploads/2021/03/logo.png' },
    { name: 'BPL', logo: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/brands/pictures/square-logo/original/5_RobFM7X-Logo.png' },
    { name: 'Dolphin', logo: 'https://eurekastore.in/wp-content/uploads/2021/12/dolphin-1.png' },
    { name: 'REO', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrCg0e_QqYa7ztXQoZZ9vX1O6-eskkP5yww&s' },
    { name: 'MENTO', logo: 'https://mentoaircooler.com/assets/img/logo.png' },
  ];

  // Duplicate brands for infinite scroll effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="brands-slider-section">
      <div className="container">
        <div className="brands-header">
          <h2 className="section-title">Our Trusted Partners</h2>
          <p className="section-subtitle">
            We partner with the world's leading brands to bring you the best products
          </p>
        </div>

        <div className="brands-slider-container">
          <div className="brands-slider-track">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="brand-card">
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
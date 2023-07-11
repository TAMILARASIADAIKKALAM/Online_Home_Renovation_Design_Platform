import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service">
        <img src="https://images.pexels.com/photos/12749679/pexels-photo-12749679.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Service 1" />
        <h3>Service 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="service">
        <img src="https://t4.ftcdn.net/jpg/04/57/89/21/240_F_457892171_tNgBgUmCQgMVgyiZsLsr4D3u48ZJVb7R.jpg" alt="Service 2" />
        <h3>Service 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="service">
        <img src="https://t4.ftcdn.net/jpg/04/42/26/71/240_F_442267171_e0jd0q1eLQKFBopK7ypOVJfnvFXBfevO.jpg" alt="Service 3" />
        <h3>Service 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';

import Layout from '../components/Layout';
import pic31 from '../assets/images/pic31.jpg';
import pic32 from '../assets/images/pic32.jpg';
import pic33 from '../assets/images/pic33.jpg';
import pic34 from '../assets/images/pic34.jpg';
import pic35 from '../assets/images/pic35.jpg';


const IndexPage = () => (
  <Layout fullMenu>
    {
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Naao App</h2>
          <p>Crowdsourced package delivery</p>
            <div class = "image fit">
              <img src={pic31} alt="" />
            </div>
            <div class = "image fit">
              <img src={pic32} alt="" />
            </div>
            <div class = "image fit">
              <img src={pic33} alt="" />
            </div>
            <div class = "image fit">
              <img src={pic34} alt="" />
            </div>
            <div class = "image fit">
              <img src={pic35} alt="" />
            </div>
        </div>

      </header>
    </section>
  }
  </Layout>
);

export default IndexPage;

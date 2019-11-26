import React from 'react';

import Layout from '../components/Layout';
import bus_landing from '../assets/images/bus_landing.png';
import bus_stop_num from '../assets/images/bus_stop_num.png';
import bus_stop_des from '../assets/images/bus_stop_des.png';
import bus_favourite from '../assets/images/bus_favourite.png';
import bus_alert from '../assets/images/bus_alert.png';

const IndexPage = () => (
    <Layout fullMenu>
      {
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>GTT BUS app concept</h2>
            <p>redesign of a bus app of torino</p>
              <div class = "image fit">
                <img src={bus_landing} alt="" />
              </div>
              <div class = "image fit">
                <img src={bus_stop_num} alt="" />
              </div>
              <div class = "image fit">
                <img src={bus_stop_des} alt="" />
              </div>
              <div class = "image fit">
                <img src={bus_favourite} alt="" />
              </div>
              <div class = "image fit">
                <img src={bus_alert} alt="" />
              </div>
          </div>
  
        </header>
      </section>
    }
    </Layout>
  );
  
  export default IndexPage;
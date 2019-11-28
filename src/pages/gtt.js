import React from 'react';

import Layout from '../components/Layout';
import bus_landing from '../assets/images/bus_landing.png';
import bus_stop_num from '../assets/images/bus_stop_num.png';
import bus_stop_des from '../assets/images/bus_stop_des.png';
import bus_favourite from '../assets/images/bus_favourite.png';
import bus_alert from '../assets/images/bus_alert.png';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>GTT Bus App redesign</h2>
          <p></p>
        </div>
      </header>
      
      <div className="wrapper">
        <div className="inner">
          <h3 className="major">what is GTT bus app?</h3>
          <p>
          GTT is a bus app we currently use quite frequently in Torino, Italy where
          I am currently living with my husband on a temporary basis. The usability is pretty straight 
          forward but the look and feel of the app does not meet the currently design trends. The original app
          is currently available on both iOS and Android. Check it out here: 
          </p>

          <ul>
          <li>
            <a href="https://apps.apple.com/it/app/gtt-mobile/id531319309" target="_blank">
            iOS
            </a>
          </li>
          <li> 
            <a href="https://play.google.com/store/apps/details?id=it.fivet.gttmobile&hl=en" target="_blank">
              Android
            </a>
          </li> 
          </ul>
          <p>
            Below is a demonstration of how I have transformed the UI & UX of the original GTT app to 
            a vibrant and minimalistic look with better user-experience.   
          </p>
          <h3>
          Landing page
          <hr></hr>
          </h3>
          <p>
          <strong>Original version </strong><br/>
          - allows you to search <br/>
          - allows you to locate your current location <br/>
          <br/>
          <strong>Redesigned version</strong><br/>
          - allows you to search <br/>
          - allows you to locate your current location <br/>
          - access favourite directly<br/>
          - access the information of the nearby stops <br/>
          - Colour coded<br/>
          -- <strong>GREEN</strong> - Buses/trams will arrive within 5 minutes<br/>
          -- <strong>YELLOW</strong> - Buses/trams will arrive within 10 minutes<br/>
          -- <strong>RED</strong> - Buses/trams will arrive after 10 minutes <br/>
          - Distance meters with color codes

          </p>
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
        </div>
    </section>
  </Layout>
);

export default IndexPage;
import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import pic9 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';


import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Jarme Platform</h2>
            <p>
            Designed the entire suite of diary/mood tracker app using Sketch
            and Photoshop and worked closely with the developer throughout the 
            process of building a production ready platform. 
            Jarme is currently available on <a href="https://apps.apple.com/us/app/jarme-diary-mood-tracker/id1112553386" target= "_blank">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.bdgeeks.jarme&hl=en" target= "_blank">Android</a>, <a href="https://web.jarmemori.es/auth#/auth" target= "_blank">web</a> and Desktop (Macintosh & Linux).
            </p>
            <a href="https://jarmemori.es" target="_blank" className="special">
              Visit Jarme
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Naao Platform</h2>
            <p>
            A crowsourced package delivery platform inspired by Justeat, Airbnb and Uber. Designed the website and the mobile app (Android, iOS) using Photoshop, Illustrator and Sketch and nativebase component design guideline for platform agnostic look and feel.
            </p>
            <a href="https://naao.delivery/" target="_blank" className="special">
              Visit Naao
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Poster Design</h2>
          <p>
          Print design was the first step of my Graphic Designing career. 
          Selling a lot of print design products (i.e: business card, 
          brochures etc.) on Envato marketplace early on while still 
          learning the ins and outs of design processes was quite 
          challenging but something I still enjoy to this day.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">cutlery language 101</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Happy Birthday</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Periodic Table</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Love Hormones</h3>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p> */}
              {/* <a href="/#" className="special">
                Learn more
              </a> */}
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic8} alt="" />
              </a>
              <h3 className="major">Love is in the air</h3>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic9} alt="" />
              </a>
              <h3 className="major">Programmer problems</h3>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic11} alt="" />
              </a>
              <h3 className="major">Love hormones</h3>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic10} alt="" />
              </a>
              <h3 className="major">Travel to Sofia</h3>
            </article>

          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;

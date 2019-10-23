import React, { useState } from 'react';

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
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';
import pic15 from '../assets/images/pic15.jpg';
import pic16 from '../assets/images/pic16.jpg';
import pic17 from '../assets/images/pic17.jpg';
import pic18 from '../assets/images/pic18.jpg';
import pic19 from '../assets/images/pic19.jpg';
import pic20 from '../assets/images/pic20.jpg';
import pic21 from '../assets/images/pic21.jpg';
import pic22 from '../assets/images/pic22.jpg';
import pic23 from '../assets/images/pic23.jpg';
import pic24 from '../assets/images/pic24.jpg';
import pic25 from '../assets/images/pic25.jpg';
import pic26 from '../assets/images/pic26.jpg';
import pic27 from '../assets/images/pic27.jpg';
import pic28 from '../assets/images/pic28.jpg';



import config from '../../config';
const IndexPage = () => {
  const [showAllPosters, setShowAllPosters] = useState(false);
  const showPoster = () => {
    setShowAllPosters(true);
  };
  const hidePoster = () => {
    setShowAllPosters(false);
  };
  
  const [showAllBusinessCards, setShowAllBusinessCards] = useState(false); 
  const showBusinessCards = () => {
    setShowAllBusinessCards (true);
  };

  const hideBusinessCards = () => {
    setShowAllBusinessCards (false);
  };

  const [showAllResume, setShowAllResume] = useState(false); 
  const showResume = () => {
    setShowAllResume (true);
  };

  const hideResume = () => {
    setShowAllResume (false);
  };


  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
            <img src={pic28} alt=""/>
          </div>
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="contact">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li key={url}>
                <a href={url}>
                  <i className={`fa ${icon}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
        </div>
        
      </section>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="http://localhost:8000/jarme" target ="_blank" className="image">
              <img src={pic1} alt="" />
            </a>
            <div className="content">
              <h2 className="major">
                <a href="http://localhost:8000/jarme" target ="_blank">Jarme Platform</a>
              </h2>
              <p>
              Designed the entire suite of diary/mood tracker app using Sketch
              and Photoshop and worked closely with the developer throughout the 
              process of building a production ready platform. 
              Jarme is currently available on <a href="https://apps.apple.com/us/app/jarme-diary-mood-tracker/id1112553386" target= "_blank">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.bdgeeks.jarme&hl=en" target= "_blank">Android</a>, <a href="https://web.jarmemori.es/auth#/auth" target= "_blank">web</a> and Desktop (Macintosh & Linux).
              </p>
              <a href="https://jarmemori.es" target="_blank" className="special">
                Visit Jarme Site
              </a>
            </div>
          </div>
        </section>
        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="http://localhost:8000/naao" target ="_blank" className="image">
              <img src={pic2} alt="" />
            </a>
            <div className="content">
              <h2 className="major">
                <a href="http://localhost:8000/naao" target ="_blank">Naao Platform</a></h2>
              <p>
              A crowsourced package delivery platform inspired by Justeat, Airbnb and Uber. Designed the website and the mobile app (Android, iOS) using Photoshop, Illustrator and Sketch and nativebase component design guideline for platform agnostic look and feel.
              </p>
              <a href="https://naao.delivery/" target="_blank" className="special">
                Visit Naao Site
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
              <h2 className="major">A series of unfortunate events</h2>
              <p>
                This app is currently under the design and development process.
                The idea has been generated very recently and we are trying our best 
                to get it up and running as soon as possible. Till then stay tuned! 
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>
        
        <section id="four" className="wrapper project alt style1">
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
              
              {showAllPosters && (
                <>
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
                </>
              )}
            </section>
            <ul className="actions">
              <li>
                {showAllPosters && (
                  <span className="button" onClick = {hidePoster}>
                    See Less
                  </span>
                )}

                {!showAllPosters && (
                  <span className="button" onClick = {showPoster}>
                    See more
                  </span>
                )}
              </li>
            </ul>
          </div>
        </section>
        <section id="four" className="wrapper project style2">
          <div className="inner">
            <h2 className="major">Business Cards</h2>
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
                  <img src={pic12} alt="" />
                </a>
                <h3 className="major">Photography</h3>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic13} alt="" />
                </a>
                <h3 className="major">Corporate</h3>
              </article>
              
              {showAllBusinessCards && (
              <>
                <article>
                  <a href="/#" className="image">
                    <img src={pic14} alt="" />
                  </a>
                  <h3 className="major">Minimal</h3>
                </article>
                <article>
                  <a href="/#" className="image">
                    <img src={pic15} alt="" />
                  </a>
                  <h3 className="major">Fashion/Model</h3>
                </article>
                <article>
                  <a href="/#" className="image">
                    <img src={pic16} alt="" />
                  </a>
                  <h3 className="major">Wedding</h3>
                </article>
                <article>
                  <a href="/#" className="image">
                    <img src={pic17} alt="" />
                  </a>
                  <h3 className="major">Corporate</h3>
                </article>
                <article>
                  <a href="/#" className="image">
                    <img src={pic18} alt="" />
                  </a>
                  <h3 className="major">Corporate</h3>
                </article>
                <article>
                <a href="/#" className="image">
                  <img src={pic19} alt="" />
                </a>
                <h3 className="major">Personal</h3>
              </article>
              </>
              )}
            </section>
            <ul className="actions">
              <li>
              {showAllBusinessCards && (
                  <span className="button" onClick = {hideBusinessCards}>
                    See Less
                  </span>
                )}

              {!showAllBusinessCards && (
                  <span className="button" onClick = {showBusinessCards}>
                    See more
                  </span>
                )}
              </li>
            </ul>
          </div>
        </section>
        <section id="four" className="wrapper project alt style3">
          <div className="inner">
            <h2 className="major">Resumè</h2>
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
                  <img src={pic21} alt="" />
                </a>
                <h3 className="major">Resumè 2</h3>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic20} alt="" />
                </a>
                <h3 className="major">Resumè 1</h3>
              </article>
              
              {showAllResume && (
              <>
                <article>
                  <a href="/#" className="image">
                    <img src={pic22} alt="" />
                  </a>
                  <h3 className="major">Resumè 3</h3>
                </article>
                <article>
                  <a href="/#" className="image">
                    <img src={pic23} alt="" />
                  </a>
                  <h3 className="major">Resumè 4</h3>
                </article>
                
              </>
              )}
            </section>
            <ul className="actions">
              <li>
              {showAllResume && (
                  <span className="button" onClick = {hideResume}>
                    See Less
                  </span>
                )}

              {!showAllResume && (
                  <span className="button" onClick = {showResume}>
                    See more
                  </span>
                )}
              </li>
            </ul>
          </div>
        </section>
        <section id="four" className="wrapper project style4">
          <div className="inner">
            <h2 className="major">Brochure</h2>
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
                  <img src={pic24} alt="" />
                </a>
                <h3 className="major">Personal Brochure</h3>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic25} alt="" />
                </a>
                <h3 className="major">Corporate Brochure</h3>
              </article>
              
              
              {showAllResume && (
              <>
                <article>
                  <a href="/#" className="image">
                    <img src={pic26} alt="" />
                  </a>
                  <h3 className="major">Brochure</h3>
                </article>
                <article>
                  <a href="/#" className="image">
                    <img src={pic27} alt="" />
                  </a>
                  <h3 className="major">Brochure</h3>
                </article>
              </>
              )}
            </section>
            <ul className="actions">
              <li>
              {showAllResume && (
                  <span className="button" onClick = {hideResume}>
                    See Less
                  </span>
                )}

              {!showAllResume && (
                  <span className="button" onClick = {showResume}>
                    See more
                  </span>
                )}
              </li>
            </ul>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default IndexPage;

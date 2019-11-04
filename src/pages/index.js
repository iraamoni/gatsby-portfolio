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
import pic29 from '../assets/images/pic29.jpg';
import pic30 from '../assets/images/pic30.jpg';
import pic31 from '../assets/images/pic31.jpg';
import pic32 from '../assets/images/pic32.jpg';
import pic33 from '../assets/images/pic33.jpg';
import pic34 from '../assets/images/pic34.jpg';
import pic35 from '../assets/images/pic35.jpg';
import pic36 from '../assets/images/pic36.jpg';
import pic37 from '../assets/images/pic37.jpg';
import pic38 from '../assets/images/pic38.jpg';



import config from '../../config';

const projectSections = [
  
  {
    title: "Mobile UI/UX design",
    description: `The following projects were designed using a mixture of Sketch, Figma, Illustration
    and Photoshop. I have been designing mobile app on and off since 2016 and have started playing around 
    with Figma and Adobe XD very recently.`,
    projects: [
      {
        image: pic29,
        link: "https://dribbble.com/shots/7848998-Naao-Login-Page",
        title: "Naao login page",
      },
      {
        image: pic30,
        link: "https://dribbble.com/shots/7848233-Torino-GTT-Bus-App",
        title: "Torino GTT App redesign",
      },
      {
        image: pic31,
        link: "https://dribbble.com/shots/7848610-Naao-Onboarding-Screen",
        title: "Naao Onboarding screen",
      },
      {
        image: pic32,
        link: "https://dribbble.com/shots/7863030-Empty-page-illustration",
        title: "Empty page illustration",
      },
      {
        image: pic33,
        link: "https://dribbble.com/shots/7863943-Empty-search-page",
        title: "Empty search page",
      },
      {
        image: pic34,
        link: "https://dribbble.com/shots/7863316-Crowdsource-package-Delivery",
        title: "naao mobile UI",
      },
      {
        image: pic38,
        link: "https://dribbble.com/shots/4066269-Jarme-Onboarding-Screens",
        title: "Jarme Onboarding screen",
      },
    ]
  },
  {
    title: "WebSite Design",
    description: `I have tried to keep the look and feel of the websites both friendly
    and approachable. The color combination should easily catch users eyes and the layout
    of the sites were also divided into sections for the users to be able to easily grab 
    the information they want. I have also used some illustrations to keep the webpage look
    less boring while providing meaningful informations. 
    Software used: Photoshop, Illustrator`,
    projects: [
      {
        image: pic35,
        link: "https://naao.delivery/",
        title: "Naao Website",
      },
      {
        image: pic36,
        link: "https://jarmemori.es/",
        title: "Jarme Website",
      },
      {
        image: pic37,
        title: "Jarme SignIn/SignUp",
      },
    ]
  },
  {
    title: "Poster Design",
    description: `I have designed the following posters to sell on Etsy Marketplace and also for personal 
    use too. The designs were created using Photoshop and with a little bit of help from 
    Illustrator.`,
    projects: [
      {
        image: pic4,
        title: "cutlery language 101",
      },
      {
        image: pic5,
        title: "Happy Birthday",
      },
      {
        image: pic6,
        title: "Periodic Table",
      },
      {
        image: pic7,
        title: "Love Hormones",
      },
      {
        image: pic8,
        title: "Love is in the air",
      },
      {
        image: pic9,
        title: "Programmer problems",
      },
      {
        image: pic11,
        title: "Love hormones",
      },
      {
        image: pic10,
        title: "Travel to Sofia",
      },
    ]
  },
  {
    title: "Business Cards",
    description: `Business Card design was the first step of my Graphic Designing career. 
    Selling print design products on Envato marketplace early on while still 
    learning the ins and outs of design processes was quite 
    challenging but something I still enjoy to this day.`,
    projects: [
      {
        image: pic12,
        title: "Photography",
      },
      {
        image: pic13,
        title: "Corporate",
      },
      {
        image: pic14,
        title: "Minimal",
      },
      {
        image: pic15,
        title: "Fashion/Model",
      },
      {
        image: pic16,
        title: "Wedding",
      },
      {
        image: pic17,
        title: "Corporate",
      },
      {
        image: pic18,
        title: "Corporate",
      },
      {
        image: pic19,
        title: "Personal",
      },
    ]
  },
  {
    title: "Resumè",
    description: `Traditional resumè can be made using Microsoft office, however Microsoft Office 
    is very limited when it comes to customising a product based on one's personal 
    needs. Creating resumès using Illustrator or InDesign should always be a designer's
    first choice however the following resumès were created using Photoshop as I have been 
    always comfortable with this software than the others.`,
    projects: [
      {
        image: pic21,
        title: "Resumè 1",
      },
      {
        image: pic20,
        title: "Resumè 2",
      },
      {
        image: pic22,
        title: "Resumè 3",
      },
      {
        image: pic23,
        title: "Resumè 4",
      },
    ]
  },
  {
    title: "Brochure",
    description: `The following brochures were also created for commercial purposes using Photoshop. 
    Although they were designed quite some time ago, these design works are still 
    something I am quite proud off! `,
    projects: [
      {
        image: pic24,
        title: "Personal Brochure",
      },
      {
        image: pic25,
        title: "Corporate Brochure",
      },
      {
        image: pic26,
        title: "Corporate Brochure",
      },
      {
        image: pic27,
        title: "Corporate Brochure",
      },
    ]
  },
];

const IndexPage = () => {
  const [openedSections, setOpenedSections] = useState([]);

  const openSection = (projectSectionTitle) => {
    const newOpenedSections = [...openedSections, projectSectionTitle];
    setOpenedSections(newOpenedSections);
  };

  const closeSection = (projectSectionTitle) => {
    const newOpenedSections = openedSections.filter(sectionTitle => sectionTitle !== projectSectionTitle);
    setOpenedSections(newOpenedSections);
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
            const { icon, url, name } = social;
            return (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {!!icon ? (
                    <i className={`fa ${icon}`}></i>
                  ) : (
                    <span className="button primary small">{ name }</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        
        <div className="hire-me-btn">
          <a 
            href={config.socialLinks[3].url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hire-me-btn button primary small">
            Hire Me
          </a>
        </div>
        </div>
        
      </section>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="/jarme" target ="_blank" className="image">
              <img src={pic1} alt="" />
            </a>
            <div className="content">
              <h2 className="major">
                <a href="/jarme" target ="_blank">Jarme Platform</a>
              </h2>
              <p>
              Designed the entire suite of diary/mood tracker app using Sketch
              and Photoshop and worked closely with the <a href="https://www.codementor.io/foysalit" target= "_blank" rel="noopener noreferrer">developer</a> throughout the 
              process of building a production ready platform. 
              Jarme is currently available on <a href="https://apps.apple.com/us/app/jarme-diary-mood-tracker/id1112553386" target= "_blank" rel="noopener noreferrer">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.bdgeeks.jarme&hl=en" target= "_blank" rel="noopener noreferrer">Android</a>, <a href="https://web.jarmemori.es/auth#/auth" target= "_blank" rel="noopener noreferrer">web</a> and Desktop (Macintosh & Linux).
              </p>
              <a href="https://jarmemori.es" target="_blank" rel="noopener noreferrer" className="special">
                Visit Jarme
              </a>
            </div>
          </div>
        </section>
        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="/naao" target ="_blank" className="image">
              <img src={pic2} alt="" />
            </a>
            <div className="content">
              <h2 className="major">
                <a href="/naao" target ="_blank" rel="noopener noreferrer">Naao Platform</a></h2>
              <p>
              A crowsourced package delivery platform inspired by Justeat, Airbnb and Uber. 
              Designed the <a href="https://naao.delivery/" target="_blank" rel="noopener noreferrer">website</a> and the mobile app (<a href="https://play.google.com/store/apps/details?id=com.bdgeeks.naao" target="_blank" rel="noopener noreferrer">Android</a>, <a href="https://apps.apple.com/app/id1446178590" target="_blank" rel="noopener noreferrer">iOS</a>) using Photoshop, 
              Illustrator, Sketch and <a href="https://nativebase.io/" target="_blank" rel="noopener noreferrer">NativeBase components</a> design guideline 
              for platform agnostic look and feel and worked very closely with <a href="https://www.codementor.io/foysalit" target= "_blank" rel="noopener noreferrer">Foysal Ahamed</a>, the developer of Naao throughout the process of building the platform. <br/>

              </p>
              <a href="https://naao.delivery/" target="_blank" rel="noopener noreferrer" className="special">
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
        
        {projectSections.map((projectSection, i) => (
          <section className={`wrapper project ${(i%2) === 0 ? "alt" : ""} style${i+1}`}>
          <div className="inner">
            <h2 className="major">{ projectSection.title }</h2>
            <p>{projectSection.description}</p>

            <section className="features">
              {projectSection.projects.slice(0, openedSections.indexOf(projectSection.title) >= 0 ? projectSection.projects.length : 2).map(project => (
                <article>
                  <a href={project.link || "/#"} className="image">
                    <img src={project.image} alt="" />
                  </a>
                  <h3 className="major">{ project.title }</h3>
                </article>
              ))}
            </section>
            <ul className="actions">
              <li>
                {openedSections.indexOf(projectSection.title) >= 0 && (
                  <span className="button" onClick = {() => closeSection(projectSection.title)}>
                    See Less
                  </span>
                )}

                {openedSections.indexOf(projectSection.title) < 0 && (
                  <span className="button" onClick = {() => openSection(projectSection.title)}>
                    See more
                  </span>
                )}
              </li>
            </ul>
          </div>
        </section>
        
        ))}
  </section>
    </Layout>
  );
};

export default IndexPage;

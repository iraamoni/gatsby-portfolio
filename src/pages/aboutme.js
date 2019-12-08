import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Layout from '../components/Layout';
import analytics from "../analytics";


const skillSections = [
    [
        {
            percentage: 75,
            title: "Photoshop",
            pathColor: '#9DABDD',
        },
        {
            percentage: 70,
            title: "Sketch",
            pathColor: '#ab6093',
        },
        {
            percentage: 50,
            title: "Figma",
            pathColor: '#ECBE7A',
        },
        {
            percentage: 40,
            title: "Illustrator",
            pathColor: '#4AA789',
        },
        {
            percentage: 30,
            title: "XD",
            pathColor: '#cb7d8a',
        },
        {
            percentage: 60,
            title: "HTML",
            pathColor: '#497ba6',
        },
        {
            percentage: 30,
            title: "CSS",
            pathColor: '#e9cdc2',
        },
        {
            percentage: 10,
            title: "JavaScript",
            pathColor: '#9c8ade',
        },
    ],
];


const IndexPage = () => {
    useEffect(() => {
      analytics.page();
    }, []);
  
    const [pageIsLoaded, setPageIsLoaded] = useState(false);
    setTimeout(() => setPageIsLoaded(true), 300);

    return(
        <Layout fullMenu>
            <section id="wrapper">
            <header>
                <div className="inner">
                <h2>About me</h2>
                <p>UI/UX Designer, creative thinker, problem solver, mountain lover </p>
                </div>
            </header>

            <div className="wrapper">
                <div className="inner">
                <h3 className="major">Who am I</h3>
                <p>
                An enthusiastic, dedicated and hard-working self-taught Graphic Designer, 
                currently in the process of a career change into IT. Although the area 
                of Biological Science was an interesting journey, creativity 
                and design has always been a passion which evolved from Print 
                Design to UI/UX research. Recently started to play around with 
                front-end development tools such as HTML, CSS, JavaScript to 
                be able to create a frictionless interaction between design and 
                the development process.

                </p>

                <h3 className="major">Education</h3>
                <ul>
                    <li>
                        MSc Haematology & Transfusion Science <br/> Middlesex University | London, UK <br/> Oct 2015 - Jul 2017
                    </li>
                    <br/>
                    <li>
                        BSc Biomedical Science <br/> Middlesex University | London, UK <br/> Oct 2011 - Jul 2015
                    </li>
                </ul>
                
                <h3 className="major">Skill sets</h3>


                {skillSections.map((skills, i) => (
                    <section className={`skill-section`} key={`skill_section_${i}`}>
                        <div className="inner">
                            {skills.map(skill => (
                                <div className="skill-box" key={skill.title}>
                                    <CircularProgressbar
                                        value={pageIsLoaded ? skill.percentage : 0}
                                        text={`${pageIsLoaded ? skill.percentage : 0}%`}
                                        backgroundPadding ={6}
                                        background = {true}
                                        styles={buildStyles({
                                            pathColor: skill.pathColor,
                                            textColor: `rgba(255, 255, 255, ${50/100})`,
                                            trailColor: '#282a38',
                                            backgroundColor: '#282a38',
                                            pathTransitionDuration: 5,
                                        })}
                                    />
                                    <p>{ skill.title }</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}


                <h3 className="major">Why the change in career?</h3>
                <p>
                I get asked this question a lot that if I have studied Biomedical Science, then why did I 
                change my career into UI/UX design. Although the story is very long but the short answer would be
                the <strong>Flexibility</strong> & <strong>Freedom</strong> this career provides. Career in 
                my chosen field made me feel extremely
                restrained as I had to be physically present in every interviews, 
                work day/night shifts in a freezing room temperature, follow standard 
                dress code and so on.
                </p>

                <h3 className="major">why particularly UI/UX design?</h3> 
                <div className="col-6 col-12-medium">
                    <p>To answer this I have to go back to 2011, when my awfully 
                        smart husband: <a href="https://foysal.it" target="_blank" rel="noopener noreferrer">Foysal Ahamed</a> first 
                        started learning how to code. After sometime of learning the basics, he built a 
                        website on his own called BDGEEKS in 2013 where he would upload programming related 
                        tutorials in Bengali but he did not like the look and feel of the website. This is 
                        where I jumped in and helped him out by trying to design a website for him.
                        
                        After that, 
                        he continued learning, building and working on projects while I moved onto print 
                        designing. I uploaded a few business cards and brochures from 2013 to 2014 
                        Graphic River. And again all of this was just out of curiosity and time 
                        pass. I did not have any intention of making this a career back then.
                        </p>
                        <p>
                        In 2015, I got caught up with the thesis, coursework and exams of my final 
                        year of bachelors. <a href="https://codementor.io/foysalit" target="_blank" rel="noopener noreferrer">Foysal</a> then 
                        moved into mobile app development 
                        and since then together we have built Jarme: a colourful diary app 
                        and Naao: a crowdsourced package delivery app both of which are currently 
                        available on Android and iOS. I really enjoyed working on both of these 
                        projects with <a href="https://twitter.com/foysalit" target="_blank" rel="noopener noreferrer">Foysal</a> and it 
                        finally made me realise that this is something I 
                        really want to build my career on.</p>
                                    
                </div>
                <h3 className="major">Programming</h3>
                <p>
                When designing <a href="https://www.jarmemori.es" target="_blank" rel="noopener noreferrer">Jarme</a> and <a href="https://www.naao.netlify.com/" target="_blank" rel="noopener noreferrer">Naao</a> I have realised that my lack of 
                knowledge in what can and can't be built with a programming language 
                was making it extremely difficult for to build the apps especially 
                Jarme. My design for Jarme was inconsistent and did not follow any design 
                system. I was also designing components that were a bit unrealistic in terms
                of programming and even if there was a time consuming way of coding it, 
                the app would end up being unintuitive from a UX perspective. Foysal and
                I were arguing a lot as I was in the impression that he was not liking my
                designs while in reality the designs were actually very unrealistic to 
                begin with. Hence why I have decided to learn more about programming 
                which I believe will improve my design thinking a lot more and reduce 
                the friction between the designer and the developer. <br/> 
                </p>
                <h3 className="major">More about me</h3>
                <h4>Hobbies</h4> 
                <ul>
                    <li>
                        Travelling
                    </li>
                    <li>
                        Hiking
                    </li>
                    <li>
                        Reading (Crime, fiction & Mystery)
                    </li>
                    <li>
                        Cycling
                    </li>
                </ul>
            
                <h4>Languages</h4> 
                <ul>
                    <li>
                        English (Fluent)
                    </li>
                    <li>
                        Bengali (Mother tongue)
                    </li>
                    <li>
                        Italian (Beginner)
                    </li>
                </ul>
                </div>
                </div>
            </section>
        </Layout>
    );
};

export default IndexPage;

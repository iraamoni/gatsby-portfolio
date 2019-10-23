import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import Layout from '../components/Layout';

const skillSections = [
    [
        {
            percentage: 75,
            title: "Adobe Photoshop",
            pathColor: '#9DABDD',
        },
        {
            percentage: 50,
            title: "Adobe Illustrator",
            pathColor: '#4AA789',
        },
        {
            percentage: 30,
            title: "Adobe XD",
            pathColor: '#cb7d8a',
        },
    ],
    [
        {
            percentage: 70,
            title: "Sketch",
            pathColor: '#ab6093',
        },
        {
            percentage: 35,
            title: "Figma",
            pathColor: '#ECBE7A',
        },
    ],
    [ 
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
    const [pageIsLoaded, setPageIsLoaded] = useState(false);
    setTimeout(() => setPageIsLoaded(true), 300);

    return(
    <Layout fullMenu>
        <section id="wrapper">
            <header>
                <div className="inner">
                <h2>Skill Sets</h2>
                <p>Crowdsourced package delivery</p>
                </div>
            </header>

            {skillSections.map((skills, i) => (
                <section className={`style${i+1} ${((i+1) % 2) === 0 ? "alt" : ""} wrapper skill-section`} key={`skill_section_${i}`}>
                    <div className="inner">
                        {skills.map(skill => (
                            <div className="skill-box" key={skill.title}>
                                <CircularProgressbar
                                    value={pageIsLoaded ? skill.percentage : 0}
                                    text={`${pageIsLoaded ? skill.percentage : 0}%`}
                                    backgroundPadding ={5}
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
        </section>
    </Layout>
    );
}
export default IndexPage;

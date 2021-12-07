import React from 'react';
import profile1 from '../assets/Project/projects/profile-1.jpg';
import styled from 'styled-components';
import Curly from './Curly'
import Connect from './Connect'
import Resume from './Resume'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css'
import TypewriterComponent from 'typewriter-effect';

const AboutSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <StyledAbout>
                <div className="description" id="about" >
                    <div className="title">
                        <BigText >
                            <HI data-aos="fade-right">Hello!</HI>
                            <h1 data-aos="fade-right" data-aos-delay="100"> My name is <StyledA data-aos="fade-right" data-aos-delay="100">Kamruzzaman</StyledA>
                            </h1>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="300">
                            <h1 ><span>and I'm a</span></h1>
                        </BigText>
                        <BigText data-aos="fade-right" data-aos-delay="500">
                            <H2 ><span>
                                <TypewriterComponent
                                    options={{
                                        strings: ['Mern Stack Developer', 'Front-End Developer', 'React Developer', 'Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span></H2>
                        </BigText>
                    </div>
                    <P data-aos="fade-up" >I’m student of BSc in CSE. I am working very passionate about
                        programming. I love to explore new programming technologies and try to apply in my projects. I am
                        always wanting to do my best about the UI and UX of my projects. I'm always eager to learn from
                        anyone and everyone.
                    </P>
                    <Resume />

                </div>
                <div className="image-section">
                    <Img data-aos="fade-left"
                        src={profile1}
                        alt="andreea egli" />
                    <Connect />
                </div>

            </StyledAbout>
            <Curly />

        </>
    );
};

const StyledAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 8rem;
    color: whitesmoke;
    margin-bottom: 2vh;
    
@media (max-width: 768px) {
    height: 45vh;
    display: block;
    text-align: center; 
    padding: 3rem;
    margin-top: 40px;
    }
    
@media (max-width: 480px){
    padding: 50px;
    text-align: left;
    margin-top: 40px;
    
    } 
`
const HI = styled.h2`
    font-weight: 900;
    font-size: 2rem;
    color: #3DC9A7; 
    font-family: 'Lato', sans-serif;
`
const P = styled.p`
    margin: 2.2rem 2rem 1rem 0rem;
    font-weight: 300;
    font-size: 1rem;
    padding-right: 8rem;
    font-family: 'Montserrat', sans-serif;

@media (max-width: 768px){
    padding: 2rem;
    } 
@media (max-width: 480px){
    padding: 3rem 1rem 2rem;
    
    }
`
const H2 = styled.h2`
    font-size: 30px;
    font-weight: 900;
    color: #3DC9A7;
    font-family: 'Lato', sans-serif;
`
const StyledA = styled.span`
    font-size: 30px;
    color: #3DC9A7;
    font-weight: 900;
    font-family: 'Lato', sans-serif;
`
const Img = styled.img`
    width: 40vh;
    height: 40vh;
    margin-right: 5rem;
    margin-top: 5rem;
    position: relative;
    border-radius: 50%; 
    overflow: hidden;
    object-fit: cover;
    box-shadow: 1px 3px 32px -4px black;
    @media (max-width: 1024px){
        width: 20vh;
        height: 20vh;
    } 
@media (max-width: 768px){
    display: none;
    } 
@media (max-width: 480px){
    display: none; 
    }
`
const BigText = styled.div`
    /* overflow: hidden; */
    text-shadow: 0 15px 7px #081730; 
`
export default AboutSection;


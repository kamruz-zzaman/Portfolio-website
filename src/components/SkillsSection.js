import React from 'react';
import bootstrap from '../assets/bootstrap.svg';
import materialui from '../assets/material-ui.svg';
import css from '../assets/css.svg';
import figma from '../assets/figma.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import mongodb from '../assets/mongodb.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import termin from '../assets/termin.svg';
import vscode from '../assets/vscode.svg';
import styled from 'styled-components';
import expressjs from '../assets/expressjs.svg'
import nextjs from '../assets//nextjs.svg'
import tailwindcss from '../assets/tailwind-css.svg'
import nodejs from '../assets/node-js.svg'
import php from '../assets/php.svg'
import mysql from '../assets/mysql.svg'
import gitlab from '../assets/gitlab.svg'
import xampp from '../assets/xampp.svg'
import photoshop from '../assets/adobe-photoshop.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const SkillsSection = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <>
            <DivWrapper
                id="skills"
            >
                <Text>Tech & tools</Text>
                <Icons data-aos="zoom-in">
                    <img src={html} alt="html" title='html' />
                    <img src={css} alt="css" title='css' />
                    <img src={bootstrap} alt="bootstrap" title='bootstrap' />
                    <img src={tailwindcss} alt="tailwind css" title='tailwind css' />
                    <img src={materialui} alt="Material Ui" title='Material Ui' />
                    <img src={nodejs} alt="node js" title='node js' />
                    <img src={js} alt="javascript" title='javascript' />
                    <img src={php} alt="php" title='php' />
                    <img src={react} alt="styledc" title='react' />
                    <img src={expressjs} className='bg-light p-2 rounded' alt="express js" title='express js' />
                    <img src={nextjs} className='bg-light p-2 rounded' alt="next js" title='next js' />
                    <img src={mongodb} alt="mongodb" title='mongodb' />
                    <img src={mysql} alt="mysql" title='mysql' />
                    <img src={redux} alt="redux" title='redux' />
                    <img src={xampp} alt="xampp" title='xampp' />
                    <img src={git} alt="git" title='git' />
                    <img src={github} alt="github" title='github' />
                    <img src={gitlab} alt="gitlab" title='gitlab' />
                    <img src={vscode} alt="vscode" title='vs code' />
                    <img src={termin} alt="terminal" title='terminal' />
                    <img src={figma} alt="figma" title='figma' />
                    <img src={photoshop} alt="photoshop" title='photoshop' />
                </Icons>
            </DivWrapper>
        </>
    );
};

const DivWrapper = styled.div`
    min-height: 90vh;
    margin-left: 15vh; 
    margin-right: 15vh;
    margin-top: 1rem;
    text-align: center;

@media (max-width: 768px){
    margin: 0 5rem 5rem 5rem;
    }  

@media (max-width: 480px){
    margin-left: 5vh; 
    margin-right: 3vh;
    margin-top: 400px;
    }  
`
const Text = styled.h2`
    margin-bottom: 15vh; 
    font-size: 2rem;
    font-weight: 900;
    color: whitesmoke;
    text-align: center;

@media (max-width: 768px){
    margin-top: 1rem;  
    margin-bottom: 10vh; 
    }
@media (max-width: 480px){
    margin-top: 2vh;
    margin-bottom: 7vh;
    font-size: 2rem;
    } 
`

const Icons = styled.div`
    height: 7vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1em; 
    row-gap: 3rem;
    justify-items: center;
    align-items: center;
    img {
        margin-top: 1vh;
        width: 4vw;
    }
        
@media (max-width: 768px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 4rem;
    img  {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    } 
    .white-circle {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 14vw;
    }
}
@media (max-width: 480px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem; 
    row-gap: 1rem;
    img {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    } 
    .white-circle {
        margin-top: -1vh;
        padding: 1rem 2rem;
        width: 25vw;
    }
}
`
export default SkillsSection;
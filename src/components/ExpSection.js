import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ExpSection = () => {
    AOS.init({
        duration: 1200,
    })

    return (
        <div className='my-5'>
            <H2>Experiences</H2>
            <div className="">
                <DivContainer className="cards" id="experience" >
                    <div className='shadow p-4 exp-background rounded'>
                        <table width={'100%'}>
                            <tbody>
                                <tr>
                                    <th>Company:</th>
                                    <td><a className='text-white fs-5' href="https://hovata.com/">Hovata Technologies</a></td>
                                </tr>
                                <tr>
                                    <th>Designation:</th>
                                    <td>SOFTWARE DEVELOPER FRONT-END</td>
                                </tr>
                                <tr>
                                    <th>Duration:</th>
                                    <td>10th October 2022 – Present</td>
                                </tr>
                                <tr>
                                    <th>Location:</th>
                                    <td>Tower (Unit 5-A), 42/43 Fahima, Purana Paltan, <br /> Dhaka 1000.</td>
                                </tr>
                                <tr>
                                    <th>Type:</th>
                                    <td>Onsite.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='shadow p-4 exp-background rounded'>
                        <table width={'100%'}>
                            <tbody>
                                <tr>
                                    <th>Company:</th>
                                    <td><a className='text-white fs-5' href="https://webtechbar.com/">Webtech Bar</a></td>
                                </tr>
                                <tr>
                                    <th>Designation:</th>
                                    <td>SOFTWARE DEVELOPER FRONT-END</td>
                                </tr>
                                <tr>
                                    <th>Duration:</th>
                                    <td>1st June 2022 – 30th September 2022</td>
                                </tr>
                                <tr>
                                    <th>Location:</th>
                                    <td>William Street, New York.</td>
                                </tr>
                                <tr>
                                    <th>Type:</th>
                                    <td>Remote.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='shadow p-4 exp-background rounded'>
                        <table width={'100%'}>
                            <tbody>
                                <tr>
                                    <th>Company:</th>
                                    <td><a className='text-white fs-5' href="https://www.atg.world/">Across The Global(ATG) World</a></td>
                                </tr>
                                <tr>
                                    <th>Designation:</th>
                                    <td>MERN Stack Developer</td>
                                </tr>
                                <tr>
                                    <th>Duration:</th>
                                    <td>1st April 2021 – 31st May 2022</td>
                                </tr>
                                <tr>
                                    <th>Location:</th>
                                    <td>Bengaluru, India.</td>
                                </tr>
                                <tr>
                                    <th>Type:</th>
                                    <td>Remote.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DivContainer>
            </div>
        </div>
    );
};

const DivContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    justify-content: center;
    margin-left: 15vh; 
    margin-right: 15vh;
    color:white;
    @media (max-width: 768px){
        grid-template-columns: auto;
        margin: 2rem;
    }
`

const H2 = styled.h2`
    font-weight: 900;
    color: whitesmoke;
    text-align: center;
    margin-bottom: 2em;
    font-size:2rem;
@media (max-width: 768px){
        margin-top: 2vh;
        margin-bottom: 7vh;
        font-size: 2rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        margin-bottom: 7vh;
        font-size: 2rem;
    }  
`
export default ExpSection;
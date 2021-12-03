import React from 'react';
import './Detail.css'
import project30 from '../assets/Project/projects/project1c11.jpg'
import project31 from '../assets/Project/projects/project1c1.jpg'
import project32 from '../assets/Project/projects/project1c2.jpg'
import project33 from '../assets/Project/projects/project1c3.jpg'
import { Carousel } from 'react-bootstrap';
import { FaGithub, FaLink } from 'react-icons/fa';
import AOS from 'aos';
const Detailt = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <div className='margi'>
            <div className='row ms-5 position-relative'>
                <div className='row '>
                    <div className='col-md-7'>
                        <img data-aos="fade-right" className='mt-5 w-75 w-md-100' src={project30} alt="" />
                    </div>
                    <div className=' col-md-5 '>
                        <h2 data-aos="fade-left" className='mt-5 text-light'>Life Check</h2>
                        <h4 data-aos="fade-left" className='text-light'>• Authenticated users can book ambulances and beds for patients.<br />
                            • User can purchase any service.<br />
                            • Authenticated users can get information about services.
                        </h4>
                        <p data-aos="fade-left" className='text-light mt-2'><span className='fw-bold'>Tec:</span> Tailwind css, React Js</p>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://github.com/kamruz-zzaman/Life-Check' target='_blank' rel="noreferrer"><FaGithub className='fs-1 text-light mt-3 me-5'></FaGithub ></a>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://life-check-bdfbf.web.app/' target='_blank' rel="noreferrer"><FaLink className='fs-1 text-light mt-3'></FaLink></a>

                    </div>
                </div>
            </div>
            <div className='margi'>
                <div className='text-center mt-5 fw-bolder fs-2'>
                    <span className='text-light text-center '><u>More Pics</u></span><hr />
                </div>
                <div className=' d-flex justify-content-center align-items-center'>
                    <Carousel fade className=' w-75'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project31}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project32}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project33}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Detailt;
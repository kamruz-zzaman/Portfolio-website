import React from 'react';
import './Detail.css'
import project1 from '../assets/Project/projects/web.app.jpg'
import project12 from '../assets/Project/projects/web.app2.jpg'
import project13 from '../assets/Project/projects/web.app3.jpg'
import { Carousel } from 'react-bootstrap';
import { FaGithub, FaLink, FaServer, } from 'react-icons/fa';
import AOS from 'aos';
const Detail = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <div className='margi'>
            <div className='row ms-5 position-relative'>
                <div className='row '>
                    <div className='col-md-7'>
                        <img data-aos="fade-right" className='mt-5 w-75 w-md-100' src={project1} alt="" />
                    </div>
                    <div className=' col-md-5 '>
                        <h2 data-aos="fade-left" className='mt-5 text-light'>Drone Peak</h2>
                        <h4 data-aos="fade-left" className='text-light'>•Users Can Sign up and Log in.<br />•Users can buy Drones, manage their orders, delete their orders, add reviews.<br />•Admin can add Product, delete Product, see all orders, manage orders, and can make an admin</h4>
                        <p className='text-light mt-2'><span className='fw-bold'>Tec:</span> Tailwind css, React Js,Express js, Node Js, Mongo DB</p>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://github.com/kamruz-zzaman/Drone-Peak-client-site' target='_blank' rel="noreferrer"><FaGithub className='fs-1 text-light mt-3'></FaGithub ></a>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://github.com/kamruz-zzaman/Drone-Peak-Server-Site' target='_blank' rel="noreferrer"><FaServer className='fs-1 text-light mx-5 mt-3'></FaServer></a>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://drone-peak.web.app/' target='_blank' rel="noreferrer"><FaLink className='fs-1 text-light mt-3'></FaLink></a>

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
                                src={project1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project12}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project13}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Detail;
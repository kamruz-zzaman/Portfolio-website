import React from 'react';
import './Detail.css'
import project21 from '../assets/Project/projects/project2b1.jpg'
import project22 from '../assets/Project/projects/project2b2.jpg'
import project23 from '../assets/Project/projects/project2b3.jpg'
import { Carousel } from 'react-bootstrap';
import { FaGithub, FaLink, FaServer, } from 'react-icons/fa';
import AOS from 'aos';
const Details = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <div className='margi'>
            <div className='row ms-5 position-relative'>
                <div className='row '>
                    <div className='col-md-7'>
                        <img data-aos="fade-right" className='mt-5 w-75 w-md-100' src={project21} alt="" />
                    </div>
                    <div className=' col-md-5 '>
                        <h2 data-aos="fade-left" className='mt-5 text-light'>Dare to Dream Travel Bd</h2>
                        <h4 data-aos="fade-left" className='text-light'>• All users can visit the home page.<br />
                            • An User can Booked her/his interested Tourist Spot.<br />
                            • User can see destination details, book destination, add a destination, see their orders,
                            see all orders, and can add a destination.</h4>
                        <p data-aos="fade-left" className='text-light mt-2'><span className='fw-bold'>Tec:</span> Tailwind css, React Js,Express js, Node Js, Mongo DB</p>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://github.com/kamruz-zzaman/Dare-to-Dream-Travel-Bd' target='_blank' rel="noreferrer"><FaGithub className='fs-1 text-light mt-3'></FaGithub ></a>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://github.com/kamruz-zzaman/Dare_to_dream_Travel_Bd_Server_Site' target='_blank' rel="noreferrer"><FaServer className='fs-1 text-light mx-5 mt-3'></FaServer></a>
                        <a data-aos="fade-left" data-aos-delay="320" href='https://dare-to-dream-travel-bd.web.app/' target='_blank' rel="noreferrer"><FaLink className='fs-1 text-light mt-3'></FaLink></a>
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
                                src={project21}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project22}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project23}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Details;
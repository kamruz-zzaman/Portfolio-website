import React from 'react';
import './Detail.css'
import { FaLink } from 'react-icons/fa';
import AOS from 'aos';
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import contentCard from '../Content'

const Details = () => {
    AOS.init({
        duration: 1200,
    })
    const { id } = useParams();
    const data = contentCard?.find(res => res?.id == id)
    console.log(data);
    return (
        <div className='margi'>
            <div className='row ms-5 position-relative'>
                <div className='row '>
                    <div className='col-md-7'>
                        <Carousel>
                            {
                                data?.images?.map(res => (
                                    <Carousel.Item>
                                        <img data-aos="fade-right" className='mt-5 w-100 w-md-100' src={res} alt="" />
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className=' col-md-5 '>
                        <h2 data-aos="fade-left" className='mt-5 text-light'>{data?.title}</h2>
                        <h4 data-aos="fade-left" className='text-light my-5'>
                            {data?.details}
                        </h4>
                        <p data-aos="fade-left" className='text-light'><span className='fw-bold'>Features:</span></p>
                        <ul className='fw-blod text-light fs-5'>
                            {
                                data?.features?.map(res => (
                                    <li>{res}</li>
                                ))
                            }
                        </ul>
                        <p data-aos="fade-left" className='text-light mt-2'><span className='fw-bold'>Tech:</span> {data?.tech?.map((res, i) => <span>{res} {(i + 1 === data?.tech.length) ? '.' : ','}</span>)}</p>
                        <a data-aos="fade-left" data-aos-delay="320" href={`${data?.live_link}`} target='_blank' rel="noreferrer"><FaLink className='fs-3 text-light' title='Live-Site'></FaLink><span className='fs-3'>Live Site</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
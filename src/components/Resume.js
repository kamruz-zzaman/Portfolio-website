import cv from '../assets/resume.pdf'
import styled from 'styled-components'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {

    AOS.init({
        duration: 1200,
    })
    return (
        <Div data-aos="fade-up" data-aos-delay="300">
            <A className="resume"
                onClick={() => window.open(cv)}
                target="_blank"
            >Resume
            </A>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    

@media (max-width: 500px){
        padding: 1.3rem 2rem; 
        font-size: 1.2rem;
        }
`
const A = styled.a`
    font-weight: bold;
    font-size: 15px;
    width: 9em;
    padding: 10px 30px;
    margin-top: 2rem;
    border: 1px solid #2EBA8B;
    color: lightgrey;
    outline: none;
    text-decoration: none;
    background: #081730;
    border-radius: 5rem;
    text-transform: uppercase;
    &:hover {
        background-color:  #3dc9a6d3;
        transition: all 0.5s ease;
        color: lightgrey;
        }
@media (max-width: 1024px){
    justify-content: center;
        }
@media (max-width: 500px){
        padding: 12px 25px;
        font-size: 10px;

        }
`
export default Resume;
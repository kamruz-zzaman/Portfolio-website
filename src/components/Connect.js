import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { SiHashnode } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Connect = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <Icons >

                <Link data-aos="fade-left" data-aos-delay="320"
                    to={{ pathname: "https://github.com/kamruz-zzaman" }}
                    target={"_blank"}
                    rel="noopener noreferrer">
                    <FaGithub className='icon' title='github' />
                </Link>


                <Link data-aos="fade-right" data-aos-delay="325"
                    to={{ pathname: "https://www.linkedin.com/in/kamruz-zaman/" }}
                    target={"_blank"}
                    rel="noopener noreferrer">
                    <FaLinkedin className='icon' title='linkedin' />
                </Link>


                <Link data-aos="fade-left" data-aos-delay="330"
                    to={{ pathname: "mailto:kamruz.zaman8991@gmail.com" }}
                    target={"_blank"}
                    rel="noopener noreferrer">
                    <FaEnvelope className='icon' title='email' />
                </Link>

                <Link data-aos="fade-right" data-aos-delay="335"
                    to={{ pathname: "https://www.facebook.com/kmkamruzzaman32/" }}
                    target={"_blank"}
                    rel="noopener noreferrer">
                    <FaFacebook className='icon' title='hashnode' />
                </Link>


            </Icons>
        </>
    );
};


const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    text-align: left;
    font-size: 1.2rem;
    margin: 1rem 0 3rem 0;
    .icon {
        font-size: 2rem;
        color: whitesmoke;
        margin: 1.1rem;
        &:hover {
        color: #3DC9A7;
        transition: all 0.7s ease;
        } 
    }
    
@media (max-width: 768px){
    justify-content: center;
    } 
    
@media (max-width: 480px){
    font-size: 1.5rem;
    justify-content: center;
    } 
`
export default Connect;
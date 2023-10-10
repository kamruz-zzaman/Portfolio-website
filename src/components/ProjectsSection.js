import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentCard from '../Content'
import Card from '../components/Card'
import './Card.css'

const ProjectsSection = () => {
    AOS.init({
        duration: 1200,
    })
    return (
        <>
            <H2>Projects</H2>

            <div className="page-wrapper">
                <div className="page-inner">
                    <div className="row">
                        <ProjectContainer className="cards" id="projects" >
                            {contentCard.map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </ProjectContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    justify-content: center;
    margin-left: 15vh; 
    margin-right: 15vh;
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

export default ProjectsSection;
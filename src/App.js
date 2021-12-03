import React, { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import GlobalStyle from './GlobalStyles';
import NavbarPages from './components/NavbarPages';
import NavBurgerMenu from './components/NavBurgerMenu'
import AnimatedCursor from "react-animated-cursor"
import HashLoader from "react-spinners/HashLoader";
import './app.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Curly from './components/Curly'
import Details from './components/Details';
import Detailt from './components/Detailt';

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (

    <div className="App">
      {loading ?
        <div className='loader'><HashLoader color={'#3DC9A7'} loading={loading} size={150} /></div> :
        <BrowserRouter>
          <AnimatedCursor
            innerSize={12}
            outerSize={15}
            color='0, 255, 179, 0.452)'
            outerAlpha={0.2}
            innerScale={1.5}
            outerScale={5}
          />
          <NavbarPages />
          <NavBurgerMenu />
          <Switch>
            <Route exact path='/'>
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </Route>
            <Route path='/details'>
              <GlobalStyle />
              <Curly />
              <Details></Details>
            </Route>
            <Route path='/detailo'>
              <GlobalStyle />
              <Curly />
              <Detail></Detail>
            </Route>
            <Route path='/detailt'>
              <GlobalStyle />
              <Curly />
              <Detailt></Detailt>
            </Route>
            <Route path='/about'>
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </Route>
            <Route path='/skills'>
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </Route>
            <Route path='/projects'>
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </Route>
            <Route path='/contact'>
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </Route>
          </Switch>
          <FooterSection />
        </BrowserRouter>}
    </div>
  );
}

export default App;

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
import Curly from './components/Curly'
import Details from './components/Details';
import Error404 from './Error404';
import ExpSection from './components/ExpSection';

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
          <Switch>
            <Route exact path='/'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExpSection />
              <ContactSection />
              <FooterSection />
            </Route>
            <Route path='/details/:id'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <Curly />
              <Details />
              <FooterSection />
            </Route>
            <Route path='/about'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExpSection />
              <ContactSection />
              <FooterSection />
            </Route>
            <Route path='/skills'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExpSection />
              <ContactSection />
              <FooterSection />
            </Route>
            <Route path='/projects'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExpSection />
              <ContactSection />
              <FooterSection />
            </Route>
            <Route path='/experience'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExpSection />
              <ContactSection />
              <FooterSection />
            </Route>
            <Route path='/contact'>
              <NavbarPages />
              <NavBurgerMenu />
              <GlobalStyle />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExpSection />
              <ContactSection />
              <FooterSection />
            </Route>
            <Route path='*'>
              <Error404></Error404>
            </Route>
          </Switch>
        </BrowserRouter>}
    </div>
  );
}

export default App;

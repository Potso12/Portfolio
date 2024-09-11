import './App.css'
import Navigationbar from './components/Navigationbar';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Studies from './pages/Studies';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { Skill } from "./types/types"



import { useEffect, useState } from "react"
import fetchData from './firebaseconfig';



function App() {

  const [skillsData, setSkillsData] = useState<Skill[]>([])
  const [isMobile, setIsMobile] = useState<Boolean>(false)




  useEffect(() => {

    const fetchSkillsData = async () => {
      const skills = await fetchData('skills')
      if(skills){
        setSkillsData(skills)
      }
    };

    fetchSkillsData()
    window.innerWidth < 700 ? setIsMobile(true) : setIsMobile(false)
  },[]);

  useEffect(() => {
    console.log(skillsData)
  },[skillsData])


  const sectionRefs = {
    'Home': useInView(),
    'About': useInView(),
    'Courses': useInView(),
    'Projects': useInView(),
    'Skills': useInView(),
    'Summary': useInView(),
    'Contact': useInView()
  };

  return (
    <div className="App">
        <Navigationbar isMobile={isMobile}/>
        <Element name='Home'>
          <div className='Home' ref={sectionRefs['Home'].ref}>
            <Home isMobile={isMobile}/>
          </div>
        </Element>
        <Element name='About'>
          <div className='Projects' ref={sectionRefs['About'].ref}>
            <About/>
          </div>
        </Element>

        <Element name='Projects'>
          <div className='Projects' ref={sectionRefs['Projects'].ref}>
            <Projects isMobile={isMobile}/>
          </div>
        </Element>
        <Element name='Skills'>
          <div className='Skills' ref={sectionRefs['Skills'].ref}>
            <Skills skillsData={skillsData} isMobile={isMobile}/>
          </div>
        </Element>
        <Element name='Summary'>
          <div ref={sectionRefs['Summary'].ref}>
            <Studies/>
          </div>
        </Element>
        <Element name='Contact'>
          <div className='Contact' ref={sectionRefs['Contact'].ref}>
            <Contact/>
          </div>
        </Element>
    </div>
  );
}

export default App;

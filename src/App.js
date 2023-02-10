import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects.jsx";
import {useRef} from "react";
import Links from "./components/links/Links";

import cats from './images/bg.jpg'
import ScrollArrow from "./components/ScrollArrow";

//TODO: add copying functionality to links
//TODO: fix projects with some kind of a modal
//TODO: add some parallaxed images to the page

function App() {
    const parallaxRef = useRef()
    const scrollTo = (page) => {
        parallaxRef.current.scrollTo(page)
    }
    return (
        <div className="App">
            <Parallax pages={4} className='parallax' ref={parallaxRef}>
                <ParallaxLayer offset={0} speed={0} factor={4}
                               className='bg'
                />

                <ParallaxLayer offset={0} speed={1} className='centered cyan'>
                    <AboutMe/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} className='centered yellow'>
                    <Skills/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1} className='centered coral'>
                    <Projects/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1} className='centered cyan'>
                    <Links/>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.5} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={1} text={'Go down 🐤'}/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={2} text={'Go downer 🏊'}/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.25} factor={0.2}
                               // sticky={{start: 2, end: 2.8}}
                >
                    <ScrollArrow scrollTo={scrollTo} page={4} text={'🤙 Call me?'}/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.5} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={0} text={'Go up 🚀'}/>
                </ParallaxLayer>


                {/*<ParallaxLayer offset={1} speed={0.8} style={{opacity: 0.1}}>*/}
                {/*    <img src={cats} style={{display: 'block', width: '20%', marginLeft: '55%'}}/>*/}
                {/*    <img src={cats} style={{display: 'block', width: '10%', marginLeft: '15%'}}/>*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1.75} speed={0.5} style={{opacity: 0.1}}>*/}
                {/*    <img src={cats} style={{display: 'block', width: '20%', marginLeft: '70%'}}/>*/}
                {/*    <img src={cats} style={{display: 'block', width: '20%', marginLeft: '40%'}}/>*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1} speed={0.2} style={{opacity: 0.2}}>*/}
                {/*    <img src={cats} style={{display: 'block', width: '10%', marginLeft: '10%'}}/>*/}
                {/*    <img src={cats} style={{display: 'block', width: '20%', marginLeft: '75%'}}/>*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1.6} speed={-0.1} style={{opacity: 0.4}}>*/}
                {/*    <img src={cats} style={{display: 'block', width: '20%', marginLeft: '60%'}}/>*/}
                {/*    <img src={cats} style={{display: 'block', width: '25%', marginLeft: '30%'}}/>*/}
                {/*    <img src={cats} style={{display: 'block', width: '10%', marginLeft: '80%'}}/>*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={2.6} speed={0.4} style={{opacity: 0.6}}>*/}
                {/*    <img src={cats} style={{display: 'block', width: '20%', marginLeft: '5%'}}/>*/}
                {/*    <img src={cats} style={{display: 'block', width: '15%', marginLeft: '75%'}}/>*/}
                {/*</ParallaxLayer>*/}
            </Parallax>
        </div>
    );
}

export default App;


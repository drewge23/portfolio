import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {lazy, useRef} from "react";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import Links from "./components/links/Links";
import ScrollArrow from "./components/ScrollArrow";

import Cat from "./components/Cat";

const Projects = lazy(() => import('./components/projects/Projects'));

function App() {
    const parallaxRef = useRef()
    const scrollTo = (page) => {
        parallaxRef.current.scrollTo(page)
    }
    return (
        <div className="App">
            <Parallax pages={4} className='parallax' ref={parallaxRef}>
                <ParallaxLayer offset={0} speed={0} factor={4}
                               className='bg'/>

                <ParallaxLayer offset={0} speed={1} className='centered cyan'>
                    <AboutMe/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} className='centered yellow'>
                    <Skills/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1} className='coral'>
                    <Projects/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1} className='centered cyan'>
                    <Links/>
                </ParallaxLayer>


                <ParallaxLayer offset={0.95} speed={0.4} style={{opacity: 0.4}} factor={0}>
                    <Cat w={'12.5%'} ml={'10%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.95} speed={0.5} style={{opacity: 0.2}} factor={0}>
                    <Cat w={'10%'} ml={'15%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.95} speed={0.6} style={{opacity: 0.5}} factor={0}>
                    <Cat w={'15%'} ml={'75%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.99} speed={0.2} style={{opacity: 0.6}} factor={0}>
                    <Cat w={'7.5%'} ml={'35%'} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.99} speed={0.4} style={{opacity: 0.5}} factor={0}>
                    <Cat w={'7.5%'} ml={'70%'} />
                </ParallaxLayer><ParallaxLayer offset={1.99} speed={0.3} style={{opacity: 0.3}} factor={0}>
                    <Cat w={'15%'} ml={'75%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={1.95} speed={0.3} style={{opacity: 0.4}} factor={0}>
                    <Cat w={'12.5%'} ml={'35%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={1.95} speed={0.6} style={{opacity: 0.6}} factor={0}>
                    <Cat w={'15%'} ml={'10%'} />
                </ParallaxLayer>

                <ParallaxLayer offset={2.99} speed={0.4} style={{opacity: 0.6}} factor={0}>
                    <Cat w={'7.5%'} ml={'75%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={2.95} speed={0.6} style={{opacity: 0.5}} factor={0}>
                    <Cat w={'10%'} ml={'10%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={2.95} speed={0.4} style={{opacity: 0.3}} factor={0}>
                    <Cat w={'15%'} ml={'20%'} />
                </ParallaxLayer>
                <ParallaxLayer offset={2.95} speed={0.3} style={{opacity: 0.4}} factor={0}>
                    <Cat w={'12.5%'} ml={'65%'} />
                </ParallaxLayer>

                <ParallaxLayer offset={3.5} speed={0.4} style={{opacity: 0.5}} factor={0}>
                    <Cat w={'17.5%'} ml={'80%'} />
                </ParallaxLayer>


                <ParallaxLayer offset={0} speed={0.5} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={1} text={'Go down 🐤'}/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={2} text={'Go downer 🏊'}/>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.25} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={4} text={'🤙 Call me!'}/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.5} factor={0.2}>
                    <ScrollArrow scrollTo={scrollTo} page={0} text={'Go up 🚀'}/>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default App;


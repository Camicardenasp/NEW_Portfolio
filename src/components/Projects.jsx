import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Pawe from '../assets/img/Pawe.png'
import Portfolio from '../assets/img/Porfolio.png'
import Music from '../assets/img/Music.png'
import Video from '../assets/img/Video.png'
import Cuerda from '../assets/img/Cuerda.png'
import Sound from '../assets/img/Sound.png'
import Marca from '../assets/img/Marca.png'
import Anefty from '../assets/img/Anefty.png'
import Spotify from '../assets/img/Spotify.png'

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    
    
  ];

  const development = [
    {
      title: "Web Developer Portfolio",
      description: "Design & Development",
      imgUrl: Portfolio,
      github: "https://github.com/Camicardenasp/p",
      deploy: "https://cacp.netlify.app/",
    },
    {
      title: "Pawe's E-Commerce",
      description: "Design & Development",
      imgUrl: Pawe, 
      github: "https://github.com/Camicardenasp/pawe",
      deploy: "https://pawe.netlify.app/",
    },
    {
      title: "Game: Wheel of Doom",
      description: "Game Design",
      imgUrl: Cuerda,
      github: "https://github.com/Camicardenasp/EnLaCuerdaFloja",
      deploy: "https://enlacuerdafloja.netlify.app/",
    },
  ];

  const single = [
    {
      title: "Music Portfolio",
      description: "Design & Development",
      imgUrl: Music,
      github: "https://github.com/Camicardenasp/MusicPortfolio",
      deploy: "https://musicportfolio.camicardenasp.repl.co/",
    },
    {
      title: "VideoClub",
      description: "CRUD Application",
      imgUrl: Video,
      github: "https://github.com/Camicardenasp/videoclub-front",
      deploy: "https://myvideoclub.netlify.app/",
    },
    {
      title: "NTF's Landing Page",
      description: "Design",
      imgUrl: Anefty,
    },
  ];

  const design =[
    {
      title: "SoundWave Music App",
      description: "Figma UI Design",
      imgUrl: Sound,
      github: "https://www.figma.com/file/ikFCu8PXBeOtvzU2FDXJwI/LandingPage_SoundWave_Camilo_C%C3%A1rdenas?node-id=351%3A11&t=lO54yMgd5w9fVxju-1",
      deploy: "https://www.figma.com/proto/ikFCu8PXBeOtvzU2FDXJwI/LandingPage_SoundWave_Camilo_C%C3%A1rdenas?node-id=25%3A101",
    }, 
    {
      title: "Use of Brand Manual",
      description: "Figma UI Design",
      imgUrl: Marca,
      github: "https://www.figma.com/file/CabyhWz5jxifYKf5HfAkg9/Manual-de-Marca-Personal---Camilo-C%C3%A1rdenas?node-id=0%3A1&t=1ZQYLVD1GWqfwWeE-1",
      deploy: "https://www.figma.com/proto/CabyhWz5jxifYKf5HfAkg9/Manual-de-Marca-Personal---Camilo-C%C3%A1rdenas?node-id=738%3A68&scaling=contain&page-id=0%3A1&starting-point-node-id=738%3A68",
    }, 
    {
      title: "Spotify Clone",
      description: "Figma UI Design",
      imgUrl: Spotify,
      github: "https://www.figma.com/file/U50rrayNi8TGYxKQB5nqf9/Spotify-Web---Camilo-C%C3%A1rdenas?node-id=0%3A1&t=i0VKAjHhQsEzGVEG-1",
      deploy: "https://www.figma.com/proto/U50rrayNi8TGYxKQB5nqf9/Spotify-Web---Camilo-C%C3%A1rdenas?node-id=114%3A74&scaling=scale-down",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                  <p>The projects I have done range from the development of Landing Pages, games with a simple interface, static web pages, dynamic web pages, portfolios and simple electronic commerce linked to the WhatsApp API. 💻 On the other hand, in the design sector I have experience designing brand manuals, logos, and interface and application mockups. 🎨</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Single Pages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Figma</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          development.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                          {
                            single.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                          {
                            design.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate=["Web Developer", "Web Designer", "UI/UX Designer", "Data Analyst", "Consultant", "Sustainability Analyst", "Musician"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Camilo Cárdenas Poveda`} <br></br> </h1>
                  <h4><span className="txt-rotate" dataperiod="1000" data-rotate='[ "Musician", "Web Developer", "Web Designer", "UI/UX Designer", "Data Analyst", "Consultant", "Sustainability Analyst" ]'><span className="wrap">{text}</span></span></h4>
                  <p>I am a cheerful, responsible and proactive person. At the end of my professional career I began to certify myself as a Data Scientist in the DataCamp platform, and as a Web Developer in the SoloLearn platform combined with a scholarship to study in the Full-Stack Development Bootcamp at Prográmate-Academy powered by EducaMás, GOYN & Simplon partnership program. Through these experiences I have learned to analyze data with Python and SQL, as well as Web Development with the MERN Stack.</p>
                  <Router>
                    <HashLink to="#connect" style={{textDecoration:"none"}}>
                      <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </HashLink>
                  </Router>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

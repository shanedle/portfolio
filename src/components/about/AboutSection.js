import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const AboutSection = () => {
    return (
        <>
            <Container>
                <div className="section-header text-center">
                    <h1 className="display-5">About Me</h1>
                </div>

                <Row>
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }}>
                        <Image src={process.env.PUBLIC_URL + './images/coding.svg'} alt="Person Coding Illustration" fluid />
                    </Col>

                    <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-center">
                        <h3 className="mb-4">I'm Shane</h3>
                        <div className="about__textcontent">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa id sequi
                            praesentium
                            iste
                            dolor tenetur facere dolorem nostrum ullam doloremque, adipisci amet maxime. Mollitia
                            praesentium
                            veritatis quisquam. Optio, laborum?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa id sequi
                            praesentium
                            iste
                            dolor tenetur facere dolorem nostrum ullam doloremque, adipisci amet maxime. Mollitia
                            praesentium
                            veritatis quisquam. Optio, laborum?</p>
                        </div>

                        <div className="d-flex flex-column flex-lg-row">
                            <Button className="about__button mb-3 ml-lg-0" href="https://vigorous-lamarr-56c038.netlify.app/" target="_blank" rel="noopener noreferrer">Linkedin <FaLinkedin /></Button>
                            <Button className="about__button mb-3 ml-lg-3" href="https://github.com/shanedle/project-exam-2" target="_blank" rel="noopener noreferrer">GitHub <FaGithub /></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutSection;
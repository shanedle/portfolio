import React from "react";
import { Container, Col, Row, Card, CardDeck, Button } from "react-bootstrap";
import { FaGithub, FaAngleRight } from "react-icons/fa";

const ProjectSection = () => {
    return (
        <>
            <Container>
                <div className="section-header text-center">
                    <h1 className="display-5 mb-4">Projects</h1>
                </div>

                <Row className="pb-5">
                    <Col md={6} lg={4}>
                        <CardDeck>
                            <Card className="project-card mb-4">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/csm.jpg"} alt="Project Image" />
                                <Card.Body className="project-card__body">
                                    <Card.Title className="project-card__title text-center">Science Museum</Card.Title>
                                    <Card.Text className="project-card__text">
                                        Semester Project 1 - Noroff
                                    </Card.Text>
                                    <Button className="project-card__button float-left" href="https://github.com/shanedle/Semester-Project-1" target="_blank" rel="noopener noreferrer">Source Code <FaGithub /></Button>
                                    <Button className="project-card__button float-right" href="https://shanedle.github.io/Semester-Project-1/html/index.html" target="_blank" rel="noopener noreferrer">View Demo <FaAngleRight /></Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                    <Col md={6} lg={4}>
                        <CardDeck>
                            <Card className="project-card mb-4">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/spacex.jpg"} alt="Project Image" />
                                <Card.Body className="project-card__body">
                                    <Card.Title className="project-card__title text-center">SpaceX</Card.Title>
                                    <Card.Text className="project-card__text">
                                        Project Exam 1 - Noroff
                                    </Card.Text>
                                    <Button className="project-card__button float-left" href="https://github.com/shanedle/ProjectExam1" target="_blank" rel="noopener noreferrer">Source Code <FaGithub /></Button>
                                    <Button className="project-card__button float-right" href="https://shanedle.github.io/ProjectExam1//html/index.html" target="_blank" rel="noopener noreferrer">View Demo <FaAngleRight /></Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                    <Col md={6} lg={4}>
                        <CardDeck>
                            <Card className="project-card mb-4">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/god.jpg"} alt="Project Image" />
                                <Card.Body className="project-card__body">
                                    <Card.Title className="project-card__title text-center">Board Game</Card.Title>
                                    <Card.Text className="project-card__text">
                                        Semester Project 2 - Noroff
                                    </Card.Text>
                                    <Button className="project-card__button float-left" href="https://github.com/shanedle/GameOfDice" target="_blank" rel="noopener noreferrer">Source Code <FaGithub /></Button>
                                    <Button className="project-card__button float-right" href="https://shanedle.github.io/GameOfDice/" target="_blank" rel="noopener noreferrer">View Demo <FaAngleRight /></Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                    <Col md={6} lg={4}>
                        <CardDeck>
                            <Card className="project-card mb-4">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/holidaze.jpg"} alt="Project Image" />
                                <Card.Body className="project-card__body">
                                    <Card.Title className="project-card__title text-center">Holidaze Hotel</Card.Title>
                                    <Card.Text className="project-card__text">
                                        Project Exam 2 - Noroff
                                    </Card.Text>
                                    <Button className="project-card__button float-left" href="https://github.com/shanedle/project-exam-2" target="_blank" rel="noopener noreferrer">Source Code <FaGithub /></Button>
                                    <Button className="project-card__button float-right" href="https://vigorous-lamarr-56c038.netlify.app/" target="_blank" rel="noopener noreferrer">View Demo <FaAngleRight /></Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                    <Col md={6} lg={4}>
                        <CardDeck>
                            <Card className="project-card mb-4">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/yay.jpg"} alt="Project Image" />
                                <Card.Body className="project-card__body">
                                    <Card.Title className="project-card__title text-center">The YAY Company</Card.Title>
                                    <Card.Text className="project-card__text">
                                        CSS Frameworks CA - Noroff
                                    </Card.Text>
                                    <Button className="project-card__button float-left" href="https://github.com/shanedle/css-frameworks-ca" target="_blank" rel="noopener noreferrer">Source Code <FaGithub /></Button>
                                    <Button className="project-card__button float-right" href="https://confident-edison-d7b952.netlify.app/" target="_blank" rel="noopener noreferrer">View Demo <FaAngleRight /></Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                    <Col md={6} lg={4}>
                        <CardDeck>
                            <Card className="project-card mb-4">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "./images/jsfca.jpg"} alt="Project Image" />
                                <Card.Body className="project-card__body">
                                    <Card.Title className="project-card__title text-center">Video Games Database</Card.Title>
                                    <Card.Text className="project-card__text">
                                        Javascript Frameworks CA - Noroff
                                    </Card.Text>
                                    <Button className="project-card__button float-left" href="https://github.com/shanedle/shane-le-js-frameworks-ca" target="_blank" rel="noopener noreferrer">Source Code <FaGithub /></Button>
                                    <Button className="project-card__button float-right" href="https://sleepy-benz-bcc1ae.netlify.app/" target="_blank" rel="noopener noreferrer">View Demo <FaAngleRight /></Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default ProjectSection;
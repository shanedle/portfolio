import React from "react";
import { Jumbotron, Button, Container, Col, Row, Image } from "react-bootstrap";

const Hero = () => {
    return (
        <>
            <Jumbotron className="bg-white">
                <Container>
                    <Row>
                        <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                            <h1 className="display-4 font-weight-bold">
                                Shane Le
                            </h1>

                            <p className="lead my-4">
                                Aspiring Front End Developer
                            </p>

                            <hr class="my-4" />

                            <div className="d-flex flex-column flex-lg-row">
                                <Button className="hero__button mb-3 ml-lg-0" href="#project">Check out my projects</Button>
                                <Button className="hero__button mb-3 ml-lg-3" href="#contact">Contact Me</Button>
                            </div>
                        </Col>

                        <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 2 }}>
                            <Image src={process.env.PUBLIC_URL + './images/coding.svg'} alt="Person Coding Illustration" fluid />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </>
    );
}

export default Hero;
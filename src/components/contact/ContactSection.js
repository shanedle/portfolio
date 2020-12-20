import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form } from "react-bootstrap";
import Error from "./Error";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required.")
        .min(2, "Name must be at least 2 characters!"),
    email: yup
        .string()
        .required("Email is required.")
        .email("Email must be entered!"),
    message: yup
        .string()
        .required("Message is required.")
        .min(10, "Message must be at least 10 characters!")
});

const ContactSection = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [validate, setValidate] = useState(false);

    const onSubmit = (data, e) => {
        console.log("data", data);
        setValidate(true);
        e.target.reset();
    }

    return (
        <Container>
            <div className="section-header text-center">
                <h1 className="display-5">Contact Me</h1>
            </div>

            {validate ? (
                <div className="my-3 text-center">
                    <h3>Thank you</h3>
                    <p>Your message has been successfully sent. We will contact you very soon!</p>
                </div>) : (
                    <div>
                        <Form className="contact-form my-3" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group>
                                <Form.Label>Name*</Form.Label>
                                <Form.Control name="name" placeholder="Enter your name" ref={register} />
                                {errors.name && <Error>{errors.name.message}</Error>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email*</Form.Label>
                                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                                {errors.email && <Error>{errors.email.message}</Error>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message*</Form.Label>
                                <Form.Control name="message" as="textarea" placeholder="Enter your message" ref={register} />
                                {errors.message && <Error>{errors.message.message}</Error>}
                            </Form.Group>

                            <Button type="submit" className="contact-form__button" block>Submit</Button>
                        </Form>
                    </div>
                )}
        </Container>
    );
}

export default ContactSection;
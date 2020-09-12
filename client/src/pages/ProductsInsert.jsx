import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Title = styled.h1.attrs({
    className: "h1",
})``;

const Wrapper = styled.div.attrs({
    className: "form-group",
})`
    margin: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
`;

const InputText = styled.input.attrs({
    className: "form-control",
})`
    margin: 5px;
`;

class ProductsInsert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            country: "",
            rating: "",
            time: "",
            showAlert: false,
        };
    }

    handleChangeInputName = async (event) => {
        const name = event.target.value;
        this.setState({ name });
    };

    handleChangeInputCountry = async (event) => {
        const country = event.target.value;
        this.setState({ country });
    };

    handleChangeInputRating = async (event) => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating;

        this.setState({ rating });
    };

    handleChangeInputTime = async (event) => {
        const time = event.target.value;
        this.setState({ time });
    };

    handleIncludeProduct = async () => {
        const { name, rating, country, time } = this.state;
        const arrayTime = time.split("/");
        const payload = { name, rating, country, time: arrayTime };

        await api.insertProduct(payload).then((res) => {
            //window.alert(`Product inserted successfully`);
            this.setState({
                name: "",
                country: "",
                rating: "",
                time: "",
                showAlert: true,
            });
        });
    };

    render() {
        const { name, rating, country, time, showAlert } = this.state;
        return (
            <Wrapper>
                <Alert show={showAlert} variant="success">
                    <p>Product inserted successfully</p>
                </Alert>

                <Title>Create Product</Title>

                <Form>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter product name"
                                        value={name}
                                        onChange={this.handleChangeInputName}
                                    />
                                    <Form.Text className="text-muted">
                                        Product name must be unique
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs lg="3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Country: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Entry a country"
                                        value={country}
                                        onChange={this.handleChangeInputCountry}
                                    />
                                </Form.Group>{" "}
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Price: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter a price"
                                        value={rating}
                                        onChange={this.handleChangeInputRating}
                                    />
                                    <Form.Text className="text-muted">
                                        Enter only numbers
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs lg="3">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Time: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter a time"
                                        value={time}
                                        onChange={this.handleChangeInputTime}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                </Form>

                <Container>
                    <Row className="justify-content-md-start">
                      <Col xs lg="3"/>
                        <Col xs lg="2">
                            <Button
                                variant="success"
                                onClick={this.handleIncludeProduct}
                            >
                                Add Product
                            </Button>{" "}
                        </Col>
                        <Col xs lg="1">
                            <Button variant="danger" href={"/Products/list"}>
                                Cancel
                            </Button>{" "}
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default ProductsInsert;

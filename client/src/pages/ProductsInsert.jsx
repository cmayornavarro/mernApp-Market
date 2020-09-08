import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
import Form from "react-bootstrap/Form";

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProductsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            country: '',
            rating: '',
            time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputCountry = async event => {
        const country = event.target.value
        this.setState({ country })
    }    

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleIncludeProduct = async () => {
        const { name, rating, country,time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, country,time: arrayTime }

        await api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
            this.setState({
                name: '',
                country: '',
                rating: '',
                time: '',
            })
        })
    }

    render() {
        const { name, rating, country,time } = this.state
        return (
            <Wrapper>
                <Title>Create Product</Title>

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name: </Form.Label>
    <Form.Control type="text" placeholder="Enter product name"  value={name}  onChange={this.handleChangeInputName}/>
    <Form.Text className="text-muted">
      Product name must be unique
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Country: </Form.Label>
    <Form.Control type="text" placeholder="Entry a country"  value={country}  onChange={this.handleChangeInputCountry}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Price: </Form.Label>
    <Form.Control type="text"   placeholder="Enter a price"  value={rating}  onChange={this.handleChangeInputRating}/>
    <Form.Text className="text-muted">
      Enter only numbers
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Time: </Form.Label>
    <Form.Control type="text"   placeholder="Enter a time"  value={rating}  onChange={this.handleChangeInputTime}/>
    
  </Form.Group>
</Form>  
               


                <Button onClick={this.handleIncludeProduct}>Add Product</Button>
                <CancelButton href={'/Products/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductsInsert
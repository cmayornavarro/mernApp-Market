import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Country: </Label>
                <InputText
                    type="text"
                    value={country}
                    onChange={this.handleChangeInputCountry}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeProduct}>Add Product</Button>
                <CancelButton href={'/Products/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductsInsert
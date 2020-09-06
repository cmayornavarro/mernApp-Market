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

class ProductsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            country:'',
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

    handleUpdateProduct = async () => {
        const { id, name, rating,country,time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, country, time: arrayTime }

        await api.updateProductById(id, payload).then(res => {
            window.alert(`Product updated successfully`)
            this.setState({
                name: '',
                country: '',
                rating: '',
                time: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const Product = await api.getProductById(id)

        this.setState({
            name: Product.data.data.name,
            country: Product.data.data.country,
            rating: Product.data.data.rating,
            time: Product.data.data.time.join('/'),
        })
    }

    render() {
        const { name, rating, time,country } = this.state
        return (
            <Wrapper>
                <Title>Update Product</Title>

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

                <Button onClick={this.handleUpdateProduct}>Update Product</Button>
                <CancelButton href={'/Products/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductsUpdate
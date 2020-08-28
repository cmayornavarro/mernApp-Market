import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My Market Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/product" className="nav-link">
                                List Products
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/product/create" className="nav-link">
                                Create Product
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
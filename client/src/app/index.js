import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Menu } from '../components'
import { ProductsList, ProductsInsert, ProductsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route path="/market/product" exact component={ProductsList} />
                <Route path="/product/create" exact component={ProductsInsert} />
                <Route
                    path="/product/update/:id"
                    exact
                    component={ProductsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
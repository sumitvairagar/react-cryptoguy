import React from 'react'
import {Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, CryptoCurrencies, News, CryptoCurrencyDetails } from './components';



function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar></Navbar>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <CryptoCurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoCurrencyDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News></News>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default App

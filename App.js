import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import Root from './src/router/Root'

const store = configureStore()

export default class App extends Component {



  
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Container from './components/screens/Container';

const router = (
    <BrowserRouter >
        <div>
            <Route exact path="/" component={App} />
            <Route path="/search" component={Container} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
serviceWorker.register();

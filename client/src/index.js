import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import * as serviceWorker from './serviceWorker';
import Container from './components/screens/Container';

const router = (
    <HttpsRedirect >
        <BrowserRouter >
            <div>
                <Route exact path="/" component={App} />
                <Route path="/search" component={Container} />
            </div>
        </BrowserRouter>
    </HttpsRedirect>
)

ReactDOM.render(router, document.getElementById('root'));
serviceWorker.register();

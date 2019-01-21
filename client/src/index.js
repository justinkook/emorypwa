import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LinearIndeterminate from './components/material/Loading';

const App = lazy(() => import('./App'));
const Container = lazy(() => import('./components/screens/Container'));

const router = (
    <Suspense fallback={<LinearIndeterminate />}>
        <BrowserRouter >
            <div>
                <Route exact path="/" component={App} />
                <Route path="/search" component={Container} />
            </div>
        </BrowserRouter>
    </Suspense>
)

ReactDOM.render(router, document.getElementById('root'));
serviceWorker.register();

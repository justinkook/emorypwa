import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LinearIndeterminate from './components/material/Loading';
import { MyProvider } from './components/utils/ContextApi';
const App = lazy(() => import('./App'));
const GoogleApiComponent = lazy(() => import('./components/screens/Container'));

const router = (
    <Suspense fallback={<LinearIndeterminate />}>
        <MyProvider>
            <BrowserRouter >
                <div>
                    <Route exact path="/" render={() => <App />} />
                    <Route path="/search" render={() => <GoogleApiComponent />} />
                </div>
            </BrowserRouter>
        </MyProvider>
    </Suspense>
)

ReactDOM.render(router, document.getElementById('root'));
serviceWorker.register();

import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LinearIndeterminate from './components/material/Loading';
import { MyProvider } from './components/utils/ContextApi';
import App from './App';
import { ResultContext } from './components/utils/ContextApi';

const Insurance = lazy(() => import('./components/SideBar/Insurance'));
const Container = lazy(() => import('./components/screens/Container'));

const router = (
    <Suspense fallback={<LinearIndeterminate />}>
        <MyProvider>
            <ResultContext.Consumer>
                {context => (
                    <BrowserRouter >
                        <div>
                            <Route exact path="/" render={() => <App />} />
                            <Route path="/search" render={() => <Container context={context} />} />
                            <Route path="/insurance" render={() => <Insurance />} />
                        </div>
                    </BrowserRouter>
                )}
            </ResultContext.Consumer>
        </MyProvider>
    </Suspense>
)

ReactDOM.render(router, document.getElementById('root'));
serviceWorker.register();

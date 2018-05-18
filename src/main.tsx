import { configure } from 'mobx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { Provider } from "mobx-react";
import { globalStores } from "app/stores/global";
import { BrowserRouter } from "react-router-dom";

// don't allow state modifications outside actions
configure({
    enforceActions: true
});

ReactDOM.render(
    <Provider {...globalStores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
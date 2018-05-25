import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { hot } from 'react-hot-loader';
import { Home } from "app/pages/Home";
import { About } from "app/pages/About";
import { Layout } from "app/components/Layout";
import { inject, observer } from "mobx-react";
import { ROUTING_STORE } from "app/stores/global";

require("./app.sass");

export interface IAppProps extends RouteComponentProps<{}> {
    children?: React.ReactElement<any>;
}

export const App = hot(module)(withRouter(inject(ROUTING_STORE)(observer((props) => (
    <Layout>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    </Layout>
)))));

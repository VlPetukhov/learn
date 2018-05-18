import * as React from "react";

export interface IHomeProps {
    children?: React.ReactElement<any>;
}

export const Home = (props: IHomeProps) => (
    <h2>Home{ console.log('Home') }</h2>
);

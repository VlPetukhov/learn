import * as React from "react";

export interface IAboutProps {
    children?: React.ReactElement<any>;
}

export const About = (props: IAboutProps) => (
    <h2>About{ console.log('About') }</h2>
);

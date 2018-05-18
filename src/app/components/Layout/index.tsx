import * as React from "react";
import { NavBar } from "app/components/NavBar";

export const Layout = (props: any) => (
    <>
        <NavBar />
        <div className="container is-fluid">
            { props.children }
        </div>
    </>
);

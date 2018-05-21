import * as React from "react";
import { NavBar } from "app/components/NavBar";
import { Footer } from "app/components/Footer";
// import * as styles from "./styles.css";

export const Layout = (props: any) => (
    <>
        <NavBar />
        <div className={"container is-fluid"}>
            { props.children }
        </div>
        <Footer />
    </>
);

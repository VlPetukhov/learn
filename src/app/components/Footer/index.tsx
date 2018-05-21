import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./styles.css";

export interface IFooterProps {
    children?: React.ReactElement<any>[];
}

class FooterContainer extends React.Component<{children?: React.ReactNode}, {}> {
    public render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById("footer-root") as HTMLElement,
        );
    }
}

export const Footer= (props: IFooterProps) => (
    <FooterContainer>
        <footer className={"footer " + styles.customFooter}>
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        <strong>eSlovo</strong>
                    </p>
                    <p>
                        Copyright Vladimir Petukhov, 2017-{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    </FooterContainer>
);
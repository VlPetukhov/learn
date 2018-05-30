import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import * as classNames from "classnames";
import * as styles from "./styles.css";

class NavBarContainer extends React.Component<{children?: React.ReactNode}, {}> {
            public render() {
            return ReactDOM.createPortal(
                this.props.children,
                document.getElementById("header-root") as HTMLElement,
            );
        }
    }

export interface INavBarProps {
    children?: React.ReactElement<any>[];
}

interface INavBarState {
    menuIsActive: boolean;
}

export class NavBar extends React.Component<INavBarProps, INavBarState> {
    constructor(props: INavBarProps) {
        super(props);

        this.state = {
            menuIsActive: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    public render() {
        const menuClasses = classNames({"navbar-menu": true, "is-active": this.state.menuIsActive});
        return (
            <NavBarContainer>
                <nav id="main-navigation" className={"navbar is-fixed-top " + styles.customNavbar} role="navigation" aria-label="main navigation">
                    <div className="container is-fluid">
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <img src="http://placehold.it/50x28" alt="eSlovo" />
                            </Link>

                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.toggleMenu}>
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                            </a>
                        </div>
                        <div className={menuClasses}>
                            <div className="navbar-start">
                                <Link className="navbar-item" to="/" onClick={this.toggleMenu}>Home</Link><br />
                                <Link className="navbar-item"  to="/about" onClick={this.toggleMenu}>About</Link><br />
                            </div>

                            <div className="navbar-end">
                                <Link className="navbar-item"  to="#">Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </NavBarContainer>
        );
    }

    protected toggleMenu(event: any) {
        this.setState((prevState) => ({ menuIsActive: !prevState.menuIsActive }));
    }
}

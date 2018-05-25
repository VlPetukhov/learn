import * as React from "react";
import { ModalCard } from "app/components/ModalCard";

export interface IHomeProps {
    children?: React.ReactElement<any>;
}

export class Home extends React.Component<IHomeProps, {visible: boolean;}> {
    constructor(props: IHomeProps) {
        super(props);

        this.state = {
            visible: false,
        }
    }

    public render() {
        return (
            <>
            <h2 className="title is-1" onClick={() => this.setState((prevState => ({visible: !prevState.visible})))}>Home{ console.log('Home') }</h2>
            <ModalCard
                visible={ this.state.visible }
                onClose={() => this.setState((prevState => ({visible: !prevState.visible})))}
                buttons={[{text: "Hi", onClick: ()=> console.log("Hi")}, {text: "Hey", onClick: ()=> console.log("Hey")}]}
            >
                Hi! I'm ModalCard.
            </ModalCard>
            </>
        );
    }
}

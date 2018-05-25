import * as React from "react";
require("./styles.css");

export interface IModalCardProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    buttons?: IButtonData[];
}

export interface IButtonData {
    text: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    hint?: string;
}

export const ModalCard = (props: IModalCardProps) => (
    <div className={"modal" + (props.visible ? " is-active" : "")}>
        <div className="modal-background" />
        <div className="modal-card no-margin">
            <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                <button className="delete" aria-label="close" onClick={props.onClose}/>
            </header>
            <section className="modal-card-body">
                {props.children}
            </section>
            {props.buttons && props.buttons.length &&
                <footer className="modal-card-foot">
                    { props.buttons.map((btnData: IButtonData, idx: number) => (
                        <button className={"button " + btnData.className || ""}
                            title={btnData.hint || ""}
                            disabled={btnData.disabled}
                            onClick={btnData.onClick}
                                key={idx}
                        >{btnData.text}</button>
                    )) }
                </footer>
            }
        </div>
    </div>
);

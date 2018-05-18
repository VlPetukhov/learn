import { RouterStore } from "mobx-react-router";

export const ROUTING_STORE = "routingStore";

export const routingStore = new RouterStore();

export const globalStores = {
    [ROUTING_STORE]: routingStore,
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
class Greeting extends React.Component {
    render() {
        return React.createElement("p", null,
            "Hello from ",
            "<Greeting />");
    }
}
ReactDom.render(React.createElement(Greeting, null), document.body);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("React");
const ReactDOM = require("react-dom");
const m = require("./m");
const greeting_1 = require("./greeting");
if ($$webpack_dev && module.hot) {
    // dev w/ HMR: hot-reload './m', './greeting' and re-render
    console.info("configuring webpack HMR");
    console.info('m=', m);
    module.hot.accept(["./m", "./greeting"], function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        ReactDOM.render(React.createElement(greeting_1.Greeting, { val: m.v }), document.body.firstElementChild);
    });
}
else if ($$webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
}
document.body.insertBefore(document.createElement("div"), document.body.firstElementChild);
ReactDOM.render(React.createElement(greeting_1.Greeting, { val: m.v }), document.body.firstElementChild);

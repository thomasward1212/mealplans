import * as React from "react";
import * as ReactDOM from "react-dom";

import * as m from "./m";
import { Greeting } from "./greeting";
import { webpack_dev, haveHMR, } from "./webpack-hmr";

if (webpack_dev && haveHMR(module)) {
    // dev w/ HMR: hot-reload './m' and create <li> from it
    console.info("configuring webpack HMR");
    console.info("m=", m);
    module.hot.accept("./m", function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        ReactDOM.render(<Greeting val={m.v} />, document.body.firstElementChild);
    });
} else if (webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
}

ReactDOM.render(<Greeting val={m.v} />, document.body.firstElementChild);

import * as React from 'React';
import * as ReactDOM from 'react-dom';

declare const $$webpack_dev: boolean;

type HMRModule = typeof module & {
    hot?: {
        accept(dependencies: string | string[],
            callback: (updatedDependencies: any[]) => void): void
        accept(moduleName: string, callback: () => void): void
    }
}

import * as m from './m';
import { Greeting } from './greeting';

if ($$webpack_dev && (module as HMRModule).hot) {
    // dev w/ HMR: hot-reload './m', './greeting' and re-render

    console.info("configuring webpack HMR");
    console.info('m=', m);
    (module as HMRModule).hot.accept(["./m", "./greeting"], function () {
        console.log("accept handler get called", [].slice.call(arguments));
        console.info("m=", m);
        ReactDOM.render(<Greeting val={m.v} />, document.body.firstElementChild);
    });
} else if ($$webpack_dev) {
    // dev w/o HMR
    console.info("webpack HMR not available");
}

document.body.insertBefore(document.createElement("div"), document.body.firstElementChild);

ReactDOM.render(<Greeting val={m.v} />, document.body.firstElementChild);

import * as React from 'react';
import * as ReactDom from 'react-dom'

class Greeting extends React.Component<{}, {}> {
    render() {
        return <p>Hello from {"<Greeting />"}</p>;
    }
}

ReactDom.render(<Greeting />, document.body);

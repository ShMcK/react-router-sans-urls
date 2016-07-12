# React-Router Sans-URLs

Dumbed down version of React-Router without URL's or browser history.

For use with React in environments without URL support, such as inside of the Atom Editor.

* An [example](//coderoad.io)
* A [demo](./demo)

### Setup

```shell
npm i react-router-sans-urls
```

### Usage

```jsx
import {Router, Route} from 'react-router-sans-urls';

import First from './First';
import Second from './Second';

/*...*/
render() {
  return (
    // specify the changing route
    <Router route={this.state.route}>
      // include a 'path' and matching 'component'
      <Route path='first' component={<First />}/>
      <Route path='second' component={<Second />}/>
    </Router>
  );
}
```

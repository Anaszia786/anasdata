import  App  from "./App";
import './index.css';

import  ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(<div>
    <Provider store={store}>
        <App></App>
    </Provider>
    </div>, document.getElementById('root') );

// ReactDOM.render(<h1>yeh 2nd wala</h1>, document.getElementById('root2') );









import React, {Component} from 'react'
import {store} from "./app/redux/store";
import {Provider} from "react-redux";
import {AppWithNavigationState} from "./app/routes";


class App extends Component {
    render() {
        return (

                <Provider store={store}>
                    <AppWithNavigationState/>
                </Provider>
        );
    }
}

export default App;

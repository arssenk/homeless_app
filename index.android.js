import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import Login from './android/app/src/pages/Login';

export default class ReactNativeCommonScreens extends Component {

    render() {
        return (
            <Login />
        );
    }

}

AppRegistry.registerComponent('homeless_app', () => ReactNativeCommonScreens);
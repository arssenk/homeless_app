import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    View
} from 'react-native';

import Login from './android/app/src/pages/Login';
import MainScreen from "./android/app/src/pages/MainScreen";

export default class ReactNativeCommonScreens extends Component {
    renderScene(route, navigator){
        if (route.name ==='login'){
        return <Login navigator={navigator} />}
        if (route.name ==='mainScreen'){
            return <MainScreen navigator={navigator} />}
    }


    render() {
        return (

            <Navigator
                initialRoute={{name: 'login'}}
                renderScene={this.renderScene.bind(this)} />
        );
    }
}


AppRegistry.registerComponent('homeless_app', () => ReactNativeCommonScreens);
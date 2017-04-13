/**
 * Created by arsen on 11.04.17.
 */
import React, {Component} from "react";

import {Alert, ScrollView, StyleSheet, TextInput, View, Image} from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";
import Label from "../components/Label";

//npm i --save base-64
const btoa = require('base-64');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    static press() {
        fetch('http://api.animal-id.info/homeless_v1/auth/login', {
            method: 'get',
            headers: {
                'Authorization': 'Basic ' + btoa.encode(this.state.login + ':' + this.state.password)
            },
        }).then((response) => response.json())
            .then((responseData) => {
                Alert.alert("Authorization Info", responseData.success.toString())
            })
            .done();
    }


    render() {
        return (

            <ScrollView style={styles.scroll}>

                <View style={{flex:1,alignItems:'center', marginTop:80}}>
                <Image source={require('../img/login_logo.png')} />
                </View>

                <View style={{
                    marginTop:120/* Pack items from the end */
                }}>

                <Container>
                    <View style={styles.centerAlign}>
                    <Label text='Login'/>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(login) => this.setState({login})}
                        value={this.state.login}
                    />
                </Container>

                <Container>
                    <View style={styles.centerAlign}>
                    <Label text="Password"/>
                    </View>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                </Container>

                <View style={styles.footer}>

                    <Container>
                        <Button
                            label="Sign In"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={Login.press.bind(this)} title="Signing in"/>
                    </Container>

                </View>

                </View>

            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    centerAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 20,
        flexDirection: 'column'
    },

    label: {
        color: '#0d8888',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
        marginTop: 10
    },
    textInput: {
        height: 40,
        fontSize: 17,
    },
});
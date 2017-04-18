import React, {Component} from "react";

import {Alert, ScrollView, StyleSheet, TextInput, View, Image} from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";
import Label from "../components/Label";

//npm i --save base-64
const btoa = require('base-64');

export default class Login extends Component {
    constructor() {
        super();
        this.state = {login: '', password: '', success: false};
    }

    static press() {
        fetch('http://api.animal-id.info/homeless_v1/auth/login', {
            method: 'get',
            headers: {
                'Authorization': 'Basic ' + btoa.encode(this.state.login + ':' + this.state.password)
            },
        }).then((response) => response.json())
            .then((responseData) => {
               // Alert.alert("Authorization Info", responseData.success.toString());
                if (responseData.success){
                   this.navigate(this, 'mainScreen')
                }
            })
            .done();

    }
    navigate(routeName){
        this.props.navigator.push({
            name:routeName
        }
        )


    }

    render() {

        return (


            <ScrollView style={styles.scroll}>

                <View style={{flex:1,alignItems:'center', marginTop:80}}>
                    <Image source={require('../img/login_logo.png')} style={styles.logoStyle}/>
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
    logoStyle: {
        flex: 1,
        width: 309,
        height: 50,
        resizeMode: 'contain'
    },
    centerAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        backgroundColor: '#E0E0E0',
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
        height: 55,
        fontSize: 17,
    },
});
import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onSubmit = () => {

    }
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login!</Text>
                <InputForm
                    label="email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    hide={false}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    hide={true}
                />
                <SubmitButton onPress={() => console.log("send")} title="Login to account" />
                <Text style={styles.sub}> Not signed up?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.sublink}> Sign me up! </Text >
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    main: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sub: {
        marginTop: 10,
    },
    sublink: {
        marginTop: 10,
        color: 'blue',
        textDecorationLine: 'underline',
    },

})
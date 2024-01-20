import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';

const Signup = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();

    const onSubmit = () => {
        console.log("submit")
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
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
                <InputForm
                    label="Confirm Password"
                    value={confPassword}
                    onChangeText={(t) => setConfPassword(t)}
                    hide={true}
                />
                <SubmitButton title="Send" onPress={onSubmit} />
                <Text style={styles.sub}>Alreadt signedup?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.sublink} >then Login!</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default Signup



const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    main: {
        width: '100%',
        alignItems: 'center',
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
        color: 'blue',
        textDecorationLine: 'underline',
    },
});
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import { useLoginMutation } from '../app/sevices/authServices';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { insertSession } from '../database';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [triggerLogin, { data, isError, isSuccess, error }] = useLoginMutation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMail, setErrorMail] = useState("");

    useEffect(() => {
        if (isSuccess) {
            dispatch(setUser(data))
            insertSession(data)
                .then(result => console.log(result))
                .catch(err => console.log(err))
        };
        if (isError) {
            console.log(error);
            setErrorMail("Wrong email or password!")
        }
    }, [data, isError, isSuccess])

    const onSubmit = () => {
        setErrorMail("");
        triggerLogin({ email, password });
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
                    errorMsg={errorMail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    hide={true}
                    errorMsg=""
                />
                <SubmitButton onPress={onSubmit} title="Login to account" />
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
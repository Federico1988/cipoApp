import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import { useSignupMutation } from '../app/sevices/authServices';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { signupSchema } from '../validations/signupSchema';

const Signup = ({ navigation }) => {

    const dispatch = useDispatch();
    const [triggerSignUp, { data, isError, isSuccess, error }] = useSignupMutation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfPassword, setErrorConfPassword] = useState("");

    useEffect(() => {
        if (isSuccess) dispatch(setUser(data));
        if (isError) console.log(error);
    }, [data, isError, isSuccess]);

    const onSubmit = () => {
        try {
            signupSchema.validateSync({ email, password, confPassword })
            triggerSignUp({ email, password });
        }
        catch (error) {
            console.log(error.path)
            switch (error.path) {
                case 'email':
                    setErrorMail(error.message);
                    break;
                case 'password':
                    setErrorPassword(error.message);
                    break;

                case 'confPassword':
                    setErrorConfPassword(error.message);
                    break;
                default:
                    break;
            }
        }
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
                    errorMsg={errorMail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    hide={true}
                    errorMsg={errorPassword}
                />
                <InputForm
                    label="Confirm Password"
                    value={confPassword}
                    onChangeText={(t) => setConfPassword(t)}
                    hide={true}
                    errorMsg={errorConfPassword}
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
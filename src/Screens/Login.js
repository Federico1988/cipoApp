import React from 'react'
import { StyleSheet } from 'react-native'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'

const Login = ({ navigation }) => {
    const onSubmit = () => {

    }
    return (
        <View styles={styles.main}>
            <View styles={styles.container}>
                <Text styles={styles.title}>Login!</Text>
                <InputForm></InputForm>
                <InputForm></InputForm>
                <SubmitButton></SubmitButton>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {

    },
    container: {

    },
    title: {

    },
    sub: {

    },
    subLink: {

    }

})
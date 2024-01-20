import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputForm = ({ label, value, onChangeText, hide, errorMsg }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={hide}
      />
      {errorMsg ? <View><Text style={styles.error}>{errorMsg}</Text></View> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleInput: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
    color: '#333',
    paddingLeft: 30,
    paddingRight: 30,
  },
  error: {
    color: 'red',
  }
});

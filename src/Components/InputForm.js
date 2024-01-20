import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputForm = ({ label, value, onChangeText, hide }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={hide}
      />
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
});

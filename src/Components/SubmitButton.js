import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../Global/colors'

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  buttonContainer: {
    width:"50%",
    backgroundColor:colors.secondaryColor1,
    padding:3,
    alignItems:"center",
    borderRadius:20,

  },
  textStyle: {

  }
})
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles';

export const CustomInput = ({ label, bigger, margin=0, ...props  }) => {
  return (
    <View style={{marginHorizontal: margin, marginVertical: 10}}>
      <Text style={globalStyles.inputLabel}>{label}</Text>
      <View style={{
        ...globalStyles.inputContainer,
        height: bigger ? 150 : 50,
      }}>
        <TextInput
          {...props}
          style={{
            color: 'black'
          }}
        />
      </View>
      {/* <Text style={styles.inputError}></Text> */}


    </View>
  )
}

const styles = StyleSheet.create({
  inputError: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  }
});

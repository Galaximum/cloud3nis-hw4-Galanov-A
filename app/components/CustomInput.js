import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]

    return (
        <>
            <TextInput
                style={[
                    styles.textInput,
                    hasError && styles.errorInput
                ]}
                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 300,
        margin: 10,
        textAlign: 'center',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    },
    errorText: {
        fontSize: 10,
        textAlign: 'center',
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    }
})

export default CustomInput;
